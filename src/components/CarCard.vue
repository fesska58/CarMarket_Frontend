<template>
  <div class="car-card border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
    <!-- Фото -->
    <img
      :src="car.imageUrls[0]"
      :alt="`${car.brandName} ${car.modelName}`"
      class="w-full h-48 object-cover"
    />

    <!-- Информация -->
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2">{{ car.brandName }} {{ car.modelName }}</h3>

      <div class="mb-2">
        <p class="text-gray-600">Год: {{ car.year }}</p>
        <p class="text-gray-600">Пробег: {{ car.mileageKm }} км</p>
        <p class="text-gray-600">Двигатель: {{ car.engineVolumeL }} л</p>
        <p class="text-gray-600">Коробка: {{ car.transmission }}</p>
        <p class="text-gray-600">Страна: {{ car.countryName }}</p>
      </div>

      <!-- Цена -->
      <p class="text-xl font-bold text-red-600 mb-3">
        {{ car.priceAuction.toLocaleString() }}
        {{ getCurrencySymbol(car.countryCode) }}
      </p>

      <!-- Кнопка -->
      <button
        class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        @click="goToCalculator"
      >
        Рассчитать стоимость
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
})

// Возвращает символ валюты по коду страны
const getCurrencySymbol = (code) => {
  return code === 'JP' ? 'JPY' : code === 'KR' ? 'KRW' : 'CNY'
}

const router = useRouter()

const goToCalculator = () => {
  // TODO: можно передать данные машины в калькулятор
  router.push('/calculator')
}
</script>
