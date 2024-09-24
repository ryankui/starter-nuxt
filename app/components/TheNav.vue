<script setup lang="ts">
import { useDark } from '@vueuse/core'

const REPO = 'https://github.com/gui117/starter-nuxt'

const isDark = useDark()
</script>

<template>
  <nav class="h-12 w-full flex items-center justify-end gap-2 border-b px-4 py-2 border-base">
    <button
      rounded p-2
      hover="bg-active"
      @click="isDark = !isDark"
    >
      <div class="i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone" text-2xl />
    </button>
    <NuxtLink
      rounded p2
      title="GitHub"
      hover="bg-active"
      :href="REPO"
      target="_blank"
    >
      <div i-carbon-logo-github text-2xl />
    </NuxtLink>
  </nav>
</template>
