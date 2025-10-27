'use client'

import React, { memo, useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { cn } from '../../lib/utils'

const ProSearchInterface = memo(function ProSearchInterface({
  placeholder = '搜索工具...',
  data = [],
  searchFields = ['title', 'description', 'tags'],
  categories = [],
  showRecent = true,
  showCategories = true,
  maxResults = 8,
  minSearchLength = 1,
  debounceMs = 300,
  onResultClick,
  onSearchChange,
  className = '',
  style = {},
  ...props
}) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const debounceRef = useRef(null)

  // 加载最近搜索
  useEffect(() => {
    try {
      const stored = localStorage.getItem('recent-searches')
      if (stored) {
        setRecentSearches(JSON.parse(stored))
      }
    } catch (error) {
      console.warn('Failed to load recent searches:', error)
    }
  }, [])

  // 保存最近搜索
  const saveRecentSearch = useCallback((searchTerm) => {
    if (!searchTerm.trim()) return

    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5)
    setRecentSearches(updated)

    try {
      localStorage.setItem('recent-searches', JSON.stringify(updated))
    } catch (error) {
      console.warn('Failed to save recent search:', error)
    }
  }, [recentSearches])

  // 搜索逻辑
  const searchResults = useMemo(() => {
    if (!query.trim() || query.length < minSearchLength) {
      return []
    }

    const searchTerm = query.toLowerCase().trim()
    const results = []

    data.forEach((item, index) => {
      let score = 0
      let matchedFields = []

      // 在指定字段中搜索
      searchFields.forEach(field => {
        const fieldValue = item[field]
        if (fieldValue && typeof fieldValue === 'string') {
          const lowerValue = fieldValue.toLowerCase()

          // 精确匹配得分最高
          if (lowerValue === searchTerm) {
            score += 100
            matchedFields.push(field)
          }
          // 开头匹配
          else if (lowerValue.startsWith(searchTerm)) {
            score += 50
            matchedFields.push(field)
          }
          // 包含匹配
          else if (lowerValue.includes(searchTerm)) {
            score += 10
            matchedFields.push(field)
          }

          // 模糊匹配（拼音首字母等简单处理）
          const pinyinMatch = matchPinyin(lowerValue, searchTerm)
          if (pinyinMatch > 0) {
            score += pinyinMatch
            matchedFields.push(field)
          }
        }
      })

      // 标签匹配
      if (item.tags && Array.isArray(item.tags)) {
        item.tags.forEach(tag => {
          const tagLower = tag.toLowerCase()
          if (tagLower === searchTerm) {
            score += 30
            matchedFields.push('tags')
          } else if (tagLower.includes(searchTerm)) {
            score += 15
            matchedFields.push('tags')
          }
        })
      }

      // 分类筛选
      if (selectedCategory && item.category !== selectedCategory) {
        score = 0
      }

      if (score > 0) {
        results.push({
          ...item,
          score,
          matchedFields,
          originalIndex: index
        })
      }
    })

    // 按得分排序
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
  }, [query, data, searchFields, selectedCategory, minSearchLength, maxResults])

  // 简单的拼音首字母匹配
  const matchPinyin = useCallback((text, searchTerm) => {
    // 简单实现：匹配常见汉字拼音首字母
    const pinyinMap = {
      '投': 't', '资': 'z', '分': 'f', '析': 'x', '工': 'g', '具': 'j',
      '生': 's', '活': 'h', '助': 'z', '手': 's', '计': 'j', '算': 's', '器': 'q',
      'K': 'k', 'D': 'd', 'J': 'j', 'R': 'r', 'S': 's', 'I': 'i', 'T': 't'
    }

    let textPinyin = ''
    for (let char of text) {
      textPinyin += pinyinMap[char] || char
    }

    if (textPinyin.startsWith(searchTerm)) {
      return 25
    }
    if (textPinyin.includes(searchTerm)) {
      return 10
    }
    return 0
  }, [])

  // 防抖搜索
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      onSearchChange?.(query, searchResults)
    }, debounceMs)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [query, searchResults, onSearchChange, debounceMs])

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => {
            const maxIndex = getVisibleResults().length - 1
            return prev < maxIndex ? prev + 1 : prev
          })
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0) {
            const result = getVisibleResults()[selectedIndex]
            if (result) {
              handleResultClick(result)
            }
          } else if (query.trim()) {
            handleQueryClick()
          }
          break
        case 'Escape':
          e.preventDefault()
          setIsOpen(false)
          setSelectedIndex(-1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, query])

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) &&
          listRef.current && !listRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 获取可见结果
  const getVisibleResults = useCallback(() => {
    if (query.trim() && query.length >= minSearchLength) {
      return searchResults
    }

    if (showRecent && recentSearches.length > 0) {
      return recentSearches.map(term => ({
        title: term,
        type: 'recent',
        description: '最近搜索'
      }))
    }

    return []
  }, [query, searchResults, recentSearches, minSearchLength, showRecent])

  // 处理结果点击
  const handleResultClick = useCallback((result) => {
    if (result.type === 'recent') {
      setQuery(result.title)
      inputRef.current?.focus()
    } else {
      saveRecentSearch(query)
      onResultClick?.(result)
      setIsOpen(false)
      setQuery('')
      setSelectedIndex(-1)
    }
  }, [query, saveRecentSearch, onResultClick])

  // 处理查询点击
  const handleQueryClick = useCallback(() => {
    if (query.trim()) {
      saveRecentSearch(query)
      // 触发搜索事件
      onResultClick?.({
        title: query,
        type: 'search',
        description: `搜索"${query}"`
      })
      setIsOpen(false)
      setQuery('')
      setSelectedIndex(-1)
    }
  }, [query, saveRecentSearch, onResultClick])

  // 聚焦输入框
  const handleInputFocus = useCallback(() => {
    setIsOpen(true)
  }, [])

  const visibleResults = getVisibleResults()

  return (
    <div className={cn('relative w-full', className)} style={style} {...props}>
      {/* 搜索输入框 */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className={cn(
            'w-full px-12 py-4 text-base',
            'bg-white dark:bg-gray-800',
            'border border-gray-200 dark:border-gray-700',
            'rounded-2xl',
            'focus:outline-none focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent',
            'transition-all duration-200',
            'placeholder-gray-400 dark:placeholder-gray-500'
          )}
        />

        {/* 搜索图标 */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* 清除按钮 */}
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setSelectedIndex(-1)
              inputRef.current?.focus()
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 搜索结果 */}
      {isOpen && (
        <div
          ref={listRef}
          className={cn(
            'absolute top-full left-0 right-0 mt-2',
            'bg-white dark:bg-gray-800',
            'border border-gray-200 dark:border-gray-700',
            'rounded-2xl shadow-2xl',
            'max-h-96 overflow-y-auto',
            'z-50',
            'animate-fade-in-scale'
          )}
        >
          {/* 分类筛选 */}
          {showCategories && categories.length > 0 && (
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    'px-3 py-1 text-sm rounded-full transition-colors',
                    selectedCategory === null
                      ? 'bg-ios-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  )}
                >
                  全部
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      'px-3 py-1 text-sm rounded-full transition-colors',
                      selectedCategory === category
                        ? 'bg-ios-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 搜索结果列表 */}
          <div className="py-2">
            {visibleResults.length > 0 ? (
              visibleResults.map((result, index) => (
                <div
                  key={result.originalIndex || index}
                  onClick={() => handleResultClick(result)}
                  className={cn(
                    'px-4 py-3 cursor-pointer transition-colors',
                    'hover:bg-gray-50 dark:hover:bg-gray-700',
                    index === selectedIndex && 'bg-gray-50 dark:bg-gray-700',
                    'flex items-center space-x-3'
                  )}
                >
                  {result.type === 'recent' ? (
                    <>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {result.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {result.description}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {result.icon && (
                        <div className="flex-shrink-0">
                          {typeof result.icon === 'string' ? (
                            <span className="text-lg">{result.icon}</span>
                          ) : (
                            <result.icon className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {result.title}
                        </div>
                        {result.description && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {result.description}
                          </div>
                        )}
                        {result.matchedFields && result.matchedFields.length > 0 && (
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-400">
                              匹配字段: {result.matchedFields.join(', ')}
                            </span>
                            {result.score && (
                              <span className="text-xs text-ios-blue-500">
                                相关度: {result.score}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : query.trim() && query.length >= minSearchLength ? (
              <div className="px-4 py-8 text-center">
                <div className="text-gray-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.492A7.962 7.962 0 0011 4c-2.34 0-4.29 1.009-5.824 2.562" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  未找到相关结果
                </p>
                <button
                  onClick={handleQueryClick}
                  className="mt-2 text-sm text-ios-blue-600 hover:text-ios-blue-700"
                >
                  搜索 "{query}"
                </button>
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                输入至少 {minSearchLength} 个字符开始搜索
              </div>
            )}
          </div>

          {/* 快捷键提示 */}
          <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-4">
              <span>↑↓ 导航</span>
              <span>Enter 选择</span>
              <span>Esc 关闭</span>
            </div>
            {visibleResults.length > 0 && (
              <span>{visibleResults.length} 个结果</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
})

ProSearchInterface.displayName = 'ProSearchInterface'

export default ProSearchInterface