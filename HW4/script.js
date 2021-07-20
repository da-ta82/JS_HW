// задание 1

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i]);
}

// задание 2

let arrNum = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arrNum.length; i ++) {
    if (arrNum[i] > -10 && arrNum[i] < -3 ) {
        console.log(arrNum[i]);
    }
}

// задание 3

let arrNew = [];

for (let i = 23; i <= 57; i ++) {
    arrNew.push (i);
}

console.log(arrNew);

let arrNew2 = [],
    i = 22;

while (i < 57) {
    i ++;
    arrNew2.push (i);
}

console.log(arrNew2);

let result = 0;

for (let i = 0; i < arrNew2.length; i++) {
    result += arrNew2[i];
}

console.log(result);

// задание 4

let arrStr = ['10', '20', '30', '50', '235', '3000'];

arrStr.sort();

for (let i = 0; i < arrStr.length; i ++) {
    
    let num = arrStr[i];
    let start = num[0];
    
    if (start == 1 || start == 2 || start == 5) {
    console.log(num);
    }
}

// задание 6

let arrRand = [-64, 17, -56, 143, 258];

arrRand.push(333);

let last;

last = arrRand[arrRand.length - 1];

console.log(`Массив: ${arrRand} и его последний элемент ${last}`);

// задание 7

let arrPromt = [],
    numbers;

while (numbers != '') {
    numbers = prompt('Напишите число');
    arrPromt.push(numbers);
}

arrPromt.pop();

arrPromt.sort(function (a, b) {
    return a - b;
});

console.log(arrPromt);

// задание 8

let arrRandom = [12, false, 'Текст', 4, 2, -5, 0];

arrRandom.reverse();
console.log(arrRandom);

// задание 5

let week = ['Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье'];

for (let i = 0; i <= week.length; i ++) {
    if (i >= 5) {
        document.write(week[i].bold());
    }   
    if (i < 5) {
        document.write(week[i]);
    }
}