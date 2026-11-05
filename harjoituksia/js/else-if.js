// Harjoitus 1:
let ika = 5;
if (ika < 13) {
    console.log("Lapsi");
} else if (ika <= 17) {
    console.log("Nuori");
} else {
    console.log("Aikuinen");
}
// Harjoitus 2:
let kirjautunut = 1;
let  admin = 1;
let opettaja = 1;

if (kirjautunut) {
    if (admin && opettaja) {
        console.log("Muokkausoikeus");
    } else {
        console.log("Pelkät katseluoikeudet");
    }
} else {
    console.log("Kirjaudu sisään");
}
// Harjoitus 1: Kertotaulu:
function looppi() {
    for (let i = 1; i > 10; i++) {
        console.log(`${i} * 7 = ${i * 7}`);
    }
    }

// 3 5 7 8 9 16 jätetään väliin