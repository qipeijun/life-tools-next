import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '生活工具集 - 投资理财与生活助手',
  description: '专业的投资分析工具和生活助手，包含KDJ+RSI技术分析、网格策略、做T计算器、豆浆预约等实用工具',
  keywords: 'KDJ,RSI,做T计算器,网格策略,豆浆预约,投资分析,生活工具',
  themeColor: '#F2F2F7',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-ios-bg-primary dark:bg-ios-dark-bg-primary transition-colors duration-300">
          {children}
        </div>
      </body>
    </html>
  )
}