/**
 * VuePress 配置文件
 * 定义文档站点的基本配置、主题设置和打包器选项
 */

// 导入所需的模块
import { defaultTheme } from '@vuepress/theme-default'  // 默认主题
import { defineUserConfig } from 'vuepress'              // VuePress用户配置函数
import { viteBundler } from '@vuepress/bundler-vite'      // Vite打包器

// 导出用户配置
// 此配置对象定义了整个VuePress站点的行为

export default defineUserConfig({
  // 站点语言设置
  lang: 'zh-CN',

  // 站点标题和描述
  title: '',
  description: 'My first VuePress Site',

  // 主题配置
  theme: defaultTheme({
    // 站点Logo设置
    logo: 'assets/logo.png',

    // 导航栏配置
    // 数组中的每个元素对应一个导航链接
    navbar: [
      { text: '首页', link: 'index.md' },
      { text: '快速开始', link: 'quickstart.md' },
      { text: '技术Q&A', link: 'qa.md' },
      { text: '✨加入我们', link: 'contact.md' },
      { text: '关于N.E.K.O.', link: 'about.md' },
    ],
  }),

  // 打包器配置
  // 使用Vite作为构建工具，提供更快的开发体验
  bundler: viteBundler(),
})
