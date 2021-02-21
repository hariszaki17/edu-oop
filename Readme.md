## Table of Content
1. [The Object Oriented Programming](#The-Object-Oriented-Programming)
1. [OOP vs Object Literal in Javascript](#OOP-vs-Object-Literal-in-Javascript)
1. [The Class Anatomy](#The-Class-Anatomy)
1. [OOP Characteristics](#OOP-Characteristics)
1. [References](#references)

## The Object Oriented Programming
OOP adalah salah satu jenis paradigma, acuan atau pendekatan dalama menulis sebuah kode program. OOP mempunyai prinsip dimana ketika kita ingin menyelesaikan masalah kita harus memetakan masalah tersebut ke dalam objek. Dalam proses pemetaan disini, objek pada bahasa pemrogramman didefinisikan sebagai tempat menyimpan data yang mana data ini unik dan indentik terhadap objek yang ada di dunia nyata. 

Dengan mangadopsi paradigma OOP kita bisa memperoleh beberapa manfaat diantaranya adalah:

* ***Modular*** => karena masalah lah dipetakan ke dalam objek yang lebih kecil kita dapat implementasi code modular dengan sangat mudah.
* ***Reusability*** => objek yang kita sudah petakan dapat kita gunakan kapanpun dibutuhkan.
* ***Effective problem solving*** => OOP memiliki sifat natural karena memetakan masalah yang ada di dunia nyata secara langsung ke dalam objek. Hal ini membuat lebih efektif karena malah dimisalkan langsung seperti apa yang terjadi di dunia nyata.
* ***Easy to maintain*** => dengan konsep modular dan pemecahan menjadi objek kecil, kita dapat dengan mudah mengidentifikasi masalah yang terjadi.
* ***More Secure*** => Karena data yang digunakan terikat pada objek membuat data lebih aman dan harus melalui metode khusus untuk menggunakannya jika diakses dari luar objek.
* ***Many More***.

## OOP vs Object Literal in Javascript
Sebelumnya kita sudah sering menggunakan objek literal untuk menyimpan data. Jika kalian bertanya apakah dengan menggunakan object literal kita sudah mengimpplementasi OOP? jawabannya adalah belum. Terdapat perbedaan istilah objek yang kita akan gunakan untuk implementasi OOP dengan object literal yang biasa kita gunakan sebelumnya. OOP menggunakan konsep ***Class and Instances*** sementara object litreal tidak.

Terkait konsep ***Class and Instances***, kita akan membahas terlebuh dahulu class dan implementasinya pada javascript.

Bentuk kode pada javascript yang merepresentasikan class OOP pada javascript.
```javascript
// class object
class Cat {
    constructor() {
        this.leg = 4
    }
}

// object litereal
let cat = {
    leg: 4
}
console.log(cat)
// { leg: 4 }
```

Class di sini bersifat sebagai blueprint/rancangan yang tidak bisa langsung digunakan seperti object literal. Untuk menciptakan data object seperti object literal kita harus terlebih dahulu melakuakan metode ***Instantiate*** untuk membuat ***Instance***(object) dari class yang kita sudah definisikan sebelumnya.

Contoh kode untuk melakukan ***Instantiate***.
```javascript
let cat = new Cat() // diambil dari class Cat
let cat2 = new Cat() // diambil dari class Cat
console.log(cat) 
console.log(cat2)
// cat dan cat2 adalah object (instance) yang berbeda

// Cat { leg: 4 }
```
Keyword ***new*** berfungsi untuk membuat instance dari cat yang mana luarannya adalah sebuah object yang hampir mirip dengan object literal hanya saja terdapat prefix Cat yang mengindikasikan bahwa object ini dihasilkan dari blueprint class Cat. Hal yang menarik dari konsep ***Class and Instance*** adalah ketika kita melakukan ***Instantiate***  seolah-olah kita mencetak(membuat object baru) menggunakan blueprint yang sudah kita buat.

## The Class Anatomy

Kita mungkin sedikit janggal dengan deklarasi class di atas karena banyak keyword baru yang sebelumnya tidak pernah kita pakai. Berikut ini adalah penjelasan mengenai anatomy sintaks untuk membuat sebuah class.

```javascript
class Cat {
    constructor(type) {
        this.leg = 4
        this.type = type
    }

    showLegs() {
        console.log(this.leg)
    }

    mew() {
        console.log('Miauwwwww! Miauwwwww!')
    }
}
```

* ***Class keyword*** => class keyword kita gunakan untuk mendefinisikan class.
* ***Class name*** => memberikan nama(variable) untuk class yang dideklarasikan.
* ***Constructor*** => sebuah method yang dipanggil pertama kali ketika kita melakukan ***Instantiate*** dari class tersebut (check constructor.js file)
* ***this keyword*** => this keyword berfungsi untuk pengalamatan data pada sebuah object (check thisKeyword.js). contoh:
```javascript
this.leg = 4
/* this.leg menunjukan bahwa variable leg milik class Cat, dan deklarasi variable pada class
sedikit berbeda karena tidak memerlukan keyword const, let atau var.
*/
```
* ***Class method*** => sebuah method yang terikat pada class. penggunaan class method juga salah satu implementasi object behavior pada OOP. Berikut terdapat method mew() karena kucing memiliki kebiasaan mengeong.
```javascript
mew() {
    console.log('Miauwwwww! Miauwwwww!')
}
```

## OOP Characteristics
OOP memiliki beberapa karakteristik atau prinsip diantaranya adalah:

* ***Abstraction*** => Berdasarkan dari namanya kita sudah tau bahwa tujuan dari karakteristik ini adalah abstraksi. Abstraksi yang dimaksud adalah bagaimana kita menyembuniykan kompleksitas logic program dengan membuat function/method untuk mengerjakan suatu hal.
* ***Inheritance*** => Seperti dunia nyata, terkadang object yang kita petakan memiliki ikatan ***parent and child**. Ikatan yang dimaksud adalah bagaimana suatu object mewarisi behaviours(data, state, method, function) kepada object lainnya.
* ***Encapsulation*** => Encapsulation memiliki fungsi untuk hanya menekspose informasi yang dibutuhkan saja agar bisa diakses oleh program lain(di luar class itu sendiri).
* ***Polymorphisme*** => Polymorph memiliki arti banyak bentuk. Pada pemrogramman artinya adalah dimana satu nama method digunakan oleh beberapa class dan class yang menggunakannya dapat mendefinisikan ulang method tersebut.

Untuk lebih jelasnya kita akan membahas satu persatu karakteristik serta memberikan contoh implementasinya di javascript.

[OOP Analogy](https://www.educative.io/blog/object-oriented-programming)

***Abstraction*** 
```javascript
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
```
Karena abstraction memiliki prinsip yaitu hanya menspesifikasikan apa saja action yang dapat dilakukan bukan bagaimana action itu dilakukan. Bisa kita lihat di atas terdapat property age yang mana property ini adalah hasil selisih antara birthday dan hari ini. Jika kita ingin memanggil age kita tidak perlu lagi menuliskan logic untuk menghitung age tersebut melainkan hanya butuh memanggil property age saja karena sudah diabstraksikan menggunakan calculateAge.

***Encapsulation***
```javascript
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
            this._hungerLevel = 0
        }
    }

    // getter
    get name(){
        return this._name
    }
    get type(){
        return this._type
    }


    //setter
    set name(value) {
        this._name = value
    }
    set type(value) {
        this._type = value
    }
}
```
Ide dari karakteristik ini sejatinya adalah lanjutan dari karakteristik abstraction. Jika sebelumnya absctraction digunakan untuk menghadirkan apa saja action yang dapat dilakukan bukan cara action dilakukan, encapsulation memiliki tujuan untuk melakukan proteksi agar informasi dan data hanya bisa diakses oleh metode khusus dan data yang dapat diakses pun terbatas(tertentu saja). Kita bisa lihat bahwa prefix "_" menggambarkan bahwa variable tersebut bersifat private atau hanya bisa diakses dari dalam class saja. Serta method digest juga tidak boleh diekspose ke luar karena digest ini hanya bagian dari method eat jadi user tidak perlu menggunakan digest secara manual cukup panggil eat() saja.

Untuk variable private kita menggunakan metode khusus untuk memanggilnya. Metode tersebut adalah ***accessor*** dan ***mutator***. Accessor pada javascript direpresentasikan dengan ***get*** keyword sedangkan untuk mutator direpresentasi dengan ***set*** keyword. Keyword ***get*** bekerja dengan cara melakukan bind(mengikat) sebuah object property ke function yang akan dipanggil jika object property itu dicari(dipanggil), sedangkan untuk keyword ***set*** hampir sama dengan ***get*** hanya saja ia akan bekerja jika terdapat percobaan untuk mengubah object property.

***Inheritance***
```javascript
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
```

Inheritance merupakan sebuah karakteristik yang sangat unik, kita bisa lihat salah satu fungsinya bagaimana satu class dapat mewarisi sifat/property untuk class lainnya. Biasanya karakteristik ini digunakan untuk mendefinisikan sebuah ikatan, contohnya adalah kode di atas. Kita bisa lihat bahwa kucing termasuk kedalam family felidae dan lion pun sama karenanya kedua class ini dapat mewarisi atau menggunakan apapun yang terdapat pada class felidae.

Pada javascript untuk implementasi inheritance dibutuhkan keyword ***extends*** yang mana setelah keyword ini diikut nama class sebagai parentnya(pewaris sifat). Menariknya ketika kita sudah mendefinisikan ikatan inheritance pada sebuah class, maka kita pun bisa juga untuk memanggil constructor pada class parentnya. Cara memanggil constructor parent dapat dilakukan dengan cara memanggil keyword ***super()*** dan dapat kita isi dengan value sesuai yang telah didefinisikan pada parameter constructornya. Pemanggilan ini cukup penting karena jika pada parent terdapat property yang diisi melalui constructor, maka akan memiliki nilai undefined jika kita tidak mengisi keyword ***super()*** pada child classnya.

***Polymorphism***
```javascript
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
```
Polymorphism adalah bagaimana satu method dengan nama yang sama dapat memilki task yang berbeda tergantung dari class apa yang mengimplementasikannya. Di atas terdapat class felidae yang mana memiliki method ***speak()***, jika kita bayangkan child class dari felidae juga memiliki behaviour yang sama, hanya saja tiap child memiliki ciri khas masing-masing dalam berbicara. Kucing memiliki cara berbicara dengan mengeog sedangkan singa memiliki cara berbicara mengaum.

Terdapat konsep yang dinamakan ***Overriding*** pada karakteristik ini, overriding bertujuan untuk menggantikan behaviour parent dengan behavour child dengan nama yang sama hanya saja cara kerjanya yang berbeda. Jika method ***speak()*** dipanggil pada child maka implementasi method pada child yang akan terpanggil bukan implementasi dari parent yang akan dipanggil.

Sebenarnya terdapat satu lagi konsep yang dimiliki oleh karaktersitik ini yaitu ***Overloading***, hanya saja javascript tidak mendukung penuh fitur dan prinsip-prinsip pada OOP. ***Overloading*** itu sendiri adalah bagaimana satu nama method memiliki banyak jenis implementasi/task/cara kerja yang berbeda jika jumlah parameter yang dimasukan berbeda. Contoh dari konsep ***Overloading*** dapat digambarkan seperti berkut.

<img src="https://3.bp.blogspot.com/-T_rzdCAe3p4/W8ni6-U1_1I/AAAAAAAAA2Q/hkHbGidFqDQBVaeLbQPH7uGDesvB2mFLACPcBGAYYCw/s640/Method%2BOverloading.png"/>

## References
https://www.internalpointers.com/post/object-literals-vs-constructors-javascript

https://medium.com/easyread/penerapan-oop-dalam-javascript-part-1-98ed3a427e77

https://medium.com/better-programming/object-oriented-programming-in-javascript-b3bda28d3e81

https://medium.com/@node.js/object-oriented-programming-with-javascript-e6167c42e5f4

https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/

https://www.educative.io/blog/object-oriented-programming