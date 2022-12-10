<script setup>
import {useDark, useToggle} from "@vueuse/core";
import VHeader from "@/components/VHeader.vue";
import VSideBar from "@/components/VSideBar.vue";

const isDark = useDark();

const toggleDark = useToggle(isDark)

</script>

<template>
  <v-header />
  <div class="flex">
    <v-side-bar />
    <router-view />
  </div>
  <h2 @click="toggleDark()" class="bg-dark text-gray cursor-pointer ">Тема: {{ isDark }}</h2>
</template>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

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
