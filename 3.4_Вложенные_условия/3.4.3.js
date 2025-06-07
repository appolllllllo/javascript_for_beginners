let price = Number(prompt("Введите цену товара: "));
let status = prompt("Введите статус покупателя (обычный / VIP): ");

if (price > 1000) {
    if (status === "VIP") {
        console.log(price * 0.9);
    } else {
        console.log(price * 0.95);
    }
} else {
    console.log(price);
}