// Osa 1: JavaScriptin perusteet:
console.log("HTML");
console.log("JavaScript");

// Tämä ohjelma tulostaa tervetuloa
console.log("Tervetuloa!!");

const etunimi = "Joni";
const sukunimi = "Tuovinen"
console.log(`${etunimi} ${sukunimi}`);

const tuotteenHinta = 14.90;
console.log(tuotteenHinta);

console.log(typeof "42");
console.log(typeof 42);

const valmis = true;
const kesken = false;
console.log(`${valmis} ${kesken}`);

let vastaus = "";
const valinta = null;
console.log(`${vastaus} ${valinta}`);

const luku1 = 12;
const luku2 = 4;
console.log(`${luku1 + luku2}`);
console.log(`${luku1 - luku2}`);
console.log(`${luku1 * luku2}`);
console.log(`${luku1 / luku2}`);

let saldo = 50;
saldo += 20;
saldo -= 15;
console.log(`${saldo}`);

console.log(2 + 3);
console.log("2" + 3);
// Ensimmäinen tulostaa laskutoimituksen, toinen lisää kolmosen merkkijonoon "2".

const luku = "12";
console.log(`${Number(luku) + 8}`);

const nimi = "Aino";
const ika = 19;
console.log(`${nimi} on ${ika} vuotta.`);

let tuote = 80;
tuote -= 15;
console.log(tuote);

const matkalippu = 3.2;
console.log(`Yhden matkalipun hinta on 3.20e. Neljä matkalippua on 4 * 3.20, eli ${matkalippu * 4}`);

const nimi2 = 'Mira';
console.log(nimi2);

console.log('Hei');

const kyna = 1.50;
const vihko = 2;
console.log(`${(2 * kyna) + (3 * vihko)}`);

const koe1 = 8;
const koe2 = 9;
const koe3 = 10;
console.log(`${(koe1 + koe2 + koe3) / 3}`);

const pisteet = 10;
console.log(`${(((pisteet + 5) * 2) - 4)}`);

const tuotenimi = "Adidas";
const yksikköhinta = 24.99;
const määrä = 2;
const toimitusmaksu = 9.99;
console.log(`${tuotenimi} ${määrä} kpl`);
console.log(`${yksikköhinta} Yksikköhinta, toimitusmaksu ${toimitusmaksu}`);
console.log(`Yhteensä ${(yksikköhinta * määrä) + toimitusmaksu}e`);





