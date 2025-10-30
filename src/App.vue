<template>
  <div class="app-layout min-h-screen flex flex-col">
    <!-- Шапка сайта (может быть с контейнером, если хочешь) -->
    <Header />

    <!-- Основной контент (во всю ширину) -->
    <main class="main-content flex-1 w-full">
      <router-view />
    </main>

    <!-- Подвал сайта (может быть с контейнером, если хочешь) -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/HeaderMain.vue'
import Footer from './components/FooterMain.vue' // пока пустой, создадим позже
</script>
