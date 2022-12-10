<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark)

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo " alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h2 @click="toggleDark()" class="bg-dark text-gray cursor-pointer">Тема: {{ isDark }}</h2>
  <HelloWorld msg="Vite + Vue" />
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
