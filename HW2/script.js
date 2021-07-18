// задание 1

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш номер телефона'),
    email = prompt('Ваш электронный адрес'),
    company = prompt('Ваше место работы');

document.write(`Меня зовут ${name} . Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}. `);

// задание 2

let year = 2021 - age;

console.log(` ${name} 'Родился в ${year} году.`);

// задание 3

let string = '345267',
    part1 = Number(string[0]) + Number(string[1]) + Number(string[2]),
    part2 = Number(string[3]) + Number(string[4]) + Number(string[5]);

if(part1 == part2) {
    console.log('да');
} else {
    console.log('нет');
}

// задание 4

let a = 1,
    a1 = 0,
    a2 = -3;

if(a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

if(a1 > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

if(a2 > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 7

let n = 48;

if (n <= 15) {
    console.log('Данный период относится к 1-й четвети часа');
} else if (n >= 16 && n <= 30) {
    console.log('Данный период относится ко 2-й четвети часа');
} else if (n >= 31 && n <= 45) {
    console.log('Данный период относится к 3-й четвети часа');
} else {
    console.log('Данный период относится к 4-й четвети часа');
}

// задание 8

let day = 7;

if (day <= 10) {
    console.log('Это день из 1-й декады месяца');
} else if (day >= 11 && n <= 20) {
    console.log('Это день из 2-й декады месяца');
} else {
    console.log('Это день из 3-й декады месяца');
}

// задание 9

let days = 184,
    year = days / 365,
    months = days / 31,
    weeks = days / 7,
    hours = days * 24,
    minutes = days * 24 * 60,
    seconds = days * 24 * 60 * 60;

if (year < 1) {
    console.log('Меньше года');
} else {
    console.log(year + ' year');
}
    
if (months < 1) {
    console.log('Меньше месяца');
} else {
    console.log(months + ' months');
}
    
if (weeks < 1) {
    console.log('Меньше недели');
} else {
    console.log(weeks + ' weeks');
}

console.log(hours + ' hours');
console.log(minutes + ' minutes');
console.log(seconds + ' seconds');

// задание 10 - не нашла логики использовать переменную из задания 8, поэтому взяла из 9-го 

let winter1 = 59,
    spring = 151,
    summer = 243,
    autumn = 334,
    winter2 = 335;

if (days <= 31) {
    console.log('Январь');
} else if (days >= 31 && days <= (31 + 28)) {
    console.log('Февраль'); 
} else if (days >= 31 && days <= (31 * 2 + 28)) {
    console.log('Март'); 
} else if (days >= 31 && days <= (31 * 2 + 28 + 30)) {
    console.log('Апрель'); 
} else if (days >= 31 && days <= (31 * 3 + 28 + 30)) {
    console.log('Май'); 
} else if (days >= 31 && days <= (31 * 3 + 28 + 30 * 2)) {
    console.log('Июнь'); 
} else if (days >= 31 && days <= (31 * 4 + 28 + 30 * 2)) {
    console.log('Июль'); 
} else if (days >= 31 && days <= (31 * 5 + 28 + 30 * 2)) {
    console.log('Август'); 
} else if (days >= 31 && days <= (31 * 5 + 28 + 30 * 3)) {
    console.log('Сентябрь'); 
} else if (days >= 31 && days <= (31 * 6 + 28 + 30 * 3)) {
    console.log('Октябрь');
} else if (days >= 31 && days <= (31 * 6 + 28 + 30 * 4)) {
    console.log('Ноябрь');  
} else {
    console.log('Декабрь'); 
}

switch (true) {
    case days <= winter1:
    case days >= winter2:
        console.log('Зима')
    break;
    case days <= spring:
        console.log('Весна')
    break;
    case days <= summer:
        console.log('Лето')
    break;
    case days <= autumn:
    console.log('Осень')
    break;
    default:
        console.log('')
    break;
}