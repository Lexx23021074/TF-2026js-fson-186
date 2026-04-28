//---------------Стрілочні функції------------------------------------
//+++++++++++++++++++++++++Стрілочні функції: синтаксис++++++++++++++++++++++++++++++++
// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
// }
// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => a + b + c;
// const greet = () => console.log("Hello!");

// console.log(classicAdd(1, 2, 3));
// console.log(arrowAdd(1, 2, 3));
// console.log(greet());
//=================TASK==============================================
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));// повертає 500
// console.log(calculateTotalPrice(8, 60) );//повертає 480
// console.log(calculateTotalPrice(3, 400));// повертає 1200
//+++++++++++++++++++++++++Неявне повернення++++++++++++++++++++++++++++++++
// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add(1, 2, 3));
//=================TASK==============================================
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//  }
// console.log(calculateTotalPrice(5, 100));// повертає 500
// console.log(calculateTotalPrice(8, 60) );//повертає 480
// console.log(calculateTotalPrice(3, 400));// повертає 1200
//+++++++++++++++++++++++++Псевдомасив arguments++++++++++++++++++++++++++++++++
// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. 
// Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.
// const add = (...args) => {
//   console.log(args);
// };
// add(1, 2, 3); // [1, 2, 3]
//+++++++++++++++++++++++++Колбеки++++++++++++++++++++++++++++++++
// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });
// // посилання на функцію
// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };
// numbers.forEach(logMessage);
//=================TASK==============================================
// const calculateTotalPrice = (orderedItems) => {
//     let total = 0;
    
//     orderedItems.forEach(temp => total += temp);

//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//=================TASK==============================================
const  filterArray = (numbers, value) =>{
    let filteredArray = [];

numbers.forEach(number => {
    if (number > value) filteredArray.push(number);
  });
    return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));// повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4));// повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5));// повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38));// повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));// повертає [24, 41, 76]
