<template>
  <div class="calculator-page w-full">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Калькулятор стоимости "под ключ"
      </h1>
      <p class="text-gray-600 mb-8">
        Введите параметры автомобиля, чтобы рассчитать полную стоимость ввоза в РФ
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Форма -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-xl font-bold mb-4 text-gray-800">Параметры автомобиля</h2>
          <CalculatorForm />
        </div>

        <!-- Результат -->
        <div v-if="carsStore.calculationResult" class="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 class="text-xl font-bold mb-4 text-gray-800">Результат расчёта</h2>
          <div class="space-y-3">
            <div class="flex justify-between border-b pb-2">
              <span>Стоимость авто:</span>
              <span class="font-medium"
                >{{ formatCurrency(carsStore.calculationResult.breakdown.carPriceRub) }} ₽</span
              >
            </div>
            <div class="flex justify-between border-b pb-2">
              <span>Таможенная пошлина:</span>
              <span class="font-medium"
                >{{ formatCurrency(carsStore.calculationResult.breakdown.customsDuty) }} ₽</span
              >
            </div>
            <div class="flex justify-between border-b pb-2">
              <span>Утильсбор:</span>
              <span class="font-medium"
                >{{ formatCurrency(carsStore.calculationResult.breakdown.ecoFee) }} ₽</span
              >
            </div>
            <div class="flex justify-between border-b pb-2">
              <span>Доставка:</span>
              <span class="font-medium"
                >{{ formatCurrency(carsStore.calculationResult.breakdown.delivery) }} ₽</span
              >
            </div>
            <div class="flex justify-between border-b pb-2 font-bold text-lg">
              <span>Итого:</span>
              <span class="text-red-600"
                >{{ formatCurrency(carsStore.calculationResult.total) }} ₽</span
              >
            </div>
          </div>

          <!-- Кнопка "Сохранить расчёт" -->
          <button
            @click="saveCalculation"
            class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md"
          >
            Сохранить расчёт
          </button>
        </div>

        <!-- Заглушка, если нет результата -->
        <div v-else class="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center">
          <p class="text-gray-500 text-center">
            Введите параметры и нажмите "Рассчитать стоимость", <br />чтобы увидеть результат
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CalculatorForm from '../components/CalculatorForm.vue'
import { useCarsStore } from '../stores/cars' // ✅ Импорт

const carsStore = useCarsStore() // ✅ Только один раз

// Локальная функция (не метод компонента)
const formatCurrency = (value) => {
  if (typeof value !== 'number') return value
  return new Intl.NumberFormat('ru-RU').format(value)
}

// Пока заглушка для сохранения расчёта
const saveCalculation = () => {
  alert('Расчёт сохранён (в будущем будет сохранение в базу)')
}
</script>
