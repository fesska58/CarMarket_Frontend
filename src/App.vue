<template>
  <header>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">CarCatalog</router-link>
        <div class="space-x-4">
          <router-link to="/" class="hover:text-gray-300">Главная</router-link>
          <router-link to="/cars" class="hover:text-gray-300">Каталог</router-link>
          <router-link to="/calculator" class="hover:text-gray-300">Калькулятор</router-link>
          <router-link to="/about" class="hover:text-gray-300">О нас</router-link>
        </div>
      </div>
    </nav>
  </header>

  <main class="min-h-screen">
    <router-view />
  </main>

  <footer class="bg-gray-800 text-white text-center p-4">
    &copy; {{ new Date().getFullYear() }} CarCatalog
  </footer>
</template>

<script setup>
// Ничего не нужно
</script>
