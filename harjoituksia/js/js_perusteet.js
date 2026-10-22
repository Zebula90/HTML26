const nimi = "Joni Tuovinen"
let teksti ="JavaScript toimii!!"
// Lisätty muuttuja omalla nimellä, jonka jälkeen tulostetaan muuttuja
console.log(`${nimi}`);
console.log("JavaScript toimii!!");
console.log(`${nimi}` + " " + `${teksti}`);
// Harjoitus 2
const tuote = "Banaani";
const hinta = 10.5;
let maara = 4;
console.log(`${tuote}\n${maara} kpl\n${hinta*maara}`);

// Lumoakatemia tehtävät:
// Perusharjoitukset

// 1
console.log("Hei maailma!");
// 2
console.log(1+2);
// 3
console.log(2-1);
// 4
console.log(1*2);
// 5
console.log(1/2);
// 6
const celcius = 22;
console.log(celcius * 1.8 +32);
// 7
const fahrenheit = 71.6;
console.log((fahrenheit -32)/ 1.8);
// 8
const maili = 3;
console.log(maili * 1.609);
// 9
const kilometri = 5;
console.log(kilometri / 1.609);
// 10
const tuuma = 10;
console.log(tuuma * 2.54);
// 11
const sentti = 10;
console.log(sentti / 2.54);
// 12
const jaardi = 10;
console.log(jaardi *0.9144);
// 13
const metri = 10;
console.log(metri / 0.9144);
// 15
const sade = 3;
console.log(Math.PI * sade * sade);
// 16
const sivu = 2;
console.log(sivu * sivu);
// 17
const pituus = 3;
const korkeus = 4;
console.log(pituus * korkeus);

// If / else:
// 1
function suurempi_luku(a, b) {
    if  (a > b) {
        console.log(`A on suurempi`)
    } else if (b > a) {
        console.log(`B on suurempi luku`)
    } else  {
        console.log(`Luvut ovat yhtä suuret`)
    }
}
// 2
function suurin_luku(a, b, c)   {
    if (a > b && a > c) {
        console.log(`${a} on suurin luku.`);
    } else if   (b > a && b > c)    {
        console.log(`${b} on suurin luku.`)
    } else  {
        console.log(`${c} on suurin luku.`)
    }
}
// 3
function positiivinen_vai_negatiivinen(luku)    {
    if (luku > 0) {
        console.log(`${luku} on positiivinen.`)
    } else if (luku < 0)    {
        console.log(`${luku} on negatiivinen`)
    } else  {
        console.log(`luku on nolla.`)
    }
}
// 4
function onko_jaollinen(luku) {
    if  (luku % 5 === 0 || luku % 11 === 0) {
        console.log("Luku on viidellä tai yhdellätoista jaollinen.")
    } else {
        console.log("Luku ei ole viidellä eikä yhdellätoista jaollinen.")
    }
}
// 5
function karkausvuosi(vuosiluku) {
    if (vuosiluku % 400 === 0) {
        console.log(`${vuosiluku} on karkausvuosi.`);
    } else if  (vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) {
        console.log(`${vuosiluku} on karkausvuosi.`);
    } else  {
        console.log(`${vuosiluku} ei ole karkausvuosi.`);
    }
}
// 6
function onko_parillinen(luku)  {
    if  (luku % 2 === 0) {
        console.log(`${luku} on parillinen.`);
    } else  {
        console.log(`${luku} on pariton.`);
    }
}
// 11
function voitollinen_vai_tappiollinen(myynti, ostokulut)    {
    if (myynti > ostokulut) {
        console.log(`${myynti - ostokulut} Tehtiin voittoa!`);
    } else {
        console.log(`${ostokulut - myynti} Tehtiin tappiota. =(`);
    }
}
// 12
function arvosana(Ma, KeFy, Ai, Ru, En) {
    if (Ma + KeFy + Ai + Ru + En > 90) {
        console.log("K5");
    } else if (Ma + KeFy + Ai + Ru + En > 80) {
        console.log("H4");
    } else if (Ma + KeFy + Ai + Ru + En > 70) {
        console.log("H3");
    } else if (Ma + KeFy + Ai + Ru + En > 60) {
        console.log("T2");
    } else if (Ma + KeFy + Ai + Ru + En > 50) {
        console.log("T1");
    } else {
        console.log("Hylätty.")
    }
}
// 14
function onko_sama_numero(luku1, luku2) {
    if  (luku1 === luku2)   {
        console.log(`Luvut ovat samat.`);
    } else {
        console.log(`Luvut eivät ole samat.`);
    }
}
// 15
function ikatarkistus(ika) {
    if (ika >= 18)  {
        console.log(`Olet täysi-ikäinen.`);
    } else {
        console.log(`Olet ala-ikäinen.`);
    }
}
// 17
// 18
function onko_piirrettävä_kolmio(ensimmäisen_kulman_aste, toisen_kulman_aste, kolmannen_kulman_aste) {
    if (ensimmäisen_kulman_aste + toisen_kulman_aste + kolmannen_kulman_aste === 180) {
        console.log(`Kolmio on piirrettävissä.`)
    } else   {
        console.log(`Kolmio ei ole piirrettävissä.`)
    }
}
