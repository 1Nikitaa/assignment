<template>
  <header class="w-full bg-theme flex items-center justify-center py-3 sticky top-0 z-50 shadow">
    <img src="https://sportygroup.com/images/01_video/sporty-group-logo.svg" alt="Sporty Group Logo" class="h-10"/>
  </header>
  <HomeView />
</template>

<script>
import HomeView from './views/HomeView.vue'
export default { components: { HomeView } }
</script>