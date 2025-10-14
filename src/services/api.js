import axios from 'axios'

// Базовый URL бэкенда
const API_BASE_URL = 'http://localhost:8080/api'

// Создаём экземпляр axios с настройками
const api = axios.create({
  baseURL: API_BASE_URL, // Все запросы будут к http://localhost:8080/api/...
  timeout: 10000, // Время ожидания 10 сек
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
