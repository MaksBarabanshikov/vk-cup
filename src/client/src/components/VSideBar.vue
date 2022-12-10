<script setup>
  const navItems = [
    {
      text: "Входящие"
    },
    {
      text: "Важное"
    },
    {
      text: "Отправленные"
    },
    {
      text: "Черновики"
    },
    {
      text: "Архив"
    },
    {
      text: "Спам"
    },
    {
      text: "Корзина"
    },
  ]
</script>
<template>
  <section class="sidebar py-[12px] px-[16px] min-w-[200px]">
    <button class="border border-blue/10 bg-white rounded w-full py-[8px] mb-3 text-dark">Написать письмо</button>
    <nav class="border-b-2 border-gray py-2 mb-2 border-blue/10">
      <ul>
        <li v-for="item in navItems" class="py-[8px]">
          {{ item.text }}
        </li>
      </ul>
    </nav>
    <span>Новая папка</span>
  </section>
</template>

<style lang="scss" scoped>

  //nav {
  //  border-color: rgba(0, 16, 61, 0.12);
  //}
</style>

