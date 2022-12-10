<script setup lang="ts">
  import logoLight from '@/assets/img/icons/logo-light.svg';
  import logoDark from '@/assets/img/icons/logo-dark.svg';
  import { useDark } from '@vueuse/core';
  import { computed } from 'vue';

  const currentLogo = computed(() => (useDark() ? logoDark : logoLight));
</script>

<template>
  <header class="header bg-white dark:bg-dark-light">
    <div class="header__logo base-p rounded-t-lg">
      <img :src="currentLogo" alt="mail ru" />
    </div>
  </header>
</template>

<style lang="scss">
  header {
    @apply bg-white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
</style>
