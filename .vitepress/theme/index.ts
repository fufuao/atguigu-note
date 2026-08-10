import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useRouter } from 'vitepress'
import Giscus from './components/Giscus.vue'

// 构建期由 vite define 注入，本地构建显示 dev
declare const __COMMIT_SHA__: string
console.log('[atguigu-note] commit:', __COMMIT_SHA__)

// 百度统计 pv 统计
declare const _hmt: any[]
const router = useRouter()
router.onAfterRouteChange = to => {
  _hmt.push(['_trackPageview', to])
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus),
    })
  },
}
