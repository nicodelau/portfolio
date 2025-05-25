<template>
  <div class="absolute top-6 right-6 flex gap-3 z-50 idiomas">
    <button
      v-for="lang in langs"
      :key="lang.code"
      @click="() => handleLanguageChange(lang.code)"
      class="w-8 h-8 hover:scale-110 transition-transform"
    >
      <img :src="lang.flag" :alt="lang.code" class="rounded shadow" />
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const langs = [
  { code: 'es', flag: '/flags/es.svg' },
  { code: 'en', flag: '/flags/en.svg' },
  { code: 'it', flag: '/flags/it.svg' }
]

onMounted(async () => {
  const gsap = await import('gsap')
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.default.registerPlugin(ScrollTrigger)

  gsap.default.from('.idiomas', {
    opacity: 0,
    y: -100,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
  })
})


function handleLanguageChange(newLang) {
  const url = new URL(window.location.href);
  if(newLang == url.searchParams.get('lang')) {
    return
  }
  url.searchParams.set('lang', newLang);
  window.location.replace(url)

}
</script>
