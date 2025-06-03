let userMood = Number(prompt("Введите число от 1 до 10: "));

if (userMood >= 1 && userMood <= 3) {
    console.log("Плохое");
}
else if (userMood >= 4 && userMood <= 7) {
    console.log("Нормальное");
}
else if (userMood >= 8 && userMood <= 10) {
    console.log ("Хорошее");
}
else {
    console.log("Число вне диапазона");
}