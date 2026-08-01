<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const containerRef = ref<HTMLElement>()

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
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
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
