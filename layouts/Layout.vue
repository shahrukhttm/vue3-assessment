<template>
  <div class="font-base text-base bg-dark-50 text-dark-950 min-h-svh">
    <Header />
    <main class="sm:px-6 px-4 pt-4 pb-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'

</script>