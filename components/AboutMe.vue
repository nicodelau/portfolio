<script setup>
import { ref, onMounted } from 'vue'

onMounted(async () => {
  const gsap = await import('gsap')
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
  gsap.default.registerPlugin(ScrollTrigger)

  gsap.default.from('.sobre-mi-item', {
    scrollTrigger: {
      trigger: '.sobre-mi-item',
      start: 'left 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: 100,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
  })
})

defineProps({
  t: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section id="sobre-mi" class="bg-[#191716] text-[#E0E2DB] px-6 md:px-20 fade-slide">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 sobre-mi-item">
        <div class="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-[#E6AF2E]">
          <img src="/Perfil.jpeg" alt="Foto de Boludin" class="object-cover w-full h-full" />
        </div>
        <div class="flex-1 sobre-mi-item">
          <h2 class="text-4xl font-bold text-[#E6AF2E] mb-4">{{t?.hero?.about}}</h2>
          <p class="mb-4 text-lg leading-relaxed">
            {{t?.hero?.description}}
          </p>
          <p class="text-[#BEB7A4] text-base sobre-mi-item">
            {{t?.hero?.me}}
          </p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.sobre-mi-item {
  overflow-x: hidden;
}
</style>
