<template>
  <div class="home-page w-full">
    <!-- Приветственный блок -->
    <section class="hero-section bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Покупка и доставка <br />авто из Японии, Кореи и Китая
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Вы – первый собственник автомобиля в России. Экономия по сравнению со вторичным рынком.
          Машины проходят полную таможенную очистку.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/cars"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-md"
          >
            Перейти к каталогу
          </router-link>
          <button
            class="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-bold py-3 px-6 rounded-lg transition shadow-md"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>

    <!-- Преимущества -->
    <section class="advantages-section py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Преимущества работы с нами
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="advantage-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div class="text-blue-600 text-xl font-bold mb-2">Минимальная комиссия</div>
            <p class="text-gray-600">Комиссия компании от 30 000 рублей</p>
          </div>
          <div
            class="advantage-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div class="text-blue-600 text-xl font-bold mb-2">Оплата на рассчетный счет</div>
            <p class="text-gray-600">Оплата в рублях на расчётный счёт нашей компании</p>
          </div>
          <div
            class="advantage-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div class="text-blue-600 text-xl font-bold mb-2">Работа строго по договору</div>
            <p class="text-gray-600">Автомобиль проходит полную таможенную очистку</p>
          </div>
          <div
            class="advantage-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div class="text-blue-600 text-xl font-bold mb-2">Доставка по всей России</div>
            <p class="text-gray-600">Автовозами или железно-дорожной сеткой</p>
          </div>
          <div
            class="advantage-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div class="text-blue-600 text-xl font-bold mb-2">Сохранность автомобиля</div>
            <p class="text-gray-600">Страховка автомобиля при транспортировке в Россию</p>
          </div>
          <div
            class="advantage-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div class="text-blue-600 text-xl font-bold mb-2">Дополнительные услуги</div>
            <p class="text-gray-600">
              Можем взять на себя обслуживание и оформление вашего автомобиля
            </p>
            <ul class="list-disc pl-5 mt-2 text-gray-600">
              <li>Поставим ваш автомобиль на учёт</li>
              <li>Приобретем масла, фильтра, колеса</li>
              <li>Обслужим авто, переобуем, установим сигнализацию</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Схема покупки -->
    <section class="scheme-section py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Схема покупки
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">1. Выбор автомобиля</div>
            <p class="text-gray-600">
              С выбором поможет наша команда, мы подберем автомобиль под ваш бюджет и пожелания.
            </p>
          </div>
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">2. Оставить заявку</div>
            <p class="text-gray-600">
              Заключение договора и внесение предоплаты. Предоплата от 50000 рублей, возврат в
              случае отказа.
            </p>
          </div>
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">3. Подбор и покупка</div>
            <p class="text-gray-600">Все ставки совершаются только после согласования с Вами.</p>
          </div>
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">4. Оплата и документы</div>
            <p class="text-gray-600">
              После покупки, оплата стоимости автомобиля и его доставку в РФ.
            </p>
          </div>
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">5. Доставка в РФ</div>
            <p class="text-gray-600">Сроки доставки до 30 дней.</p>
          </div>
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">6. Таможенное оформление</div>
            <p class="text-gray-600">Полная таможенная очистка и получение ЭПТС и СБКТС.</p>
          </div>
          <div class="scheme-step bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 font-bold text-lg mb-2">7. Доставка по России</div>
            <p class="text-gray-600">Отправим автомобиль в любую точку России.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Ничего не нужно
</script>
