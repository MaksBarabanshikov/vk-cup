<script setup>
  import { useDark, useToggle } from '@vueuse/core';

  const isDark = useDark();

  const toggleDark = useToggle(isDark);
</script>

<template>
  <h2 @click="toggleDark()" class="cursor-pointer">
    Тема: {{ isDark ? 'Темная' : 'Светлая' }}
  </h2>
</template>

<style lang="scss" scoped>
  h2 {
    user-select: none;
  }
</style>
