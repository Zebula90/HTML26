//Osa 3: Silmukat ja toistot:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 4; i++) {
    console.log("Hei!")
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}

for (let i = 5; i > 0; i--) {
    console.log(i);
} console.log("Lähtö!");

let i = 1;
while (i < 5) {
    console.log(i);
    i++;
}

const boolean = false;
do {
    console.log("Teksti");
} while (boolean === true);


let summa = 0;
for (let luku = 1; luku < 11; luku++) {
    summa += luku
} console.log(summa);

for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 1; i < 7; i++) {
    if (i === 3) {
        continue
    } else {
        console.log(i);
    }
}

for (let i = 1; i < 21; i++) {
    if (i === 7) {
        break
    } else {
        console.log(i);
    }
}

for (let i = 3; i < 16; i += 3) {
    console.log(i);
}

let luku = 8;
while (luku >= 0) {
    console.log(luku);
    luku--;
}

for (let i = 1; i < 51; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

const tervehtys = "Hei";
for (let i = 1; i < 5; i++) {
    console.log(tervehtys);
}

const nelja = 4;
for (let i = 1; i <= 10; i++) {
    console.log(`${nelja * i}`);
}

let summa2 = 0;
for (let i = 2; i <= 20; i += 2) {
    summa2 += i;
} console.log(summa2);

for (let i = 20; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i);
        break;
    }
}

let määrä = 0;
for (let i = 1; i <= 30; i++) {
    if (i > 20 && i % 2 === 0) {
        määrä++;
    }
} console.log(määrä);

let summat = 0;
for (let i = 1; i <= 20; i++) {
    summat += i
}
console.log(`${summat / 20}`);