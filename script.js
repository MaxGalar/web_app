document.addEventListener('DOMContentLoaded', () => {

    // Получаем все нужные элементы
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownEl = document.getElementById('countdown');
    const messageEl = document.getElementById('message');
    const waitingMessageEl = document.getElementById('waiting-message');

    // --- Настройка дат ---
    const startYear = 2025;
    const startMonth = 3; // Апрель (0-индексация)
    const startDay = 14;
    const daysToCount = 100; // Длительность отсчета

    // Дата начала отсчета
    const startDate = new Date(startYear, startMonth, startDay, 0, 0, 0);
    const startTimestamp = startDate.getTime();

    // Дата окончания отсчета (startDate + 100 дней)
    const endDate = new Date(startDate); // Создаем копию startDate
    endDate.setDate(endDate.getDate() + daysToCount); // Добавляем 100 дней
    const endTimestamp = endDate.getTime();
    // ------------------------

    // Функция форматирования времени (01, 02, ...)
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Функция форматирования даты для сообщения об ожидании
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ru-RU', options);
    }

    let timerInterval; // Переменная для хранения интервала

    function updateCountdown() {
        const now = new Date().getTime(); // Текущее время

        // --- Проверяем состояние ---

        // 1. Еще не началось?
        if (now < startTimestamp) {
            countdownEl.style.display = 'none';
            messageEl.style.display = 'none';
            waitingMessageEl.style.display = 'block';
            waitingMessageEl.textContent = `Отсчет начнется ${formatDate(startDate)}`;
            // Не останавливаем интервал, чтобы он сработал, когда время придет
            return; // Пока ничего не считаем
        }

        // 2. Уже закончилось?
        if (now >= endTimestamp) {
            clearInterval(timerInterval); // Останавливаем таймер
            countdownEl.style.display = 'none';
            waitingMessageEl.style.display = 'none';
            messageEl.style.display = 'block'; // Показываем финальное сообщение
            // Устанавливаем нули (не обязательно, но аккуратно)
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return; // Больше считать не нужно
        }

        // 3. Идет отсчет! (now >= startTimestamp и now < endTimestamp)
        countdownEl.style.display = 'flex'; // Показываем таймер
        waitingMessageEl.style.display = 'none';
        messageEl.style.display = 'none';

        const distance = endTimestamp - now; // Считаем время до КОНЦА отсчета

        // Рассчитываем дни, часы, минуты, секунды
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Обновляем HTML
        daysEl.textContent = formatTime(days);
        hoursEl.textContent = formatTime(hours);
        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
    }

    // Запускаем обновление каждую секунду
    timerInterval = setInterval(updateCountdown, 1000);

    // Вызываем сразу, чтобы определить начальное состояние
    updateCountdown();

});