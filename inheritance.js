class Felidae {
    constructor(name) {
        this.name = name
        this.leg = 4
    }
    walk() {
        console.log(`Walking with ${this.leg} legs`);
    }
}

class Cat extends Felidae {
    constructor(name) {
        super(name)
        this.food = "fish"
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
}

let cat = new Cat("bob")
cat.walk()
cat.beCompanyWithHuman()

let lion = new Lion("simba")
lion.walk()