let month = Number(prompt("Введите номер месяца: "));
let temperature = Number(prompt("Введите температуру на улице (в градусах Цельсия): "));

let season;
let detailedSeason;

if (month === 12 || month === 1 || month === 2) {
    season = "Зима";
    if (temperature <= -25) {
        detailedSeason = "Зима (холодная зима)";
    }
} else if (month === 3 || month === 4 || month === 5) {
    season = "Весна";
    if (temperature < 15) {
        detailedSeason = "Весна (прохладная весна)";
    }
} else if (month === 6 || month === 7 || month === 8) {
    season = "Лето";
    if (temperature >= 30) {
        detailedSeason = "Лето (жаркое лето)";
    }
} else if (month === 9 || month === 10 || month === 11) {
    season = "Осень";
    if (temperature < 0) {
        detailedSeason = "Осень (прохладная осень)";
    }
}

console.log(detailedSeason || season);