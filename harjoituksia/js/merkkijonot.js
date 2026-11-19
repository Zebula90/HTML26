// Harjoitus 1:
const nimi = "    Aino Virtanen    ";
console.log(`'${nimi}'`);
const pituus = nimi.trim().length;
console.log(pituus);
console.log(nimi.trim()[0]);
console.log(nimi.trim()[(pituus -1)]);
console.log(nimi.trim()
    .toLowerCase()
    .replaceAll(" ", "."));

// Harjoitus 2: 

const tiedosto = "raportti.PDF";
console.log(tiedosto.toLowerCase().endsWith('.pdf'));
console.log(tiedosto.slice(-4));
const data = ' HTML, CSS , JavaScript, React ';
const taulukko = data.trim().split(",");
for (kieli of taulukko) {
    kieli.trim();
}
console.log(taulukko);

// Harjoitus 3: 

function tekstianalysaattori(syöte) {
    const trimmattu = syöte.trim();
    const pituus = syöte.length;
    const sanat = syöte.split(" ")
    const sanamäärä = sanat.length;
    const hakusana = "tärkeä";
    console.log(trimmattu.toLowerCase());
    console.log(trimmattu.toUpperCase());
    console.log(trimmattu.slice(0, 20));
    console.log(`Syötteen pituus on ${pituus} merkkiä`)
    console.log(`Syötteessä on ${sanamäärä} sanaa.`)
    if (trimmattu.includes(hakusana.toLowerCase())) {
        console.log("Hakusana löytyi");
    } else {
        console.log("Hakusanaa ei löytynyt.");
    }
}

tekstianalysaattori(" Tässä on leipätekstiä. Tekstistä on poistettu alusta ja lopusta välimerkit ")


