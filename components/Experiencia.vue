<template>
  <section id="" class="bg-[#191716] text-[#E0E2DB] py-20 px-6 md:px-20 fade-slide">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 experiencia">
        <div class="flex-1 experiencia">
          <h2 class="text-4xl font-bold text-[#E6AF2E] mb-4">{{t?.hero?.xp}}</h2>
          <div v-for="(trabajos, index) in t?.hero?.experiencia" :key="index" class="mb-4 ml-4">
            <h3 class="text-xl font-bold mb-2">
              {{trabajos?.title}} | {{trabajos?.date}}
            </h3>
            <p class="text-lg leading-relaxed text-[#BEB7A4]">
              {{trabajos?.jobDescription}}
            </p>
            <p class="text-lg leading-relaxed text-[#BEB7A4]">
              {{trabajos?.techStack}}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const gsap = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.default.registerPlugin(ScrollTrigger)

  gsap.default.from('.experiencia', {
    scrollTrigger: {
      trigger: '.experiencia',
      start: 'left 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: -100,
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