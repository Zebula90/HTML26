class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        return `This persons name is ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
    study() {
        return `${super.introduce()} and they study ${this.course}.`
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    teach() {
        return `${super.introduce()} and they teach ${this.subject}.`
    }
}

const henkilo = new Person('Mikko Pynnönen');
const opiskelija = new Student('Joni Tuovinen', 'JavaScript');
const opettaja = new Teacher('Jyri Lindroos', 'Programming');
console.log(henkilo.introduce(), opiskelija.study(), opettaja.teach());