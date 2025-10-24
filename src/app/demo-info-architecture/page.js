'use client'

import React, { useState } from 'react'
import {
  ProUserGuide,
  ProQuickStart,
  ProFeatureDiscovery,
  ProSearchInterface,
  ProButton,
  ProCard
} from '../../components/mobile'

// 示例工具数据
const toolsData = [
  {
    id: 1,
    title: 'KDJ + RSI 技术分析',
    description: '专业的股票技术指标分析工具',
    icon: '📊',
    category: '投资分析',
    tags: ['股票', '技术指标', 'KDJ', 'RSI']
  },
  {
    id: 2,
    title: 'T日计算器',
    description: 'A股交易日期和资金到账时间计算',
    icon: '📅',
    category: '投资工具',
    tags: ['股票', 'T日', '交易', '资金']
  },
  {
    id: 3,
    title: '网格策略',
    description: 'ETH网格交易策略回测分析',
    icon: '⚡',
    category: '投资策略',
    tags: ['ETH', '网格', '交易', '策略']
  },
  {
    id: 4,
    title: '豆浆助手',
    description: '定时提醒，享受健康生活',
    icon: '🥛',
    category: '生活助手',
    tags: ['豆浆', '健康', '定时', '生活']
  }
]

// 用户引导步骤
const guideSteps = [
  {
    title: '欢迎使用生活工具集',
    content: '这是一个专业的投资分析和生活工具集合，让我们快速了解主要功能。',
    placement: 'center'
  },
  {
    title: '智能搜索',
    content: '使用搜索功能可以快速找到您需要的工具。支持按名称、标签或分类搜索。',
    target: '#search-input',
    placement: 'bottom'
  },
  {
    title: '功能分类',
    content: '工具按功能分类，方便您快速定位。包括投资分析、生活助手等类别。',
    target: '#categories',
    placement: 'right'
  },
  {
    title: '个性化推荐',
    content: '系统会根据您的使用习惯，为您推荐相关工具和新功能。',
    target: '#features',
    placement: 'left'
  }
]

// 功能发现数据
const discoveryFeatures = [
  {
    title: '新增功能：投资组合分析',
    description: '智能分析您的投资组合表现，提供优化建议',
    icon: '📈',
    iconBgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    action: {
      label: '立即体验',
      onClick: () => alert('功能开发中...')
    }
  },
  {
    title: '数据更新通知',
    description: '股票数据已更新至最新交易日',
    icon: '🔄',
    iconBgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    action: {
      label: '查看详情',
      onClick: () => alert('查看数据更新详情')
    }
  }
]

export default function DemoInfoArchitecture() {
  const [selectedTool, setSelectedTool] = useState(null)
  const [showGuide, setShowGuide] = useState(false)

  // 分类数据
  const categories = ['全部', '投资分析', '投资工具', '投资策略', '生活助手']

  // 处理搜索结果点击
  const handleResultClick = (result) => {
    if (result.type === 'search') {
      console.log('搜索:', result.title)
    } else {
      setSelectedTool(result)
      console.log('选择工具:', result.title)
    }
  }

  // 处理工具卡片点击
  const handleToolClick = (tool) => {
    setSelectedTool(tool)
    console.log('点击工具:', tool.title)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          信息架构演示
        </h1>

        {/* 搜索界面 */}
        <div className="mb-8" id="search-input">
          <ProSearchInterface
            data={toolsData}
            categories={categories}
            onResultClick={handleResultClick}
            placeholder="搜索投资工具、生活助手..."
          />
        </div>

        {/* 分类展示 */}
        <div className="mb-8" id="categories">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            功能分类
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <ProButton
                key={category}
                variant={category === '全部' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => console.log('选择分类:', category)}
              >
                {category}
              </ProButton>
            ))}
          </div>
        </div>

        {/* 工具卡片网格 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            所有工具
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toolsData.map(tool => (
              <ProCard
                key={tool.id}
                variant="elevated"
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleToolClick(tool)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{tool.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {tool.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ProCard>
            ))}
          </div>
        </div>

        {/* 用户引导控制 */}
        <div className="mb-8 flex space-x-4" id="features">
          <ProButton
            variant="primary"
            onClick={() => setShowGuide(!showGuide)}
          >
            {showGuide ? '关闭引导' : '开始引导'}
          </ProButton>
          <ProButton
            variant="outline"
            onClick={() => setShowGuide(false)}
          >
            重置引导
          </ProButton>
        </div>

        {/* 功能发现区域 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            功能发现演示
          </h2>
          <ProButton variant="outline" onClick={() => {
            // 触发功能发现
            console.log('刷新功能发现')
          }}>
            刷新推荐
          </ProButton>
        </div>

        {/* 选中工具显示 */}
        {selectedTool && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              已选择工具
            </h3>
            <div className="text-gray-600 dark:text-gray-400">
              <p><strong>名称:</strong> {selectedTool.title}</p>
              <p><strong>描述:</strong> {selectedTool.description}</p>
              <p><strong>分类:</strong> {selectedTool.category}</p>
              <p><strong>标签:</strong> {selectedTool.tags?.join(', ')}</p>
            </div>
          </div>
        )}
      </div>

      {/* 用户引导组件 */}
      <ProUserGuide
        steps={guideSteps}
        isActive={showGuide}
        onComplete={() => {
          setShowGuide(false)
          console.log('引导完成')
        }}
        onSkip={() => {
          setShowGuide(false)
          console.log('引导跳过')
        }}
      />

      {/* 快速开始引导 */}
      <ProQuickStart
        title="新用户引导"
        description="让我们带您快速了解主要功能"
        steps={guideSteps.slice(1)} // 跳过欢迎页面
        guideId="demo-guide"
      />

      {/* 功能发现组件 */}
      <ProFeatureDiscovery
        features={discoveryFeatures}
        position="bottom-right"
        autoShow={true}
        showDelay={3000}
      />
    </div>
  )
}