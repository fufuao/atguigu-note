import { defineConfig } from 'vitepress'

const langchainSidebar = [
  {
    text: 'LangChain 课件',
    items: [
      { text: '01 · LangChain 概述', link: '/langchain/课件/01-LangChain概述/01-LangChain概述' },
      { text: '02 · 模型的创建与调用', link: '/langchain/课件/02-模型的创建与调用/02-模型的创建与调用' },
      { text: '03 · LangSmith 的使用', link: '/langchain/课件/03-LangSmith的使用/03-LangSmith的使用' },
      { text: '04 · Message 与提示词模板', link: '/langchain/课件/04-Message与提示词模板/04-Message与提示词模板' },
      { text: '05 · Tools', link: '/langchain/课件/05-Tools/05-Tools' },
      { text: '06 · 结构化输出', link: '/langchain/课件/06-结构化输出/06-结构化输出' },
      { text: '07 · 智能体', link: '/langchain/课件/07-智能体/07-智能体' },
      { text: '08 · 中间件', link: '/langchain/课件/08-中间件/08-中间件' },
      { text: '09 · 上下文与记忆', link: '/langchain/课件/09-上下文与记忆/09-上下文与记忆' },
      { text: '10 · RAG', link: '/langchain/课件/10-RAG/10-RAG' },
    ],
  },
  {
    text: '相关链接',
    items: [
      // { text: '视频分 P 目录', link: '/langchain/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1rv7A6oEeP' },
    ],
  },
]

const langgraphSidebar = [
  {
    text: 'LangGraph 课件',
    items: [
      { text: '00 · 环境配置', link: '/langgraph/课件/00-环境配置' },
      { text: '01 · LangGraph 基础入门', link: '/langgraph/课件/01-LangGraph基础入门' },
      { text: '02 · 控制流与节点执行', link: '/langgraph/课件/02-LangGraph控制流与节点执行' },
      { text: '03 · 持久化与记忆管理', link: '/langgraph/课件/03-LangGraph持久化与记忆管理' },
      { text: '04 · 中断与工具与部署', link: '/langgraph/课件/04-LangGraph中断与工具与部署' },
      { text: '05 · 高级特性', link: '/langgraph/课件/05-LangGraph高级特性' },
    ],
  },
  {
    text: '相关链接',
    items: [
      // { text: '视频分 P 目录', link: '/langgraph/' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1z3NY66EY1' },
    ],
  },
]

export default defineConfig({
  title: '尚硅谷 AI 课程笔记',
  description: '尚硅谷 LangChain / LangGraph 课程配套课件与代码整理',
  lang: 'zh-CN',

  // GitHub Pages 项目站：https://xbsheng.github.io/atguigu-note/
  base: '/atguigu-note/',

  // 直接复用仓库根目录下的现有课件
  srcDir: '.',
  srcExclude: ['**/代码/**', '**/node_modules/**', '**/05-LangGraph高级特性_backup.md', '**/langgraph-runtime-viz/**'],

  ignoreDeadLinks: true,

  cleanUrls: true,

  themeConfig: {
    siteTitle: '尚硅谷 AI 笔记',

    nav: [
      { text: '首页', link: '/' },
      {
        text: 'LangChain',
        items: [
          { text: '课件目录', link: '/langchain/课件/01-LangChain概述/01-LangChain概述' },
          { text: '视频分 P', link: '/langchain/' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1rv7A6oEeP' },
        ],
      },
      {
        text: 'LangGraph',
        items: [
          { text: '课件目录', link: '/langgraph/课件/00-环境配置' },
          { text: '视频分 P', link: '/langgraph/' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1z3NY66EY1' },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/xbsheng/atguigu-note',
      },
    ],

    sidebar: {
      '/langchain/': langchainSidebar,
      '/langgraph/': langgraphSidebar,
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/xbsheng/atguigu-note' }],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索课件',
            buttonAriaLabel: '搜索课件',
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最后更新',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    footer: {
      message: '课程版权归尚硅谷所有，本站仅供学习交流',
      copyright: 'Copyright © 尚硅谷 · 笔记整理',
    },
  },

  markdown: {
    // 课件中大量出现 <class '...'>、<YOUR_API_KEY>、<h1> 等文本，
    // 关闭原始 HTML 解析，避免被 Vue 当成未闭合标签导致构建失败
    html: false,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  vite: {
    server: {
      fs: {
        allow: ['.'],
      },
    },
  },
})
