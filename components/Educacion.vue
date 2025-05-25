<template>
  <section id="" class="bg-[#191716] text-[#E0E2DB] py-20 px-6 md:px-20 fade-slide">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 educacion">
        <div class="flex-1 educacion">
          <h2 class="text-4xl font-bold text-[#E6AF2E] mb-4">{{t?.hero?.ed}}</h2>
          <div v-for="(educacion, index) in t?.hero?.educacion" :key="index" class="mb-4 ml-4 educacion">
            <h3 class="text-xl font-bold mb-2">
              {{educacion?.title}} | {{educacion?.date}}
            </h3>
            <div class="flex items-center gap-2 mb-2">
              <img :src="educacion?.logo" alt="Logo" class="w-8 h-8 rounded-full shadow" />
              <h4 class="text-lg leading-relaxed text-[#BEB7A4]">
                {{educacion?.subtitle}} 
              </h4>
              <a :href="educacion?.link" target="_blank" class="text-[#E6AF2E] hover:text-[#E6AF2E] transition duration-300">
                Link
              </a>
            </div>
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

  gsap.default.from('.educacion', {
    scrollTrigger: {
      trigger: '.educacion',
      start: 'left 100%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: 100,
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