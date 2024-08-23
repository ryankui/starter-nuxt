<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <div class="flex gap-4">
    <a class="i-carbon:logo-github icon-btn" href="https://github.com/gui117/starter-nuxt" target="_blank" />
    <a class="icon-btn" :class="isDark ? 'i-carbon:moon' : 'i-carbon:sun'" @click="isDark = !isDark" />
  </div>
</template>
