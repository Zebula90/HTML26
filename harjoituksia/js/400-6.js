// Osa 6: Taulukkometodit ja datan käsittely:
const luvut = [2, 4, 6];
console.log(luvut.map(luku => luku * 2));

const luvut2 = [4, 12, 8, 20];
console.log(luvut2.filter(i => i >= 10));

const luvut3 = [2, 8, 15, 20];
console.log(luvut3.find(i => i > 10));

const luvut4 = [4, -2, 8];
for (luku of luvut4) {
    if (luku < 0) {
        console.log('Löytyy negatiivinen luku');
    } 
}

const luvut5 = [2, 3, 5];
console.log(luvut5.reduce((summa, luku) => summa + luku, 0));

const hinnat = [20, 40, 80];
console.log(hinnat.map(luku => luku * 0.9));

const nimet = ['li', 'anna', 'mikko', 'leevi'];
console.log(nimet.filter(i => i.length >= 5));

const paikat = ['false', 'false', 'true', 'false'];
console.log(paikat.indexOf('true'));

const pisteet = [67,82,49,90];
console.log(pisteet.every(i => i >= 50));

const ostoskori = [12.5,9.9,3.6];
console.log(ostoskori.reduce((summa, luku) => summa + luku, 0));

const nimet2 = ['Veera','Aino','Oona'];
console.log(nimet2.sort());

const numerot = [12,3,25,8];
console.log(numerot.sort((a, b) => b-a));

const taulukko = ['Aino','Sara','Mika'];
console.log(taulukko.indexOf('Sara'));

const tuotteet = ['tee','mehu','kahvi'];
console.log(tuotteet.includes('kahvi'));

const lampotilat = [14,18,17,21,20];
console.log(lampotilat.reduce((summa, luku) => (summa + luku) / lampotilat.length, 0));