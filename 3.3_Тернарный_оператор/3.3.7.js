let completedTasks = Number(prompt("Введите количество выполненных задач: "));
let totalTasks = Number(prompt("Введите количество поставленных изначально задач: "));

let result = (completedTasks >= totalTasks) ? "Цель достигнута": "Цель не достигнута";

console.log(result);