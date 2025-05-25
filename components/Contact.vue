<template>
  <section
    id="contacto"
    style="display: flex; justify-content: center; align-items: center;"
    class="contact-section px-6 md:px-20 py-5 bg-[#191716] text-[#E0E2DB] flex flex-col items-start gap-8"
  >
    <h2 class="text-3xl md:text-5xl font-bold text-[#E6AF2E]">Contacto</h2>

    <form
      class="flex flex-col gap-6 w-1/2"
      id="formulario"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col">
        <label for="name" class="mb-2">Nombre</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="bg-[#E0E2DB] text-[#191716] px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E6AF2E]"
        />
      </div>

      <div class="flex flex-col">
        <label for="email" class="mb-2">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="bg-[#E0E2DB] text-[#191716] px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E6AF2E]"
        />
      </div>

      <div class="flex flex-col">
        <label for="message" class="mb-2">Mensaje</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          class="bg-[#E0E2DB] text-[#191716] px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E6AF2E]"
        ></textarea>
      </div>

      <div v-if="loading" class="flex items-center justify-center w-full h-12">
      <svg class="animate-spin h-8 w-8 text-[#E6AF2E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" ></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5-1h9a2.5 2.5 0 1 1-5 0h-4a2.5 2.5 0 0 1-4.5-1z"></path>
      </svg>
    </div>
    <div
      v-if="!loading"
      class="text-[#E6AF2E] text-sm"
    >
      <div class="flex flex-row items-center justify-between">
        <button
        type="submit"
        class="self-start bg-[#3D348B] hover:bg-[#2c2769] text-white px-6 py-2 rounded-2xl shadow-md transition"
      >
        Enviar
      </button>
      <b>Los mensajes son enviados a mi correo electrónico y no se almacenan en ningún lugar.</b>
    </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'

import { ref } from 'vue'
const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function handleSubmit() {
  loading.value = true;
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form })
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        Swal.fire({
          title: 'Mensaje enviado correctamente!',
          text: 'Gracias por tu mensaje, me pondré en contacto contigo pronto.',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        form.name = '';
        form.email = '';
        form.message = '';
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrio un error al enviar el mensaje.',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      loading.value = false;
    })
    .catch(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Ocurrio un error al enviar el mensaje.',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      loading.value = false;
    });
}

</script>
