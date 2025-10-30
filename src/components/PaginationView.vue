<!-- frontend/src/components/Pagination.vue -->

<template>
  <div class="pagination flex justify-center space-x-2">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 0"
      class="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      &laquo;
    </button>

    <!-- Показываем только 5 кнопок, центрируя текущую страницу -->
    <button
      v-for="page in pagesToShow"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-3 py-1 rounded border',
        currentPage === page
          ? 'bg-blue-600 text-white border-blue-600'
          : 'border-gray-300 text-gray-700 hover:bg-gray-100',
      ]"
    >
      {{ page + 1 }}
    </button>

    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages - 1"
      class="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      &raquo;
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

const emit = defineEmits(['change-page'])

// Вычисляем, какие страницы показывать (например, 5 кнопок)
const pagesToShow = computed(() => {
  const delta = 2
  const range = []
  const start = Math.max(0, props.currentPage - delta)
  const end = Math.min(props.totalPages - 1, props.currentPage + delta)

  for (let i = start; i <= end; i++) {
    range.push(i)
  }

  return range
})

const goToPage = (page) => {
  if (page >= 0 && page < props.totalPages && page !== props.currentPage) {
    emit('change-page', page)
  }
}
</script>
