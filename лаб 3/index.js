function aboutMe () {
console.log ('Екатерина Лысова');
console.log ('5401-420303V');
}

aboutMe ();

function askTemperature () {
let temp = prompt ('Введите температуру:');
return Number (temp);
}

let currentTemperature = askTemperature();


function isCold (temp) {
return temp < -10;
}

function suggestCloth(temp) {
if (isCold (temp)) {
alert ('Одевайтесь теплее. Обязательно возьмите шапку!');
}
else {
alert ('На улице тепло. Одевайтесь легко!');
}
}

suggestCloth(currentTemperature);

function celsiusToFahrenheit (celsius) {
return celsius * 1.8 + 32;
}

let fahrenheit = celsiusToFahrenheit (currentTemperature);
alert("В США используют Фаренгейты. Примерно это будет: " + fahrenheit + " °F");