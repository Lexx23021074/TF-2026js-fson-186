// # ЗМІНІ

// 1. Створіть змінну з ім'ям `name` і присвойте їй ваше ім'я. Виведіть це ім'я в
//    консоль.
// const name = "Taras";
// console.log(name);

// 2. Створіть змінну `age` і присвойте їй ваш вік. Виведіть в консоль рядок, що
//    містить ваш вік у такому форматі: "Мені {вік} років".
// const age = 52;
// console.log(`мені ${age} років`);

// 3. Створіть змінні `x` і `y` і присвойте їм довільні числа. Виведіть в консоль
//    результати додавання, віднімання, множення та ділення цих чисел.
// const x = 7;
// const y = 14;
// console.log(`додаванння ${x + y}`);
// console.log(`віднімання ${x - y}`);
// console.log(`множення ${x * y}`);
// console.log(`ділення ${x / y}`);
// 1. Створіть змінну `city` і присвойте їй назву вашого міста. Створіть рядок,
//    який містить "Я живу в місті {назва міста}", і виведіть його в консоль.
// const city = "Київ";
// console.log(`я живу в місті ${city}`) 

// 4. Створіть змінну `price` і присвойте їй число. Створіть рядок, що містить ціну
//    з символом гривні, наприклад: "Ціна: 500 грн".
// const price = 777;
// console.log(` Ціна ${price} грн`)
// ---

// ```
// 5 Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.
// const firstName = "Taras";
// const lastName = "Fedoriv";
// const fullName = firstName + " " + lastName;
// // або 
// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName);
// console.log(fullName2);

// 6 Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.
//
// const a = 10;
// const b = 13;
// const sum = a + b;
// const difference = a - b;
// const product = a * b;
// const quotient = a / b;
// console.log(sum, difference, product, quotient)

// 7 Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.
// ```
// const radius = 5;
// const pi = 3.14;
// const result = pi * radius ** 2;
// console.log(result);
// ---

// ```
// 8 Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
// ```
// const someString = "Some String";
// console.log(someString.length);
// ---

// ```
// 9 Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.
// ```
// const someString = "Some String";
// const firstLetter = someString[0];
// const lastLetter = someString[someString.length-1];
// console.log(firstLetter, lastLetter);
// ---

// ```
// 10 Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
// // ```
// const str1 = "HELLO";
// const str2 = "WORLD";
// const str3 = str1[str1.length-1] + str2[str2.length-1];
// console.log(str3);

// // ---

// ```
//+11 Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

// ```
// const a = 512;
// const len = String(a).length;
// const result = a * 5 ** len;
// console.log(result);
// ---

// ```
//12+ Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = apples+grapes;
// console.log(total)
// const diff = apples-grapes;
// console.log(diff)

// ```

// ---

// ```
// 13+ Замінити вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students = students += 50;
// console.log(students);
// // ```

// ---

// ```
// 14Розбери пріоритет операторів в інструкції визначення значення змінної
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ```

// ---

// ```
// 15 Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `Cyberdyne Systems has ${repairBots+defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```
