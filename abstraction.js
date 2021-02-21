class Dog {
    constructor(name, birthday) {
        this.name = name
        this.birthday = birthday
    }

    getAge() {
        if (this.birthday) {
            let ageDiff = Date.now() - this.birthday.getTime()
            let ageDate = new Date(ageDiff)
            return ageDate.getUTCFullYear() - 1970
        } else {
            return null
        }
    }
}

let heli = new Dog('heli', new Date('2018-02-17'))

console.log(heli.getAge());