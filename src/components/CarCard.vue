<template>
  <div
    class="car-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
  >
    <!-- Фото -->
    <div class="relative">
      <img
        :src="car.imageUrls && car.imageUrls[0] ? car.imageUrls[0] : 'https://placehold.co/300x200'"
        :alt="`${car.brandName} ${car.modelName}`"
        class="w-full h-48 object-cover"
      />
      <!-- Цена -->
      <div class="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
        {{ formatCurrency(car.priceAuction) }} {{ getCurrencySymbol(car.countryCode) }}
      </div>
    </div>

    <!-- Информация -->
    <div class="p-4">
      <h3 class="font-bold text-lg mb-1">{{ car.brandName }} {{ car.modelName }}</h3>
      <p class="text-gray-600 text-sm mb-1">Год: {{ car.year }}</p>
      <p class="text-gray-600 text-sm mb-1">Пробег: {{ formatNumber(car.mileageKm) }} км</p>
      <p class="text-gray-600 text-sm mb-1">
        Двигатель: {{ car.engineVolumeL }} л, {{ car.engineType }}
      </p>
      <p class="text-gray-600 text-sm mb-1">Коробка: {{ car.transmission }}</p>
      <p class="text-gray-600 text-sm mb-2">Страна: {{ car.countryName }}</p>

      <!-- Кнопки -->
      <div class="flex flex-col gap-2">
        <button
          @click="goToCalculator"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded transition"
        >
          Рассчитать стоимость
        </button>
        <button
          @click="goToCalculatorWithCarData"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
        >
          Рассчитать по карточке
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

// Локальные функции (не методы компонента)
const formatCurrency = (value) => {
  if (typeof value !== 'number') return value
  return new Intl.NumberFormat('ru-RU').format(value)
}

const formatNumber = (value) => {
  if (typeof value !== 'number') return value
  return new Intl.NumberFormat('ru-RU').format(value)
}

const getCurrencySymbol = (code) => {
  return code === 'JP' ? 'JPY' : code === 'KR' ? 'KRW' : 'CNY'
}

const goToCalculator = () => {
  router.push('/calculator')
}

const goToCalculatorWithCarData = () => {
  // TODO: передать данные машины в калькулятор
  router.push('/calculator')
}
</script>
