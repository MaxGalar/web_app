// Массив с путями к вашим изображениям
const images = [
  'images/lost1.png',
  'images/lost3.png',
  'images/lost5.png',
  'images/lost6.png
  // Добавьте сюда еще пути, если нужно
];

// Функция для получения случайного элемента из массива
function getRandomElement(arr) {
  if (arr.length === 0) {
      console.warn("Массив изображений пуст!");
      return '';
  }
  // Дополнительно: Если картинок > 1, постараемся не выбрать ту же самую, что уже есть
  const currentSrc = imgElement ? imgElement.getAttribute('src') : ''; // Получаем текущий src
  let randomIndex;
  let randomImage;
  if (arr.length > 1) {
      do {
          randomIndex = Math.floor(Math.random() * arr.length);
          randomImage = arr[randomIndex];
      } while (randomImage === currentSrc); // Повторяем, если выпала та же картинка
  } else {
      // Если картинка всего одна, просто берем ее
      randomIndex = 0;
      randomImage = arr[randomIndex];
  }

  return randomImage; // Возвращаем путь к новой картинке
}

// --- Основная логика ---

// Находим элемент img по ID
const imgElement = document.getElementById('randomImage');

// Функция, которая устанавливает случайное изображение
function setNewRandomImage() {
  if (imgElement) {
    const randomImageUrl = getRandomElement(images); // Получаем НОВЫЙ случайный путь
    if (randomImageUrl) {
        imgElement.src = randomImageUrl; // Устанавливаем новый src
        console.log("Установлено изображение (по клику или загрузке):", randomImageUrl);
    }
  } else {
    // Эта ошибка не должна возникать после начальной загрузки, но на всякий случай
    console.error("Элемент imgElement не найден при попытке обновить изображение!");
  }
}

// --- Выполнение ---

// 1. Проверяем, найден ли элемент при загрузке страницы
if (imgElement) {
  // 2. Устанавливаем ПЕРВОЕ случайное изображение при загрузке
  setNewRandomImage();

  // 3. Добавляем обработчик события 'click' на изображение
  // При клике будет вызываться функция setNewRandomImage
  imgElement.addEventListener('click', setNewRandomImage);

  // Дополнительно: Делаем курсор "рукой" при наведении на картинку, чтобы намекнуть на кликабельность
  imgElement.style.cursor = 'pointer';

} else {
  // Если элемент не найден ИЗНАЧАЛЬНО
  console.error("Элемент с ID 'randomImage' не найден при загрузке страницы!");
}