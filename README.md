# 🚀 Future Tech

> Современный веб-проект, посвященный миру искусственного интеллекта и технологий будущего

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ О проекте

Интерактивный веб-сайт, созданный для погружения в захватывающий мир искусственного интеллекта. Проект демонстрирует современные возможности ИИ, рассказывает о технологиях машинного обучения и предоставляет актуальную информацию о развитии искусственного интеллекта.

## 🚀 Особенности

- **Современный дизайн** — адаптивный интерфейс с плавными анимациями
- **Интерактивность** — динамические элементы и engaging пользовательский опыт
- **Производительность** — оптимизированный код без внешних библиотек
- **Доступность** — семантическая разметка и поддержка различных устройств
- **Модульность** — структурированная архитектура SCSS

## 🛠 Технический стек

- **HTML5** — семантическая разметка
- **SCSS** — препроцессор CSS с модульной архитектурой
  - Переменные и миксины (vars.scss, mixins.scss)
  - Функции-помощники (functions.scss)
  - Адаптивные медиа-запросы (media.scss)
  - Блочная архитектура (blocks/)
  - Нормализация стилей (normalize.scss)
- **Vanilla JavaScript (ES6+)** — модульная архитектура без зависимостей
  - Arrow functions
  - Template literals
  - Destructuring
  - ES6 Modules

## 🎯 Структура проекта

```
future-tech/
├── .idea/                          # Конфигурация IDE
├── assets/
│   ├── fonts/                      # Шрифты проекта
│   ├── icons/                      # Иконки
│   ├── images/                     # Фотографии и изображения
│   └── logo/                       # Логотипы                  # Зависимости npm
├── scripts/
│   ├── main.js                     # Главный файл запуска модулей
│   └── [модули]/                   # Модульные JS файлы с логикой
├── styles/
│   ├── blocks/                     # Блоки элементов верстки
│   │   └── [компоненты].scss       # Секции, переиспользуемые элементы
│   ├── helpers/                    # Файлы-помощники
│   │   ├── functions.scss          # SCSS функции
│   │   ├── index.scss              # Индексный файл помощников
│   │   ├── media.scss              # Медиа-запросы
│   │   └── mixins.scss             # SCSS миксины
│   ├── fonts.scss                  # Подключение шрифтов
│   ├── globals.scss                # Глобальные стили
│   ├── main.css                    # Скомпилированный CSS
│   ├── main.css.map                # Source map для CSS
│   ├── main.scss                   # Главный SCSS файл
│   ├── normalize.scss              # Сброс стилей браузера
│   ├── utils.scss                  # Утилитарные классы
│   └── vars.scss                   # Переменные SCSS
├── index.html                      # Главная страница
├── package.json                    # Конфигурация npm
└── package-lock.json               # Блокировка версий зависимостей
```

## 🚀 Быстрый старт

1. **Клонируйте репозиторий**
   ```bash
   git clone https://github.com/ViktorovVik/future-tech.git
   cd future-tech
   ```

2. **Установите зависимости для SCSS**
   ```bash
   npm install
   ```

3. **Компилируйте SCSS**
   ```bash
   npm run build-css
   ```

4. **Откройте проект**
   - Запустите локальный сервер или откройте `index.html` в браузере

## 🔧 Scripts

```bash
# Компиляция SCSS
npm run build-css

# Отслеживание изменений SCSS
npm run watch-css

# Минификация CSS для продакшена
npm run build-css:prod
```

## 🌟 Функциональность

- **Главная страница** — обзор мира ИИ с современными технологиями
- **Интерактивные демо** — примеры работы ИИ алгоритмов
- **Образовательные материалы** — статьи и ресурсы об искусственном интеллекте
- **Адаптивный дизайн** — корректное отображение на всех устройствах

## 📱 Поддерживаемые браузеры

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Вклад в проект

Приветствуются любые предложения по улучшению проекта:

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 🔗 Полезные ссылки

- [Документация по ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [SCSS Guide](https://sass-lang.com/guide)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

<div align="center">
  <p>Создано с ❤️ для изучения технологий будущего</p>
  <p>© 2025 Future Tech</p>
</div>