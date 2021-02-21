class Cat {
    constructor(type) {
        this.leg = 4
        this.type = type
    }

    showLegsAndType() {
        // console.log(`Ini ada jumlah leg ${this.leg} dan ini tipenya ${this.type}`)
        console.log(`Ini ada jumlah leg ${leg} dan ini tipenya ${type}`)
        /*
        ketika kita memanggil variable dari class tanpa menggunakan keyword this maka akan terjadi
        error.
        */
    }
}

let cat = new Cat('anggora')
cat.showLegsAndType()