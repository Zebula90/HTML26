class Student {
    constructor(nimi, pisteet = 0) {
        this.nimi = nimi;
        this.pisteet = pisteet;
    }
    addPoints(amount) {
        if (amount > 0) {
            return this.pisteet += amount;
        }
    }
    greet() {
        return `Hei ${this.nimi}!`;
    }
    get grade() {
        if (this.pisteet > 0) {
            return 'Hyväksytty';
        } else {
            return 'Hylätty';
        }
    }
}

const joni = new Student('Joni Tuovinen');
const jyri = new Student('Jyri Lindroos');
const mikko = new Student('Mikko Pynnönen');
jyri.addPoints(2);
mikko.addPoints(1);
console.log(joni.grade, jyri.grade, mikko.grade);
console.log(joni.greet(), jyri.greet(), mikko.greet())
const students = [
  new Student("Aino", 42),
  new Student("Pekka", 18),
  new Student("Sara", 55)
];

const active = students.filter(s => s.pisteet >= 20);
console.log(active);