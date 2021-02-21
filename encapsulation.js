class Dog {
    constructor(name, birthday, type) {
        this._name = name
        this._birthday = birthday
        this._type = type
        this._hungryLevel = 3
    }

    eat(preyNum) {
        this._digest(preyNum)
    }

    _digest(preyNum) {
        if (preyNum > 0) {
            this._hungryLevel = 0
        }
    }
    
    // getter
    get name(){
        return this._name
    }
    get birthday(){
        return this._birthday
    }
    get type(){
        return this._type
    }

    //setter
    set name(value) {
        this._name = value
    }
    set birthday(value) {
        this._birthday = value
    }
    set type(value) {
        this._type = value
    }
}

let heli = new Dog('heli', new Date('2018-02-17'), 'Bulldog')
heli.name = 'mamang'
console.log(heli);
heli.eat(10)
console.log(heli);

/*
bentuk implementasi private variable yang sesungguhnya pada js
*/

// class Person {
//     #name
//     constructor(name) {
//         this.#name = name
//     }

//     get name() {
//         return this.#name
//     }
// }

// let person1 = new Person('diaz')
// console.log(person1.#name);
