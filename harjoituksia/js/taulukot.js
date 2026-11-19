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
        if (opiskelija.aktiivinen === true) {
            console.log(`${opiskelija.nimi} - pisteet ${opiskelija.pisteet}`);
        }     
    }
const keskiarvo = aktiiviset
    .reduce((summa, pisteet) => summa + pisteet, 0);
    if (keskiarvo.length > 0) {
        console.log(summa / 3);
    }
    
// Pinja-harjoituksia osa 6:
const luvut = [2,4,6];
console.log(luvut.map(luku => luku * 2));

const luvut = [4,12,8,20];
console.log(luvut.filter(luku => luku >= 10));

const luvut = [2, 8, 15, 20];
console.log(luvut.find(luku => luku >10));

const luvut = [4, -2, 8];
console.log(luvut.some(luku => luku < 0));

const luvut = [2, 3, 5];
const summa = luvut.reduce((summa, luku) => summa + luku, 0);
console.log(summa);

const hinnat = [20, 40, 80];
console.log(hinnat.map(luku => luku *1.1));

const nimet =  ['Li','Anna','Mikko','Eevi'];
console.log(nimet.filter(nimi => nimi.length >= 5));

const totuudet = [false,false,true,false];
console.log(totuudet.find(arvo => arvo === true));

const pisteet = [67,82,49,90];
console.log(pisteet.every(luku => luku >= 50));

const ostoskori = [12.5,9.9,3.6];
const summa = ostoskori.reduce((summa, kori) => summa + kori, 0);
console.log(summa);

const nimet = ['Veera','Aino','Oona'];
console.log(nimet.sort());

const luvut = [12,3,25,8];
luvut.sort((a, b) => a - b);
console.log(luvut.reverse());

const nimet = ['Aino','Sara','Mika'];
console.log(nimet.indexOf("Sara"));

const tuotteet = ['tee','mehu','kahvi'];
console.log(tuotteet.includes("kahvi"));

const lampotilat = [14,18,17,21,20];
const keskiarvo = lampotilat.reduce((summa, aste) => summa + aste, 0);
console.log(keskiarvo / lampotilat.length);

const opiskelijat = [{nimi:'Aino',pisteet:75},{nimi:'Mika',pisteet:45},{nimi:'Sara',pisteet:88}];
const hyvaksytyt = opiskelijat.filter(p => p.pisteet >= 50).map(n => n.nimi);
console.log(hyvaksytyt);

const hinnat = [14,29,8,41];
const suurin = hinnat.reduce

const luvut = [1,2,3,4,5,6,7,8];
const parilliset = luvut.filter(pl => pl % 2 === 0); 
const parittomat = luvut.filter(pt => pt % 2 !==0); 
console.log([...parilliset,...parittomat]);

const luvut = [12,5,18,7,20,9];
const suuret = luvut.filter(luku => luku > 10);
const summa = suuret.reduce((s, l) => s + l, 0);
console.log(`Lukujen määrä joiden arvo yli 10: ${suuret.length}\nYli 10 arvoisten lukujen summa: ${summa}\nLukujen keskiarvo: ${summa / suuret.length} `);