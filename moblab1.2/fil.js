let studentsStr = "Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія - ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Іванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Іванов Дмитро - ІВ-82"

const studentsGroups = [];

studentsStr.split(';').map(str => str.split('- ')).forEach(
    ([stud, group]) => {
        if (studentsGroups[group]) {
        studentsGroups[group] = [...studentsGroups[group], stud]
    } else {
        studentsGroups[group] = [stud]
    }
});

console.log('Завдання 1')
console.log(studentsGroups)

const points = [12, 12, 12, 12, 12, 12, 12, 16];

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
  
let studentPoints = [];
    
for (const group in studentsGroups) {
  studentsGroups[group].forEach((stud) => {
    studentPoints[group] = {
      ...studentPoints[group],
      [stud]: points.map(randomValue),
      };
    });
}  

console.log('Завдання 2')
console.log(studentPoints);


let sumPoints = [];

for (const group in studentPoints) {
  for (const stud in studentPoints[group]) {
      sumPoints[group] = {
        ...sumPoints[group], [stud]: studentPoints[group][stud].reduce((acc, currValue) => acc + currValue),
    }
  }
}
console.log('Завдання 3')
console.log(sumPoints)

let groupAvg = [];

for (const group in sumPoints) {
  let sum = 0;
  for (const student in sumPoints[group]) {
    sum = sum + sumPoints[group][student];
    groupAvg[group] = sum / Object.keys(sumPoints[group]).length;
  }
}

console.log('Завдання 4')
console.log(groupAvg)

let passedPerGroup = {};

for (const group in sumPoints) {
  for (const stud in sumPoints[group]) {
    if (sumPoints[group][stud] >= 60) {
      if (passedPerGroup[group]) {
        passedPerGroup[group] = [...passedPerGroup[group], stud]
      }
      else {
        passedPerGroup[group] = [stud]
      }
    }
  }
}
console.log(sumPoints)
console.log("Завданн 5")
console.log(passedPerGroup)