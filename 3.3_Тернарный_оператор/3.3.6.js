let dayNumber = Number(prompt("Введите номер дня недели (целое число от 1 до 7, где 1 - понедельник, 7 - воскресенье)"));

let dayType = (dayNumber === 6 || dayNumber === 7) ? "Выходной": "Рабочий день";

console.log(dayType);
