<script>
  const images = [
    'images/lost1.png',
    'images/lost3.png'
  ];

  // Функция для получения случайного элемента из массива
  function getRandomElement(arr) {
    // Добавим проверку на пустой массив на всякий случай
    if (arr.length === 0) {
        console.warn("Массив изображений пуст!");
        return ''; // Возвращаем пустую строку, если массив пуст
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Находим элемент img по ID
  const imgElement = document.getElementById('randomImage');

  // Устанавливаем атрибут src случайной картинкой при загрузке страницы
  if (imgElement) {
    const randomImageUrl = getRandomElement(images);
    if (randomImageUrl) { // Устанавливаем src только если получили непустой путь
        imgElement.src = randomImageUrl;
        console.log("Установлено изображение:", randomImageUrl); // Добавим лог для отладки
    }
  } else {
    console.error("Элемент с ID 'randomImage' не найден!");
  }
</script>
