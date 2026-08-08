import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'

const site = 'https://xbsheng.github.io'
const homeUrl = site + '/atguigu-note/'

function jsonLd(schema: object): HeadConfig {
  return ['script', { type: 'application/ld+json' }, JSON.stringify(schema)]
}

function breadcrumb(pageUrl: string, crumbs: { name: string; url?: string }[]): HeadConfig {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: c.url } : {}),
    })),
  })
}

const langchainSidebar = [
  {
    text: 'LangChain 课件',
    items: [
      { text: '01 · LangChain 概述', link: '/langchain/课件/01-LangChain概述' },
      { text: '02 · 模型的创建与调用', link: '/langchain/课件/02-模型的创建与调用' },
      { text: '03 · LangSmith 的使用', link: '/langchain/课件/03-LangSmith的使用' },
      { text: '04 · Message 与提示词模板', link: '/langchain/课件/04-Message与提示词模板' },
      { text: '05 · Tools', link: '/langchain/课件/05-Tools' },
      { text: '06 · 结构化输出', link: '/langchain/课件/06-结构化输出' },
      { text: '07 · 智能体', link: '/langchain/课件/07-智能体' },
      { text: '08 · 中间件', link: '/langchain/课件/08-中间件' },
      { text: '09 · 上下文与记忆', link: '/langchain/课件/09-上下文与记忆' },
      { text: '10 · RAG', link: '/langchain/课件/10-RAG' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: 'Notebook 在线阅读', link: '/langchain/notebooks' },
      { text: '视频分 P 目录', link: '/langchain/README' },
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
      { text: 'Notebook 在线阅读', link: '/langgraph/notebooks' },
      { text: '视频分 P 目录', link: '/langgraph/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1z3NY66EY1' },
    ],
  },
]

const vibeSidebar = [
  {
    text: 'AI Coding 课件',
    items: [
      { text: '00 · 课程介绍与环境准备', link: '/vibe_coding/课件/00-课程介绍与环境准备' },
      { text: '01 · AI 编程基础理论', link: '/vibe_coding/课件/01-AI编程基础理论' },
      { text: '02 · AI 编程工具生态', link: '/vibe_coding/课件/02-AI编程工具生态' },
      { text: '03 · Claude Code 深度使用', link: '/vibe_coding/课件/03-ClaudeCode深度使用与进阶技巧' },
      { text: '04 · AI 技能系统（Skills）', link: '/vibe_coding/课件/04-AI技能系统Skills' },
      { text: '05 · 完整项目案例实操', link: '/vibe_coding/课件/05-完整项目案例实操' },
      { text: '06 · 项目实战（独立完成）', link: '/vibe_coding/课件/06-项目实战独立完成' },
      { text: '07 · Codex Desktop', link: '/vibe_coding/课件/07-CodexDesktop' },
      { text: '08 · 附录', link: '/vibe_coding/课件/08-附录' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: '视频分 P 目录', link: '/vibe_coding/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1RPET6tEp2' },
    ],
  },
]

const pythonSidebar = [
  {
    text: 'Python 课件',
    items: [
      { text: '01 · 必备基础知识', link: '/python/课件/01-必备基础知识' },
      { text: '02 · 初识 Python', link: '/python/课件/02-初识Python' },
      { text: '03 · Python 核心基础', link: '/python/课件/03-Python核心基础' },
      { text: '04 · 流程控制语句', link: '/python/课件/04-流程控制语句' },
      { text: '05 · 函数入门', link: '/python/课件/05-函数入门' },
      { text: '06 · 数据容器', link: '/python/课件/06-数据容器' },
      { text: '07 · 面向对象', link: '/python/课件/07-面向对象' },
      { text: '08 · 函数进阶', link: '/python/课件/08-函数进阶' },
      { text: '09 · 错误与异常', link: '/python/课件/09-错误与异常' },
      { text: '10 · 模块与包', link: '/python/课件/10-模块与包' },
      { text: '11 · 迭代器 vs 生成器', link: '/python/课件/11-迭代器vs生成器' },
      { text: '12 · 文件操作', link: '/python/课件/12-文件操作' },
      { text: '13 · 进程与线程', link: '/python/课件/13-进程与线程' },
      { text: '14 · 协程', link: '/python/课件/14-协程' },
    ],
  },
  {
    text: '相关链接',
    items: [
      { text: '视频分 P 目录', link: '/python/README' },
      { text: 'B 站在线观看', link: 'https://www.bilibili.com/video/BV1tDsgzxECr' },
    ],
  },
]

export default defineConfig({
  title: '尚硅谷 AI 课程笔记',
  description: '尚硅谷 Python / LangChain / LangGraph 课程配套课件与代码整理',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/atguigu-note/favicon.ico' }],
    jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '尚硅谷 AI 课程笔记',
      url: homeUrl,
      inLanguage: 'zh-CN',
      description: '尚硅谷 Python / LangChain / LangGraph 课程配套课件与代码整理',
    }),
    [
      'script',
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7a1e6eb3ba3fbae26e9f64cd365ee357";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
    ],
  ],

  // GitHub Pages 项目站：https://xbsheng.github.io/atguigu-note/
  base: '/atguigu-note/',

  transformHead(ctx) {
    const isHome = ctx.pageData.relativePath === 'index.md'
    const rel = ctx.pageData.relativePath.replace(/\.md$/, '')
    const pageUrl = isHome ? homeUrl : site + '/atguigu-note/' + rel
    const head: HeadConfig[] = [['link', { rel: 'canonical', href: pageUrl }]]
    const course = rel.split('/')[0]
    const labels: Record<string, string> = {
      python: 'Python',
      langchain: 'LangChain',
      langgraph: 'LangGraph',
      vibe_coding: 'AI Coding',
    }
    if (labels[course]) {
      head.push(
        breadcrumb(pageUrl, [
          { name: '尚硅谷 AI 课程笔记', url: homeUrl },
          { name: labels[course], url: homeUrl + course + '/' },
          { name: ctx.pageData.title },
        ]),
      )
    }
    return head
  },

  // 直接复用仓库根目录下的现有课件
  srcDir: '.',
  srcExclude: ['**/代码/**', '**/code/**', '**/.venv/**', '**/node_modules/**', '**/langgraph-runtime-viz/**'],

  // 死链检查保持开启，仅忽略两类“刻意排除”导致的预期失效链接：
  // 1. 指向 代码/ 目录的链接：源码目录在站点构建中被 srcExclude 排除，
  //    这些链接用于 GitHub 仓库内导航（README 分章表格中的代码列）
  // 2. langgraph-runtime-viz：独立 HTML 应用，未纳入站点构建
  ignoreDeadLinks: [/代码|%E4%BB%A3%E7%A0%81/, /langgraph-runtime-viz/],

  cleanUrls: true,

  themeConfig: {
    siteTitle: '尚硅谷 AI 笔记',

    logo: '/atguigu-logo.png',

    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Python',
        items: [
          { text: '课件目录', link: '/python/课件/01-必备基础知识' },
          { text: '视频分 P', link: '/python/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1tDsgzxECr' },
        ],
      },
      {
        text: 'LangChain',
        items: [
          { text: '课件目录', link: '/langchain/课件/01-LangChain概述' },
          { text: 'Notebook', link: '/langchain/notebooks' },
          { text: '视频分 P', link: '/langchain/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1rv7A6oEeP' },
        ],
      },
      {
        text: 'LangGraph',
        items: [
          { text: '课件目录', link: '/langgraph/课件/00-环境配置' },
          { text: 'Notebook', link: '/langgraph/notebooks' },
          { text: '视频分 P', link: '/langgraph/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1z3NY66EY1' },
        ],
      },
      {
        text: 'AI Coding',
        items: [
          { text: '课件目录', link: '/vibe_coding/课件/00-课程介绍与环境准备' },
          { text: '视频分 P', link: '/vibe_coding/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1RPET6tEp2' },
        ],
      },
    ],

    sidebar: {
      '/python/': pythonSidebar,
      '/langchain/': langchainSidebar,
      '/langgraph/': langgraphSidebar,
      '/vibe_coding/': vibeSidebar,
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
