//---------------Метод toSorted-----------------------------------
//+++++++++++++++++++++++++Метод toSorted()+++++++++++++++++++++++++++++++
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// console.log(scores); // [61, 19, 74, 35, 92, 56]
// //+++++++++++++++++++++++++Масив рядків+++++++++++++++++++++++++++++++
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// //=================TASK==============================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Edgar Allan Poe",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();
// //+++++++++++++++++++++++++Свій порядок сортування чисел++++++++++++++++++++++++++++++
// Сортування за зростанням
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// // Сортування за спаданням
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0
// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
// //+++++++++++++++++++++++++Сортування об'єктів++++++++++++++++++++++++++++++
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// //+++++++++++++++++++++++++Ланцюжки методів+++++++++++++++++++++++++++++