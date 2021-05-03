let studentsStr = "Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія- ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Іванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Іванов Дмитро - ІВ-82"


// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

const studentsGroups = [];

// Ваш код починається тут

studentsStr
  .split`; `
  .map((entry) => entry.split` - `)
  .forEach(
    ([student, group]) =>
      void (studentsGroups[group] = studentsGroups[group]
        ? [...studentsGroups[group], student]
        : [student])
  );

// Ваш код закінчується тут

console.log(studentsGroups);

const points = [12, 12, 12, 12, 12, 12, 12, 16];

// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)

const randomValue = (maxValue) => {
  switch (Math.ceil(Math.random() * 6)) {
    case 1:
      return ~~(maxValue * 0.7);
    case 2:
      return ~~(maxValue * 0.9);
    case 3:
    case 4:
    case 5:
      return maxValue;
    default:
      return 0;
  }
};

let studentPoints = {};

// Ваш код починається тут

for (const group in studentsGroups) {
  studentsGroups[group].forEach((student) => {
    studentPoints[group] = {
      ...studentPoints[group],
      [student]: points.map(randomValue),
    };
  });
}

// Ваш код закінчується тут

console.log(studentPoints);

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

let sumPoints = {};

// Ваш код починається тут
for (const group in studentPoints) {
  for (const student in studentPoints[group]) {
    sumPoints[group] = {
      ...sumPoints[group],
      [student]: studentPoints[group][student].reduce(
        (prev, cur) => prev + cur
      ),
    };
  }
}

//reduce

// Ваш код закінчується тут
console.log("zhopa");
console.log(sumPoints);

// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи

let groupAvg = {};

// Ваш код починається тут

for (const group in sumPoints) {
  let sum = 0;
  for (const student in sumPoints[group]) {
    sum += sumPoints[group][student];
  }
  groupAvg[group] = sum / Object.keys(sumPoints[group]).length;
}

// Ваш код закінчується тут
console.log('среднее')
console.log(groupAvg);

// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів

let passedPerGroup = {};

// Ваш код починається тут

for (const group in sumPoints) {
  for (const student in sumPoints[group]) {
    if (sumPoints[group][student] >= 60) {
      passedPerGroup[group] = passedPerGroup[group]
        ? [...passedPerGroup[group], student]
        : [student];
    }
  }
}

// Ваш код закінчується тут

console.log(passedPerGroup);