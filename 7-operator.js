// * =======================================================
// *                 ARITMETIK OPERATORLER
// * =======================================================

console.log(" **** Operators ****")

const cola = 20
const gumm = 5
const biscuits = 15

const totalPrice = cola + gumm + biscuits

// totalPrice++ //? Hata

console.log("TOTAL PRICE:", totalPrice)

//? + operatoru String Concatination islemi de yapar.
console.log("TOTAL PRICE:" + totalPrice) //? String Concatination

const comments = totalPrice + " TL"
console.log(comments)

const commets = 50 + 40 + " TL"
console.log(commets)

const firstName = "Ahmet"
const lastName = "Can"
console.log(firstName + " " + lastName)

const s1 = 5,
  s2 = "4",
  s3 = "three"

console.log(s1 + s2) //? 54
console.log(s1 - s2) //? 1
console.log(s1 - s3) //? NaN (Not A Number)
//! String ifadeyi number a cevirmeye calisti fakat mumkun olmadigi icin NaN dondurdu.

const difference = s1 - s3
console.log(difference, typeof NaN) //? NaN'in data type'ı number'dir.

//* Bir islemin sonucunun NaN olup olmadigini anlamak icin isNaN() fonksiyonu kullanilabilir.
console.log(isNaN(difference)) //?true

//? Ornek
//?-----------------------
const yearOfBirth = 1920
const name = "John"
console.log(name + " is " + (2022 - yearOfBirth) + " years old")

//* Sistem tarih ve saat bilgileri icin Date() kullanilabilir.
// const date = new Date()
// console.log(date)

console.log(
  name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
)