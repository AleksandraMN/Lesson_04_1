'use strict';

// Задание 1:
{
   const productName = 'яблоки';
   const quantity = 10;
   const category = 'продукты';
   const priceUnit = 290;

   const amount = quantity * priceUnit;
   console.log(`На складе ${quantity} единиц(ы) товара "${productName}" на сумму ${amount} рублей.`);
}
{
   const productName = 'мандарины';
   const quantity = 24;
   const category = 'продукты';
   const priceUnit = 350;

   const amount = quantity * priceUnit;
   console.log(`На складе ${quantity} единиц(ы) товара "${productName}" на сумму ${amount} рублей.`);
}
{
   const productName = (prompt("Введите наименование товара буквами русского алфавита", "")).toLowerCase();
   const quantity = Number(prompt("Введите количество товара в кг цифрами", ""));
   console.log('Количество товара', quantity, typeof quantity);
   const category = (prompt("Введите категорию товара буквами русского алфавита", "")).toLowerCase();
   const priceUnit = Number(prompt("Введите цену единицы товара в рублях цифрами", ""));
   
   console.log('Цена единицы товара', priceUnit, typeof priceUnit);
   
   if (Number.isNaN(quantity) || Number.isNaN(priceUnit)) {
      alert("Вы ввели некорректные данные");
   } else {
      const amount = quantity * priceUnit;
      console.log(`На складе ${quantity} единиц(ы) товара "${productName}" на сумму ${amount} рублей.`);
   }
}

