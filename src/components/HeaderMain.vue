<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container_sections mx-auto px-4">
      <!-- Верхняя строка: контакты и соцсети (скрывается на мобильных) -->
      <div class="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
        <div class="flex items-center space-x-4">
          <a href="tel:+71234567890" class="flex items-center hover:text-blue-600 transition">
            <!-- Иконка телефона -->
            <div class="w-4 h-4 mr-1 flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            +7 (123) 456-78-90
          </a>
          <a
            href="https://wa.me/71234567890"
            target="_blank"
            class="flex items-center text-green-600 hover:text-green-700 transition"
          >
            <!-- Иконка WhatsApp -->
            <div class="w-4 h-4 mr-1 flex items-center justify-center">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.453 3.486"
                />
              </svg>
            </div>
            WhatsApp
          </a>
        </div>
        <div class="flex space-x-4">
          <!-- Заглушка для соцсетей -->
          <a href="#" class="hover:text-blue-600 transition">ВКонтакте</a>
          <a href="#" class="hover:text-blue-600 transition">Telegram</a>
        </div>
      </div>

      <!-- Основная навигация -->
      <div class="flex justify-between items-center py-4">
        <!-- Логотип -->
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-blue-600 hover:text-blue-800 transition"
            >CarCatalog</router-link
          >
        </div>

        <!-- Навигация (скрыта на мобильных) -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Главная</router-link
          >
          <router-link to="/cars" class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Каталог</router-link
          >
          <router-link
            to="/calculator"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Калькулятор</router-link
          >
          <router-link to="/about" class="text-gray-700 hover:text-blue-600 font-medium transition"
            >О нас</router-link
          >
        </nav>

        <!-- Кнопка "Оставить заявку" -->
        <div>
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition shadow-md"
          >
            Оставить заявку
          </button>
        </div>

        <!-- Мобильное меню (иконка бургера) -->
        <button class="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
// Ничего не нужно
</script>
