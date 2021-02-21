class Cat {
    constructor(type) {
        console.log('INI KUCING');
        this.leg = 4
        this.type = type
    }
}

let cat = new Cat('anggora') // parameter disini adalah representasi block parameter yang ada di constructor
// ketika kita jalankan maka constructor terpanggil secara otomatis
console.log(cat);