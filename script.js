<script>
    // Плавная прокрутка при переходе по якорным ссылкам
    document.querySelectorAll('a[href^="#"]').forEach(anchor = {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Плавная прокрутка к секции
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        })
    });
</script>






    // Получаем элементы
    const modal = document.getElementById("productModal");
    const btn = document.getElementById("showModalBtn");
    const closeBtn = document.querySelector(".close-btn");

    // Открыть модальное окно
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Закрыть модальное окно
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Закрыть модальное окно, если пользователь кликает вне окна
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }




    
// Устанавливаем конечную дату для таймера
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Обновляем таймер каждую секунду
const x = setInterval(function() {

    // Получаем текущую дату и время
    const now = new Date().getTime();

    // Находим разницу между конечной датой и текущей
    const distance = countdownDate - now;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображаем результат
    document.getElementById("countdown").innerHTML = days + "д " + hours + "ч "
    + minutes + "м " + seconds + "с ";

    // Если таймер истек, выводим сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Акция завершена!";
    }
}, 1000);





document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");

    // Проверяем, что email введен правильно
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        message.textContent = "Спасибо за подписку! Мы отправим вам новости на email.";
        message.style.color = "green";
    } else {
        message.textContent = "Пожалуйста, введите правильный адрес электронной почты.";
        message.style.color = "red";
    }
});



