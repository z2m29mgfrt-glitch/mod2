
let userName = 'Екатерина';
console.log(userName);

let surname = 'Лысова';
console.log(surname);

let bachelor = true;
console.log(bachelor);

let age = 23;
console.log(age);

let fullName = userName + ' ' + surname;
fullName = fullName + ' возраст: ' + age;
console.log(fullName);

let hour = 14;
let work = hour >= 9 && hour <= 18;
let today = 'Пятница';
let holiday = today === 'Суббота' || today === 'Воскресенье';
let canWork = work && !holiday;
console.log(canWork);

let celsius = prompt("Введите температуру в Цельсиях:");
celsius = Number(celsius);

const fahrenheit = celsius * 9/5 + 32;
alert(fahrenheit);