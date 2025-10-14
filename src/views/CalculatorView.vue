<template>
  <div class="calculator p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Калькулятор стоимости "под ключ"</h1>

    <p class="mb-6 text-gray-600">
      Введите параметры автомобиля, чтобы рассчитать полную стоимость ввоза в РФ
    </p>

    <!-- Форма -->
    <CalculatorForm />

    <!-- Результат -->
    <div v-if="carsStore.calculationResult" class="mt-8 p-6 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Результат расчёта</h2>

      <div class="mb-4">
        <h3 class="font-semibold mb-2">Разбивка:</h3>
        <ul class="space-y-2">
          <li class="flex justify-between">
            <span>Стоимость авто:</span>
            <span>{{ formatCurrency(carsStore.calculationResult.breakdown.carPriceRub) }} ₽</span>
          </li>
          <li class="flex justify-between">
            <span>Таможенная пошлина:</span>
            <span>{{ formatCurrency(carsStore.calculationResult.breakdown.customsDuty) }} ₽</span>
          </li>
          <li class="flex justify-between">
            <span>Утильсбор:</span>
            <span>{{ formatCurrency(carsStore.calculationResult.breakdown.ecoFee) }} ₽</span>
          </li>
          <li class="flex justify-between">
            <span>Доставка:</span>
            <span>{{ formatCurrency(carsStore.calculationResult.breakdown.delivery) }} ₽</span>
          </li>
          <li class="flex justify-between font-bold border-t pt-2">
            <span>Итого:</span>
            <span>{{ formatCurrency(carsStore.calculationResult.total) }} ₽</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import CalculatorForm from '../components/CalculatorForm.vue'
import { useCarsStore } from '../stores/cars'

const carsStore = useCarsStore()

// Форматирует число как валюту (1234567 → 1 234 567 ₽)
const formatCurrency = (value) => {
  return new Intl.NumberFormat('ru-RU').format(value)
}
</script>
