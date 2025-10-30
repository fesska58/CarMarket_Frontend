// frontend/src/stores/cars.js

import { defineStore } from 'pinia'
import api from '../services/api'

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: [],
    totalPages: 0,
    totalElements: 0,
    loading: false,
    // Новые поля для фильтрации и пагинации
    currentFilters: {
      page: 0,
      size: 12, // 12 авто на странице
      sort: 'year,desc', // по умолчанию сортировка по году (новые первые)
      brand: '',
      model: '',
      yearFrom: null,
      yearTo: null,
      mileageFrom: null,
      mileageTo: null,
      priceFrom: null,
      priceTo: null,
      engineVolumeFrom: null,
      engineVolumeTo: null,
      engineType: '',
      transmission: '',
      color: '',
      countryCode: '',
    },
    // Для селектов фильтров (можно заполнить из API позже)
    brands: [],
    models: [],
    countries: [
      { code: 'JP', name: 'Япония' },
      { code: 'KR', name: 'Корея' },
      { code: 'CN', name: 'Китай' },
    ],
    engineTypes: ['бензин', 'дизель', 'гибрид', 'электро'],
    transmissions: ['автомат', 'механика', 'вариатор'],
    colors: ['чёрный', 'белый', 'серый', 'синий', 'красный', 'серебристый'],
  }),

  actions: {
    // Загрузка списка автомобилей
    async fetchCars() {
      this.loading = true
      try {
        // Убираем пустые/нулевые параметры, чтобы не отправлять в запросе
        const params = {}
        Object.keys(this.currentFilters).forEach((key) => {
          if (this.currentFilters[key] !== '' && this.currentFilters[key] !== null) {
            params[key] = this.currentFilters[key]
          }
        })

        const response = await api.get('/cars', { params })
        this.cars = response.data.content
        this.totalPages = response.data.totalPages
        this.totalElements = response.data.totalElements
      } catch (error) {
        console.error('Failed to fetch cars:', error)
        // TODO: обработка ошибки
      } finally {
        this.loading = false
      }
    },

    // Сброс фильтров
    resetFilters() {
      this.currentFilters = {
        page: 0,
        size: 12,
        sort: 'year,desc',
        brand: '',
        model: '',
        yearFrom: null,
        yearTo: null,
        mileageFrom: null,
        mileageTo: null,
        priceFrom: null,
        priceTo: null,
        engineVolumeFrom: null,
        engineVolumeTo: null,
        engineType: '',
        transmission: '',
        color: '',
        countryCode: '',
      }
      // После сброса фильтров — загружаем список снова
      this.fetchCars()
    },

    // Изменение фильтра и перезагрузка
    updateFilter(key, value) {
      this.currentFilters[key] = value
      // Сброс на первую страницу при изменении фильтра
      if (key !== 'page') {
        this.currentFilters.page = 0
      }
      this.fetchCars()
    },

    // Изменение страницы
    changePage(page) {
      this.currentFilters.page = page
      this.fetchCars()
    },

    // Изменение сортировки
    changeSort(sort) {
      this.currentFilters.sort = sort
      this.fetchCars()
    },

    // Расчёт стоимости (как было)
    async calculate(request) {
      try {
        const response = await api.post('/calculator/calculate', request)
        this.calculationResult = response.data
        return response.data
      } catch (error) {
        console.error('Calculation failed:', error)
        throw error
      }
    },
  },
})
