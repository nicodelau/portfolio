<template>
  <svg v-if="showScrollTop" xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="svg" viewBox="0 0 24 24" @click="scrollToTop"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, ref, onUnmounted } from 'vue';

const showScrollTop = ref(false);

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  showScrollTop.value = docHeight > 0 && scrollY / docHeight > 0.2;
}

onMounted(async () => {
  const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
  gsap.registerPlugin(ScrollToPlugin);
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

function scrollToTop() {
  gsap.to(window, { duration: 1, scrollTo: {y:0}, ease: "power2" });
}
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
svg {
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 20px;
  background-color: #f3c44a;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

svg:hover {
  background-color: #e6af2e;
  cursor: pointer;
  transform: scale(1.1);
  transition: background-color 0.3s, transform 0.3s;
}
</style>