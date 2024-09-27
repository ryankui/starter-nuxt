<script setup lang="ts">
import { useDark } from '@vueuse/core'

const REPO = 'https://github.com/gui117/starter-nuxt'

const isDark = useDark()
</script>

<template>
  <nav flex="~ gap-1 items-center" class="h-12 w-full border-b px-4 py-2 border-base">
    <NuxtLink href="/" target="_self">
      <div i-logos-nuxt text-2xl />
    </NuxtLink>
    <div flex-auto />
    <div flex="~ gap-1 items-center">
      <ShadcnButton
        p-2!
        variant="ghost"
        title="Toggle Dark Mode"
        @click="isDark = !isDark"
      >
        <div class="i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone" text-2xl />
      </ShadcnButton>
      <NuxtLink
        icon-link
        title="GitHub"
        hover="bg-active"
        :href="REPO"
        target="_blank"
      >
        <div i-carbon-logo-github text-2xl />
      </NuxtLink>
    </div>
  </nav>
</template>
