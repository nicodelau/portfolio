// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [vue(), tailwind()],

  adapter: node({
    mode: 'standalone',
  }),
})