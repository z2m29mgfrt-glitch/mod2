let a = Number (prompt('Введите первое число:'));
let b = Number (prompt('Введите второе число:'));

if (a > 8 && b > 8) {
    alert (a + b);
}

else if (a < 5 || b < 5) {
    alert (a * b);
}

else {
    alert (a - b);
}

let mark = Number (prompt('Введите оценку от 1 до 5'));

switch (mark) {
case 1: alert ('Плохо'); break;
case 2: alert ('Неудовлетворительно'); break;
case 3: alert ('Удовлетворительно'); break;
case 4: alert ('Хорошо'); break;
case 5: alert ('Отлично'); break;
}


for (let i = 100; i >= 20; i = i - 10) {
    console.log(i);
}

for (let i = 3; i <= 21; i = i + 2) {
    console.log(i);
}