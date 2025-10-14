<template>
  <div class="home p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Добро пожаловать в CarCatalog</h1>
    <p class="mb-6 text-lg">
      Подберите автомобиль из Японии, Кореи или Китая. Удобный каталог с фильтрами и калькулятором
      стоимости.
    </p>
    <router-link
      to="/cars"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition"
    >
      Перейти к каталогу
    </router-link>
  </div>
</template>

<script setup>
// Ничего не нужно
</script>

<style scoped>
/* Можно добавить свои стили */
</style>
