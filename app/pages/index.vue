<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle('Hello Nuxt!')
</script>

<template>
  <main class="color-base relative grid rows-[max-content_1fr] size-screen">
    <TheNav />
    <div class="h-full flex flex-col items-center justify-center of-scroll">
      <h1 class="pb-2 text-3xl font-semibold">
        {{ title }}
      </h1>
      <UiButton class="mt-4" size="sm" @click="reloadNuxtApp({ ttl: 0 })">
        Refresh Page
      </UiButton>
    </div>
  </main>
</template>
