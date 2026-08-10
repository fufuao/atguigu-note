import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from './components/Giscus.vue'

declare const __COMMIT_SHA__: string

// 构建期由 vite define 注入，本地构建显示 dev
console.log('[atguigu-note] commit:', __COMMIT_SHA__)

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus),
    })
  },
}
