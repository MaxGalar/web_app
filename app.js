    // Ждем, пока API Telegram WebApp будет готово
    Telegram.WebApp.ready(function() {
      // Устанавливаем цвет фона для клиента Telegram
      // Используем тот же цвет, что и в CSS для body (#0A0A0A)
      Telegram.WebApp.setBackgroundColor('#0A0A0A');

      // Опционально: можно также установить цвет хедера,
      // если он должен отличаться от стандартного
      // Telegram.WebApp.setHeaderColor('#1A1A1A'); // Пример цвета

      // Опционально: можно включить Sticky режим здесь же, если нужно
      // Telegram.WebApp.enableSticky();

      console.log('Telegram WebApp initialized. Background color set.');
    });

    // Можно добавить здесь и другой JS-код для твоей страницы,
    // но взаимодействие с Telegram.WebApp лучше делать внутри ready()
