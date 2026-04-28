// function registerGuest(name, callback) {
//     console.log(`Rgistering ${name}!`);
// }
// // Передаємо інлайн-функцію greet у якості колбека

// registerGuest("Mango", function greet(name) {
//     console.log(`Welcome ${name}!`)
// });
// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name){
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// })
//========================TASK=============================================
// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, 
// makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback),
//     передавши другим аргументом інлайн колбек - функцію eatPizza(pizzaName).
// Колбек eatPizza логує рядок "Eating pizza <назва піци>", де < назва піци > це значення параметра pizzaName.

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`);
// });
// ++++++++++++++++++++++++++++++++Метод forEach(callback)++++++++++++++++++++++++++++++++++++
// const numbers = [5, 10, 15, 20, 25];
// // класичний for 
// for (let index = 0; index < numbers.length; index++) {
//     console.log(`index ${index}, value ${numbers[index]}`);
// }
// // перебираючий метод forEach`
// numbers.forEach(function(numbers, index){
//     console.log(`Index ${index}, value ${numbers}`);
// });
// >>>метод for робить: Ти даєш підлеглому список деталей і кажеш: 
// «Пофарбуй кожну і принеси мені назад готовий набір». Ти очікуєш отримати результат.
// >>>метод forEach каже: «Бери деталь, фарбуй і клади в коробку».
// Він не принесе тобі коробку в руках (він нічого не повертає тому і undefined).
// Але коробка, яка стояла поруч, зміниться. Вона наповниться готовими деталями.
//========================TASK=============================================
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//     і розраховує загальну суму його елементів,
//     яка зберігається у змінній totalPrice і повертається як результат роботи функції.
//========================TASK=============================================
// Доповни виклик метода forEach, передавши йому колбек - функцію, я
// ка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//     orderedItems.forEach(function (temp){
//         totalPrice += temp;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));// повертає 138
// console.log(calculateTotalPrice([164, 48, 291]) );//повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]) );//повертає 1116
//========================TASK=============================================
// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив,
//     в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value.
//  Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

function filterArray(numbers, value) {
    let arrayOf = [];
    numbers.forEach(function (item) {
        if (item > value) {
            arrayOf.push(item);
        }
    });
    return arrayOf;
}
console.log(filterArray([1, 2, 3, 4, 5], 3) )//повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4))// повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5) )//повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38) )//повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20) )//повертає [24, 41, 76]
