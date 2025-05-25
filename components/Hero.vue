<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center bg-[#191716] text-[#E0E2DB] px-4 hero">
    <h1 class="text-5xl md:text-7xl font-bold mb-4">{{ t?.hero?.title }}</h1>
    <h2 class="text-xl md:text-2xl text-[#E6AF2E] mb-8 max-w-xl leading-relaxed">
      {{ t?.hero?.subtitle }}
    </h2>
    <div class="flex flex-wrap gap-4">
      <button
        class="bg-[#3D348B] hover:bg-[#5a4bdb] hover:cursor-pointer text-white px-6 py-3 rounded-xl text-base transition-all duration-300" id="contact-button">
        {{ t?.hero?.contact }}
      </button>
      <a
        class="bg-[#E6AF2E] hover:bg-[#f3c44a] hover:cursor-pointer text-black px-6 py-3 rounded-xl text-base transition-all duration-300" download="cv.pdf" href="/cv.pdf">
        {{ t?.hero?.cv }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(async () => {
  const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
  document.querySelector('#contact-button').addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: '#footer' });
  });
});

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