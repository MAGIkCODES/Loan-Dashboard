<script setup>
  import { RouterView } from 'vue-router'
  import Layout from './components/layout.vue'

</script>

<template>
  <header>
    <Layout/>
  </header>

  <main>
    <RouterView />
  </main>
  
</template>

<style scoped>
  
</style>
