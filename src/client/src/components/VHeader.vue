<script setup lang="ts">
 import logo from "../assets/img/icons/logo.png"
</script>

<template>
<header class="header">
<div class="header__logo py-[12px] px-[12px] rounded-t-lg">
  <img :src="logo" alt="mail ru">
</div>
</header>
</template>


<style>
  header {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
</style>
