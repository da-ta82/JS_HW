// задание 1

for (let a = 0; a < 51; a ++) {
    console.log(a);
}

for (let b = 35; b >= 8; b --) {
    console.log(b);
}

// задание 2 - не совсем его поняла, числа сразу выводятся в столбец

for (let c = 89; c >= 11; c --) {
    console.log(c);
}

// задание 3

let d = 100,
    sum = 0;

for (let i = 1; i <= d; i ++) {
    sum += i;
}

console.log(sum);

// задание 4

let f = 5;

for (let i = 1; i <= f; i ++) {
    sum = 0;
    for (let j = 1; j <= i; j ++) {
        sum += j;
    }
    console.log('sum ' + i  + '=' + sum);
}

// задание 5

for (let h = 8; h <= 56; h ++) {
    if (h % 2 != 0) continue;

    console.log(h);
}

// задание 6

let l = 2,
    m = 1;

for (; l < 11;) {

    console.log('Таблица умножения на ' + l)

    for (; m < 11; m ++) {
        mult = l * m;
    
    console.log(l + ' * ' + m + ' = ' + mult);
    };

    l = ++ l;
    m = 1;
}
// test

// задание 7

let num = 1000,
    i = 0;

while (num > 50) {
    num /= 2;
    i ++;
}

console.log(`Получается число "${num}" и количество итераций - ${i}`);