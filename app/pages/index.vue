<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const title = useTitle('Hello Nuxt!')
</script>

<template>
  <main class="color-base relative grid rows-[max-content_1fr] size-screen">
    <TheNav />
    <div class="h-full flex flex-col items-center justify-center of-scroll">
      <div class="text-base font-bold">
        {{ title }}
      </div>
      <ShadcnButton class="mt-4" @click="reloadNuxtApp({ ttl: 0 })">
        Refresh Page
      </ShadcnButton>
    </div>
  </main>
</template>
