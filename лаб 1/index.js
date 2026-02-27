let myName = 'Екатерина';
console.log(myName);

let mySurname = 'Лысова';
console.log(mySurname);

let isBachelor = true;
console.log(isBachelor);

let myAge = 23;
console.log(myAge);

let myFullName = myName + ' ' + mySurname;
myFullName = myFullName + ' Возраст: ' + myAge;

console.log(myFullName);



let currentHour = 14;
let isWorkingHours = currentHour >= 9 && currentHour <= 18;
let todayDay = 'Вторник';
let isHoliday = todayDay === 'Суббота' || todayDay === 'Воскресенье';
let canWork = isWorkingHours && !isHoliday;
console.log(canWork);


let celsius = prompt("Введите температуру в Цельсиях:");
celsius = Number(celsius);

const fahrenheit = celsius * 9/5 + 32;
alert(fahrenheit);