'use strict';

//Задание 2 

let rain;
rain = Math.round(Math.random());
console.log('rain =', rain);

if (rain === 1) {
   alert("Пошёл дождь. Возьмите зонт!");
} else if (rain === 0) {
   alert("Дождя нет!");
};

// Задание 3

const direct1 = Number(prompt("Введите цифрами количество баллов по математике", ""));
const direct2 = Number(prompt("Введите цифрами количество баллов по русскому языку", ""));
const direct3 = Number(prompt("Введите цифрами количество баллов по информатике", ""));

let result = direct1 + direct2 + direct3;

if (Number.isNaN(result) || result < 0) {
   alert("Вы ввели некорректные данные");
} else if (result >= 265) {
   alert("Поздравляю, вы поступили на бюджет!");
} else  {
   alert(`Для поступления на бюджет Вам не хватает ${265 - result} баллов!`);
};

// Задание 4:

const num = Number(prompt("Банкомат может выдать купюры не меньше 100 рублей. Введите цифрами сколько рублей вы хотите снять в банкомате?", ""));

if (num <= 0 || Number.isNaN(num)) {
   console.log("Вы ввели некорректные данные!");
} else if (num % 100 === 0) {
   console.log('Банкомат сможет выдать данную сумму денег!');
} else {
   console.log('Банкомат не сможет выдать данную сумму денег!');
};
