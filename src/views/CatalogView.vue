<template>
  <div class="catalog p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Каталог автомобилей</h1>

    <!-- Сетка карточек -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CarCard v-for="car in carsStore.cars" :key="car.id" :car="car" />
    </div>

    <!-- Индикатор загрузки -->
    <div v-if="carsStore.loading" class="text-center py-8">
      <p class="text-lg">Загрузка...</p>
    </div>

    <!-- Если нет машин -->
    <div v-if="!carsStore.loading && carsStore.cars.length === 0" class="text-center py-8">
      <p class="text-lg">Машины не найдены</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CarCard from '../components/CarCard.vue'
import { useCarsStore } from '../stores/cars'

const carsStore = useCarsStore()

// Загрузить машины при монтировании компонента
onMounted(() => {
  carsStore.fetchCars()
})
</script>
