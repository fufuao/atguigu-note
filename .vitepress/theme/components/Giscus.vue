<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const containerRef = ref<HTMLElement>()

// 与 giscus 的 pathname 映射等价，但解码为可读形式作为 Discussion 标题
function getTerm(): string {
  const raw = window.location.pathname.replace(/\.\w+$/, '').replace(/^\/+/, '')
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

function renderGiscus() {
  if (!containerRef.value) return
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', 'xbsheng/atguigu-note')
  script.setAttribute('data-repo-id', 'R_kgDOTptRHw')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOTptRH84DCceJ')
  // specific + strict：标题为解码后的可读路径；strict 按正文 SHA-1 精确定位
  script.setAttribute('data-mapping', 'specific')
  script.setAttribute('data-term', getTerm())
  script.setAttribute('data-strict', '1')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  containerRef.value.appendChild(script)
}

onMounted(renderGiscus)

watch(
  () => route.path,
  () => {
    if (containerRef.value) {
      containerRef.value.innerHTML = ''
      renderGiscus()
    }
  },
)
</script>

<template>
  <div ref="containerRef" class="giscus" />
</template>
