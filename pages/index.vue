<script setup lang="ts">
import { useNow } from '@vueuse/core'

const now = useNow()
</script>

<template>
  <div class="size-screen flex flex-col items-center justify-center text-base color-base">
    <div class="i-logos:nuxt-icon text-4xl" />
    <h1 class="text-4xl text-gray font-italic">
      Hello World! {{ now }}
    </h1>
    <TheFooter />
  </div>
</template>
