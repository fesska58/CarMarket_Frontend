<!-- frontend/src/components/FilterPanel.vue -->

<template>
  <div class="filter-panel bg-white p-4 rounded-lg shadow-sm mb-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-bold text-gray-800">Фильтры</h3>
      <button @click="resetFilters" class="text-sm text-blue-600 hover:text-blue-800">
        Сбросить
      </button>
    </div>

    <div class="space-y-4">
      <!-- Бренд -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Марка</label>
        <select
          v-model="localFilters.brand"
          @change="onFilterChange('brand', $event.target.value)"
          class="w-full border p-2 rounded"
        >
          <option value="">Все</option>
          <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
        </select>
      </div>

      <!-- Модель -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Модель</label>
        <select
          v-model="localFilters.model"
          @change="onFilterChange('model', $event.target.value)"
          class="w-full border p-2 rounded"
        >
          <option value="">Все</option>
          <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
        </select>
      </div>

      <!-- Год -->
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Год от</label>
          <input
            type="number"
            v-model.number="localFilters.yearFrom"
            @change="onFilterChange('yearFrom', $event.target.value)"
            class="w-full border p-2 rounded"
            min="1990"
            max="2030"
            placeholder="1990"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Год до</label>
          <input
            type="number"
            v-model.number="localFilters.yearTo"
            @change="onFilterChange('yearTo', $event.target.value)"
            class="w-full border p-2 rounded"
            min="1990"
            max="2030"
            placeholder="2025"
          />
        </div>
      </div>

      <!-- Пробег -->
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Пробег от (км)</label>
          <input
            type="number"
            v-model.number="localFilters.mileageFrom"
            @change="onFilterChange('mileageFrom', $event.target.value)"
            class="w-full border p-2 rounded"
            placeholder="0"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Пробег до (км)</label>
          <input
            type="number"
            v-model.number="localFilters.mileageTo"
            @change="onFilterChange('mileageTo', $event.target.value)"
            class="w-full border p-2 rounded"
            placeholder="300000"
          />
        </div>
      </div>

      <!-- Цена -->
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Цена от</label>
          <input
            type="number"
            v-model.number="localFilters.priceFrom"
            @change="onFilterChange('priceFrom', $event.target.value)"
            class="w-full border p-2 rounded"
            placeholder="0"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Цена до</label>
          <input
            type="number"
            v-model.number="localFilters.priceTo"
            @change="onFilterChange('priceTo', $event.target.value)"
            class="w-full border p-2 rounded"
            placeholder="10000000"
          />
        </div>
      </div>

      <!-- Объём двигателя -->
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Объём от (л)</label>
          <input
            type="number"
            step="0.1"
            v-model.number="localFilters.engineVolumeFrom"
            @change="onFilterChange('engineVolumeFrom', $event.target.value)"
            class="w-full border p-2 rounded"
            placeholder="0.8"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Объём до (л)</label>
          <input
            type="number"
            step="0.1"
            v-model.number="localFilters.engineVolumeTo"
            @change="onFilterChange('engineVolumeTo', $event.target.value)"
            class="w-full border p-2 rounded"
            placeholder="5.0"
          />
        </div>
      </div>

      <!-- Тип топлива -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Тип топлива</label>
        <select
          v-model="localFilters.engineType"
          @change="onFilterChange('engineType', $event.target.value)"
          class="w-full border p-2 rounded"
        >
          <option value="">Все</option>
          <option v-for="type in engineTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>

      <!-- Коробка передач -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Коробка передач</label>
        <select
          v-model="localFilters.transmission"
          @change="onFilterChange('transmission', $event.target.value)"
          class="w-full border p-2 rounded"
        >
          <option value="">Все</option>
          <option v-for="trans in transmissions" :key="trans" :value="trans">{{ trans }}</option>
        </select>
      </div>

      <!-- Цвет -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Цвет</label>
        <select
          v-model="localFilters.color"
          @change="onFilterChange('color', $event.target.value)"
          class="w-full border p-2 rounded"
        >
          <option value="">Все</option>
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </select>
      </div>

      <!-- Страна -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Страна аукциона</label>
        <select
          v-model="localFilters.countryCode"
          @change="onFilterChange('countryCode', $event.target.value)"
          class="w-full border p-2 rounded"
        >
          <option value="">Все</option>
          <option v-for="country in countries" :key="country.code" :value="country.code">
            {{ country.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCarsStore } from '../stores/cars'

const carsStore = useCarsStore()

// Локальное состояние фильтров для реактивности в форме
const localFilters = ref({ ...carsStore.currentFilters })

// Вычисляемые свойства из хранилища
const brands = computed(() => carsStore.brands)
const models = computed(() => carsStore.models)
const countries = computed(() => carsStore.countries)
const engineTypes = computed(() => carsStore.engineTypes)
const transmissions = computed(() => carsStore.transmissions)
const colors = computed(() => carsStore.colors)

// Обновляем локальные фильтры при изменении в хранилище (например, при сбросе)
onMounted(() => {
  localFilters.value = { ...carsStore.currentFilters }
})

// Функция, вызываемая при изменении фильтра
const onFilterChange = (key, value) => {
  // Обновляем локальное состояние
  localFilters.value[key] = value
  // Обновляем фильтр в хранилище (через action)
  carsStore.updateFilter(key, value)
}

// Функция сброса
const resetFilters = () => {
  carsStore.resetFilters()
  // Обновляем локальное состояние после сброса в хранилище
  localFilters.value = { ...carsStore.currentFilters }
}
</script>
