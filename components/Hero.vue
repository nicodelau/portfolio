<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center bg-[#191716] text-[#E0E2DB] px-4 hero">
    <h1 class="text-5xl md:text-7xl font-bold mb-4">{{ t?.hero?.title }}</h1>
    <h2 class="text-xl md:text-2xl text-[#E6AF2E] mb-8 max-w-xl leading-relaxed">
      {{ t?.hero?.subtitle }}
    </h2>
    <div class="flex flex-wrap gap-4">
      <button
        class="bg-[#3D348B] hover:bg-[#5a4bdb] text-white px-6 py-3 rounded-xl text-base transition-all duration-300"
      >
        {{ t?.hero?.contact }}
      </button>
      <button
        class="bg-[#E6AF2E] hover:bg-[#f3c44a] text-black px-6 py-3 rounded-xl text-base transition-all duration-300"
      >
        {{ t?.hero?.cv }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const gsap = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.default.registerPlugin(ScrollTrigger)

  gsap.default.from('.hero', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  })
})

defineProps({
  t: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
.hero {
  overflow: hidden;
}
</style>