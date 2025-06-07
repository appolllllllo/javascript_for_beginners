let weight = Number(prompt("Введите вес товара: "));
let deliveryType = prompt("Введите статус доставки (обычная / экспресс): ");

if (weight <= 5) {
    if (deliveryType === "экспресс") {
        console.log("Стоимость доставки: 1000 рублей");
    } else if (deliveryType === "обычная") {
        console.log("Стоимость доставки: 500 рублей");
    } else {
        console.log("Некорректный статус доставки");
    }
} else {
    if (deliveryType === "экспресс") {
        console.log("Стоимость доставки: 1500 рублей");
    } else if (deliveryType === "обычная") {
        console.log("Стоимость доставки: 800 рублей");
    } else {
        console.log("Некорректный статус доставки");
    }
}
