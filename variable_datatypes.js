console.log("*****Data Types*****");

//* const ve let ECMAScripttr geldi . var zaten hep vardı.//*
//?=====================CONST======================?//

const fs = "cohort 13";
console.log(fs);

const sayı = 20;
console.log(sayı);
console.log(typeof sayı);

const sayı1 = "33"; //! tırnak içindekiler string demektir//
console.log(sayı1);
console.log(typeof sayı1);

// const pi;  olmaz işlemez
// pi =3,14

const s1 = "hello";
const s2 = "fs13";
console.log(s1 + s2);

const n1 = 5;
const n2 = "10";
console.log(n1 + n2); //? string concationation

//! Ayni alan (scope) icerisinde ayni isimle yeniden degisken tanimlanamaz.
// const n1 = 5;

// eğer birsi string ise default string olarak kabul eder ve yan yana yazar.(toplama yapmaz.)

//? *******************LET********************?//
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let div1 = "javascript";
console.log(div1);

div1 = "java";
console.log(div1);

let cohort;
console.log(cohort); //undefined

cohort = 3;
console.log(typeof cohort); //? number

// let cohort = "FS13"; //!SyntaxError: Identifier 'cohort' has already been declared (at app.js:60:5)
//! Ayni alan (scope) icerisinde ayni isimle yeniden degisken tanimlanamaz.

let num1 = 5;
let num2 = 3;
let result = num1 + num2;
console.log(++result);
console.log(result);

count = 55;
console.log(count);
console.log(typeof count);
// ! js ilk kez gormus olduğu count u bir değişken olarak tanımladı.
//!var olarak tanımladı

//? ========================VAR========================//?

var x = 11;
console.log(x);
//! blok dışları global yerlerdir

{
  //! burası LOCAL bir yer
  let a = 2;
  const b = 2;
  console.log(a, b);
}
//! a ve b bu alanda tanımlı değildir.sadece localde tanımlıdır.

{
  var c = 99;
  console.log(c);
}
console.log(c);
//? var heryerde var. 


//* global değişkenler
var var1 =3
let let1 =4
console.log(var1,let1);
{
    var var1=33
    let let1=44
    console.log(var1,let1);
}
//? lokakaller lokallerle globaller globallerle alakalı.

