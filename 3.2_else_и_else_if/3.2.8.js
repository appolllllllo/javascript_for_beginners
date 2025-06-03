let timeOfDay = Number(prompt("Введите текущее время: "));

if (timeOfDay >= 0 && timeOfDay <= 11) {
    console.log("Доброе утро");
}
else if (timeOfDay >= 12 && timeOfDay <= 17) {
    console.log("Добрый день");
}
else if (timeOfDay >= 18 && timeOfDay <= 23) {
    console.log("Добрый вечер");
}