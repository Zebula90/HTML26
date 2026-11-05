// Harjoitus 1:
const tuotteet = [
  { nimi: 'Hiiri', hinta: 25, saldo: 4 },
  { nimi: 'Näyttö', hinta: 240, saldo: 0 },
  { nimi: 'Kaapeli', hinta: 12, saldo: 7 }
];
const tuotteiden_nimet = tuotteet
    .map(n => n.nimi)
console.log(tuotteiden_nimet);
const alvillinen_hinta = tuotteet
    .map(h => h.hinta * 1.255)
console.log(alvillinen_hinta);

// Harjoitus 2:
const pisteet = [60, 80, 95, 70, 85, 90];
const summa = pisteet.reduce((s, p) => s + p, 0);
console.log(summa);
console.log(pisteet.some(p => p >=95));
console.log(pisteet.every(p => p > 0 && p <= 100));

// Harjoitus 3:
const opiskelijat = [
  { id: 1, nimi: 'Aino', pisteet: 82, aktiivinen: true },
  { id: 2, nimi: 'Mika', pisteet: 64, aktiivinen: false },
  { id: 3, nimi: 'Sara', pisteet: 78, aktiivinen: true }
];
const aktiiviset = opiskelijat
    console.log(aktiiviset.filter(o => o.aktiivinen));
    for (const opiskelija of aktiiviset) {
        if opiskelija.aktiivinen === true {
            console.log(`${opiskelija.nimi} - pisteet ${opiskelija.pisteet}`);
        }
            
    }