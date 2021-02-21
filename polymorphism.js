class Felidae {
    constructor(name) {
        this.name = name
        this.leg = 4
    }
    walk() {
        console.log(`Walking with ${this.leg} legs`);
    }
    speak() {
        console.log('zzzzz');
    }
    eat(food) {
        console.log(`I am currently wating ${food}`);
    }
}

class Cat extends Felidae {
    constructor(name) {
        super(name)
        this.food = "fish"
    }

    speak() {
        console.log("miauwwww");
    }

    eat() {
        super.eat(this.food)
    }

    beCompanyWithHuman() {
        console.log(`Hi my name is ${this.name} let's be company`);
    }
}

class Lion extends Felidae {
    constructor(name) {
        super(name)
        this.food = "deer"
    }

    speak() {
        console.log("roarrr");
    }
}

let cat = new Cat("bob")
cat.walk()
cat.beCompanyWithHuman()
cat.speak()
cat.eat()

let lion = new Lion("simba")
lion.walk()
lion.speak()