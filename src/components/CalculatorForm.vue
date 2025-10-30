<template>
  <form @submit.prevent="submit" class="space-y-4">
    <!-- Цена на аукционе -->
    <div>
      <label class="block text-gray-700 mb-2">Цена на аукционе</label>
      <input
        v-model.number="form.auctionPrice"
        type="number"
        required
        class="w-full border p-2 rounded"
        placeholder="1 800 000"
      />
    </div>

    <!-- Страна -->
    <div>
      <label class="block text-gray-700 mb-2">Страна</label>
      <select v-model="form.countryCode" required class="w-full border p-2 rounded">
        <option value="JP">Япония</option>
        <option value="KR">Корея</option>
        <option value="CN">Китай</option>
      </select>
    </div>

    <!-- Год выпуска -->
    <div>
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

    <!-- Объём двигателя -->
    <div>
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

    <!-- Тип топлива -->
    <div>
      <label class="block text-gray-700 mb-2">Тип топлива</label>
      <select v-model="form.engineType" required class="w-full border p-2 rounded">
        <option value="бензин">Бензин</option>
        <option value="дизель">Дизель</option>
        <option value="гибрид">Гибрид</option>
        <option value="электро">Электро</option>
      </select>
    </div>

    <!-- Кнопка -->
    <button
      type="submit"
      class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-md"
    >
      Рассчитать стоимость
    </button>

    <!-- Кнопка "Рассчитать по карточке" (если данные переданы) -->
    <button
      v-if="carData"
      @click="fillFromCarData"
      type="button"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition shadow-sm mt-2"
    >
      Заполнить по карточке
    </button>
  </form>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useCarsStore } from '../stores/cars' // ✅ Импорт

const carsStore = useCarsStore() // ✅ Только один раз

// Принимаем данные машины из родителя (если переданы)
const props = defineProps({
  carData: {
    type: Object,
    default: null,
  },
})

// Состояние формы
const form = reactive({
  auctionPrice: null,
  countryCode: 'JP',
  year: 2020,
  engineVolumeCcm: 2000,
  engineType: 'бензин',
})

// При монтировании, если переданы данные машины, заполняем форму
onMounted(() => {
  if (props.carData) {
    fillFromCarData()
  }
})

// Функция заполнения формы из данных машины
const fillFromCarData = () => {
  if (props.carData) {
    form.auctionPrice = props.carData.priceAuction
    form.countryCode = props.carData.countryCode
    form.year = props.carData.year
    // engineVolumeL -> engineVolumeCcm (например, 2.5 -> 2500)
    form.engineVolumeCcm = parseFloat(props.carData.engineVolumeL) * 1000
    form.engineType = props.carData.engineType
  }
}

// Отправка данных
const submit = () => {
  carsStore.calculate(form)
}
</script>
