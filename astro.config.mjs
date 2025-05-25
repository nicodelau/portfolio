// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [vue(), tailwind()],

  adapter: cloudflare(),
})