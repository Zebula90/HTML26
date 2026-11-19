// Osa 2: Ehdot ja boolean-logiikka:

console.log(8 < 12);
console.log(5 === "5");
console.log(6 !== 9);

const ika = 17;
if (ika >= 18) {
    console.log("Henkilö on täysi-ikäinen");
} else {
    console.log("Henkilö on ala-ikäinen");
}

const pistemäärä = 50;
console.log(pistemäärä >= 50);

const pisteet = 92;
if (pisteet >= 90) {
    console.log("Kiitettävä!");
} else if (pisteet >= 70) {
    console.log("Hyvä");
} else {
    console.log("Harjoittele");
}

const kayttajan_ika = 20;
const lupa = false;
if (kayttajan_ika >= 18 && lupa === true) {
    console.log("Pääsy sallittu");
} else {
    console.log("Pääsy kielletty");
}

const opiskelija = false;
const eläkeläinen = true;
if (opiskelija || eläkeläinen) {
    console.log("Alennus myönnetty");
} else {
    console.log("Ei alennusta");
}

const kirjautunut = false;
if (!kirjautunut) {
    console.log("Kirjaudu sisään")
} 

const luku = 12;
const tulos = luku % 2 === 0 ? 'parillinen' : 'pariton';
console.log(tulos);

const paiva = 2;
switch (paiva) {
    case 1: console.log("Maanantai");
    break;
    case 2: console.log("Tiistai");
    break;
}

const nimi = "";
if (nimi === "") {
    console.log("Nimi puuttuu");
} else {
    console.log("Nimi ei puutu");
}

const etunimi = "";
const kayttaja = etunimi || "vieras";
console.log(kayttaja);

