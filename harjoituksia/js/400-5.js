// Osa 5: Taulukoiden perusteet:
const lampotilat = [18, 21, 19, 23];
for (celcius of lampotilat) {
    console.log(celcius);
}

const kaupungit = ['Turku', 'Oulu', 'Lahti'];
console.log(kaupungit[1]);

const osallistujat = ['Ella', 'Leevi', 'Nora', 'Elias'];
console.log(osallistujat.length);

let pisteet = [7, 8, 99, 6];
pisteet[2] = 9;
console.log(pisteet);

const jono = ['Aino', 'Mika'];
const uusipituus = jono.push('Sara');
console.log(jono, uusipituus);

const tilaukset = ['Kahvi', 'Mehu', 'Tee'];
const poistettu = tilaukset.pop();
console.log(tilaukset, poistettu);

const asiakkaat = ['Eero', 'Liisa'];
asiakkaat.unshift('Oona');
console.log(asiakkaat[0], asiakkaat[asiakkaat.length - 1]);

const jono2 = ['Mira', 'Olli', 'Pia'];
const palveltava = jono2.shift();
console.log(jono2, palveltava);

const tarvikkeet = ['Hiiri', 'Näyttö', 'Näppäimistö'];
console.log(tarvikkeet.includes('Näyttö'), tarvikkeet.includes('Kamera'));

const portit = ['A1', 'B2', 'C3', 'B2'];
console.log(portit.indexOf('B2'), portit.indexOf('D4'));

const vuorot = ['ma', 'ti', 'ke', 'to', 'pe', 'la', 'su'];
const lasu = vuorot.slice(5, 7);
console.log(vuorot, lasu);

const ohjelma = ['Avaus', 'Tauko', 'Päätös'];
ohjelma.splice(1, 1, 'Työpaja');
console.log(ohjelma);

const maksut = [12, 8, 15, 5];
let summa = 0;
for (maksu of maksut) {
    summa += maksu;
} console.log(summa);

const pisteet2 = [32, 75, 48, 91, 50];
let lukumaara = 0;
for (piste of pisteet2) {
    if (piste >= 50) {
        lukumaara++;
    }
} console.log(lukumaara);

const hinnat = [9, 18, 35, 12];
const yli20 = hinnat.find(hinta => hinta > 20);
console.log(yli20);

const nimet = ['Iida', 'Joel', 'Sofia'];
console.log(nimet.join('/'));

const sijoitukset = ['hopea', 'pronssi', 'kulta'];
const kopio = [...sijoitukset];
kopio.sort();
console.log(sijoitukset, kopio);

const tulokset = [18, 27, 15, 31, 24];
let paras = 0;
for (let i = 0; i < tulokset.length -1; i++) {
    if (tulokset[i] > paras) {
        paras = tulokset[i];
    }
} console.log(paras, tulokset.indexOf(paras));

const paikat = [['varattu', 'vapaa', 'varattu'], ['vapaa', 'vapaa', 'varattu']];
let vapaatpaikat = 0;
for (taulukko of paikat) {
    for (paikka of taulukko) {
        if (paikka === 'vapaa') {
            vapaatpaikat++;
        }
    }
} console.log(vapaatpaikat);

const ilmoittautuneet = ['Mira', 'Olli', 'Mira', 'Sami', 'Olli'];
function uniikitNimet(taulukko) {
    const uusitaulukko = [];
    for (nimi of taulukko) {
        if (!uusitaulukko.includes(nimi)) {
            uusitaulukko.push(nimi);
        }
    } return uusitaulukko;
} console.log(uniikitNimet(ilmoittautuneet));