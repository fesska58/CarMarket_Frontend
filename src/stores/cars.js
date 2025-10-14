import { defineStore } from 'pinia'
import api from '../services/api'

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: [], // Список автомобилей
    totalPages: 0, // Всего страниц
    totalElements: 0, // Всего авто
    loading: false, // Индикатор загрузки
    currentFilters: {
      // Текущие фильтры
      page: 0,
      size: 10,
      sort: 'priceAuction,asc',
    },
    calculationResult: null, // Результат расчёта
  }),

  actions: {
    // Загрузка списка автомобилей
    async fetchCars() {
      this.loading = true
      try {
        const response = await api.get('/cars', {
          params: this.currentFilters,
        })
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

    // Расчёт стоимости
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
