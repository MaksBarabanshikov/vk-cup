<script setup>
  import VHeader from '@/components/VHeader.vue';
  import VSideBar from '@/components/VSideBar.vue';
</script>

<template>
  <v-header />
  <main class="flex">
    <v-side-bar />
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
