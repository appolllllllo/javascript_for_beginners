let number = Number(prompt("Введите общую сумму покупок: "));

if (number >= 1000) {
    let discountedPrice = number * 0.1; // Скидка 10%
    console.log(number - discountedPrice);
    console.log("Спасибо за покупку");
}
else {
    console.log("Спасибо за покупку");
}git