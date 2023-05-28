var cardDates = document.querySelectorAll(".product-card__date");

var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

var months = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля",
        "Августа","Сентября","Октября","Ноября","Декабря" ];

// convert DD/MM/YYYY to MM/DD/YYYY
function convertDate(date) {
    let dayMonthYear = date.split(".");
    return dayMonthYear[1] + "." + dayMonthYear[0] + "." + dayMonthYear[2]; 
}

function getDayInfo(date) {
    var currentDate = new Date(convertDate(date));
    var dayName = days[currentDate.getDay()];
    var monthName = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();
    var weekOfMonth = (0 | currentDate.getDate() / 7) + 1;
    return dayName + ", " + weekOfMonth + " неделя " + monthName + " " + year + " года";
}

for (let cardDate of cardDates) {
    cardDate.textContent = getDayInfo(cardDate.textContent);
}