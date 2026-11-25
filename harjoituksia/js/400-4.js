// Osa 4: Funktioiden perusteet:
function tervehdi() {
    console.log('Hei!');
} tervehdi()

function tervehdi_nimellä(nimi) {
    console.log(`Hei ${nimi}!`);
} tervehdi_nimellä('Aino');

function summa(a, b) {
    console.log(`${a + b}`);
} summa(4, 6)

const tuplaa = luku => luku * 2;
console.log(tuplaa(8));

const maailma = 'maailma';
function tervehdys_maailmalle() {
    console.log(`Hei ${maailma}!`);
}tervehdys_maailmalle()

function uusinimi(nimi) {
  console.log(`"Hei" + ${nimi} + "!"`);
}
uusinimi("Veera");

function erotus(a, b) {
    return a - b;
} console.log(erotus(15, 7));

const kolminkertainen = luku => luku * 3;
console.log(kolminkertainen(4));
console.log(kolminkertainen(9));

function kokonaishinta(hinta, maara = 1) {
    return hinta * maara;
} console.log(kokonaishinta(3));
console.log(kokonaishinta(3, 3));

function esittele(etunimi, sukunimi) {
    return `Tervetuloa ${etunimi} ${sukunimi}!`
} console.log(esittele('Joni', 'Tuovinen'));
console.log(esittele('Iina', 'Mäkipää'));

function tulo(a, b) {
    return a * b;
} console.log(tulo(7, 6));
console.log(tulo(-2, 5));

const nelio = luku => luku * luku;
const kuutio = luku => luku * luku * luku;
console.log(nelio(3), kuutio(3));

function tervehdys_valinnaisella_lopetuksella(nimi, lopetus = "!") {
    return `Hei ${nimi}${lopetus}`
} console.log(tervehdys_valinnaisella_lopetuksella("Joni"));
console.log(tervehdys_valinnaisella_lopetuksella("Joni", "?"));

function tulostaLuvut(alku, loppu) {
    for (let i = alku; i <= loppu; i++) {
        console.log(i);
    }
} console.log(tulostaLuvut(3, 7));

function lippu(nimi, ika) {
    if (ika >= 18) {
        return `Hei ${nimi}, pääset sisään`;
    } else {
        return `Hei ${nimi}, et pääse sisään`;
    }
} console.log(lippu('Joni', 18));
console.log(lippu('Joni', 17));

function jako(a, b) {
    if (b === 0) {
        return "Nollalla ei voi jakaa";
    } else {
        return a / b;
    }
} console.log(jako(20,4), jako(20,0));

const onParillinen = luku => luku % 2 === 0;
console.log(onParillinen(12));
console.log(onParillinen(13));

function laskeHinta(hinta, alennus = 0) {
    return hinta - (hinta * alennus);
}
function tulostaKuitti(nimi, hinta, alennus) {
    console.log(nimi,laskeHinta(hinta, alennus));
} tulostaKuitti('Viini', 80, 0.25)
tulostaKuitti('Viini', 80)