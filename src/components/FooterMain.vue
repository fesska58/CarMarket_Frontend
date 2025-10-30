<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container_sections mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-bold">CarCatalog</h3>
          <p class="text-gray-400">Покупка авто из Японии, Кореи и Китая</p>
        </div>
        <div class="text-center md:text-right">
          <p class="text-gray-400">
            &copy; {{ new Date().getFullYear() }} CarCatalog. Все права защищены.
          </p>
          <p class="text-gray-400 mt-1">Телефон: +7 (123) 456-78-90</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Ничего не нужно
</script>
