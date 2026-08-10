<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'
import Giscus from './components/Giscus.vue'

declare global {
  interface Window {
    _hmt?: string[][]
  }
}

// 构建期由 vite define 注入，本地构建显示 dev
declare const __COMMIT_SHA__: string
console.log('[atguigu-note] commit:', __COMMIT_SHA__)

const router = useRouter()
// SSR 下 window 不存在，只在浏览器端注册
if (typeof window !== 'undefined') {
  router.onBeforeRouteChange = to => {
    window._hmt?.push(['_trackPageview', to])
  }
}

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Giscus />
    </template>
  </Layout>
</template>
