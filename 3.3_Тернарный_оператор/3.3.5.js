let weight = Number(prompt("Введите вес товара: "));

let shippingCost = (weight <= 5) ? "200 рублей": "350 рублей";

console.log("Стоимость доставки:",shippingCost);