<!-- frontend/src/views/CatalogView.vue -->

<template>
  <div class="catalog-page w-full">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Каталог автомобилей</h1>

      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Панель фильтров -->
        <div class="lg:w-1/4">
          <FilterPanel />
        </div>

        <!-- Сортировка и список авто -->
        <div class="lg:w-3/4">
          <!-- Панель сортировки -->
          <div
            class="sort-panel bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center"
          >
            <div class="text-gray-700">Найдено: {{ carsStore.totalElements }} авто</div>
            <div>
              <label class="mr-2 text-gray-700">Сортировать:</label>
              <select v-model="selectedSort" @change="onSortChange" class="border p-2 rounded">
                <option value="year,desc">По году (новые)</option>
                <option value="year,asc">По году (старые)</option>
                <option value="priceAuction,asc">По цене (дешевле)</option>
                <option value="priceAuction,desc">По цене (дороже)</option>
                <option value="mileageKm,asc">По пробегу (меньше)</option>
                <option value="mileageKm,desc">По пробегу (больше)</option>
              </select>
            </div>
          </div>

          <!-- Сетка карточек -->
          <div
            v-if="!carsStore.loading"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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

          <!-- Пагинация -->
          <Pagination
            v-if="carsStore.totalPages > 1"
            :current-page="carsStore.currentFilters.page"
            :total-pages="carsStore.totalPages"
            @change-page="onPageChange"
            class="mt-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import FilterPanel from '../components/FilterPanel.vue'
import CarCard from '../components/CarCard.vue'
import Pagination from '../components/PaginationView.vue' // создадим следующим
import { useCarsStore } from '../stores/cars'

const carsStore = useCarsStore()

// Локальное состояние для сортировки
const selectedSort = ref(carsStore.currentFilters.sort)

// При монтировании загружаем автомобили
onMounted(() => {
  carsStore.fetchCars()
})

// Следим за изменением фильтров в хранилище и обновляем локальный селект сортировки
watch(
  () => carsStore.currentFilters.sort,
  (newSort) => {
    selectedSort.value = newSort
  },
)

// Обработчики
const onSortChange = () => {
  carsStore.changeSort(selectedSort.value)
}

const onPageChange = (page) => {
  carsStore.changePage(page)
}
</script>
