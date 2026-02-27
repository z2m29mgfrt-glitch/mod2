function showinfo() {
    console.log('Екатерина Лысова');
    console.log('5401-420303V');
}
showinfo();

function gettemp() {
    let t = prompt('Введите температуру:');
    return Number(t);
}

let temp = gettemp();

function isfreezing(t) {
    return t < -10;
}

function advise(t) {
    if (isfreezing(t)) {
        alert('Одевайтесь теплее. Обязательно возьмите шапку!');
    } else {
        alert('На улице тепло. Одевайтесь легко!');
    }
}
advise(temp);

function tofahrenheit(c) {
    return c * 1.8 + 32;
}

let f = tofahrenheit(temp);
alert('В США используют Фаренгейты. Примерно это будет: ' + f + ' °F');