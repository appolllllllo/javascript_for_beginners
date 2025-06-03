let carLength = Number(prompt("Введите длину автомобиля: "));
let engineVolume = Number(prompt("Введите объем двигателя: "));

if (carLength <= 3.8 && engineVolume <= 1.2) {
    console.log("Класс A");
}
else if (carLength <= 4 && engineVolume <= 1.6) {
    console.log("Класс B");
}
else if (carLength <= 4.5 && engineVolume >= 1.6 && engineVolume <= 2) {
    console.log("Класс C");
}
else {
    console.log("Выберите автомобиль другого класса");
}