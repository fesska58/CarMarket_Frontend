<template>
  <form @submit.prevent="submit" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Цена на аукционе</label>
      <input
        v-model.number="form.auctionPrice"
        type="number"
        required
        class="w-full border p-2 rounded"
        placeholder="1 800 000"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Страна</label>
      <select v-model="form.countryCode" required class="w-full border p-2 rounded">
        <option value="JP">Япония</option>
        <option value="KR">Корея</option>
        <option value="CN">Китай</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Год выпуска</label>
      <input
        v-model.number="form.year"
        type="number"
        required
        class="w-full border p-2 rounded"
        min="1990"
        max="2030"
        placeholder="2020"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 mb-2">Объём двигателя (см³)</label>
      <input
        v-model.number="form.engineVolumeCcm"
        type="number"
        required
        class="w-full border p-2 rounded"
        min="800"
        max="10000"
        placeholder="2000"
      />
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 mb-2">Тип топлива</label>
      <select v-model="form.engineType" required class="w-full border p-2 rounded">
        <option value="бензин">Бензин</option>
        <option value="дизель">Дизель</option>
        <option value="гибрид">Гибрид</option>
        <option value="электро">Электро</option>
      </select>
    </div>

    <button
      type="submit"
      class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
    >
      Рассчитать стоимость
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { useCarsStore } from '../stores/cars'

const carsStore = useCarsStore()

// Состояние формы
const form = reactive({
  auctionPrice: null,
  countryCode: 'JP', // по умолчанию
  year: 2020, // по умолчанию
  engineVolumeCcm: 2000, // по умолчанию
  engineType: 'бензин', // по умолчанию
})

// Отправка данных
const submit = () => {
  carsStore.calculate(form)
}
</script>
