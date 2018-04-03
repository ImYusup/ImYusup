/**
================================
Array Mastery: Substract Evens and Odds
================================

[INSTRUKSI]

Function substractEvenOdd akan menerima satu parameter berupa array of number.
Kelompokkanlah hasil pengurangan bilangan yang genap dan bilangan yang ganjil dan
return array 2 dimensi di mana array pertama merupakan hasil pengurangan angka genap dan
array selanjutnya adalah hasil pengurangan angka ganjil

Contoh:
input: [3, 5, 7, 8]
output: [[8], [-9]]

input: [14, 4, 6, 2]
output: [[2], [0]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/
/*
1. Membuat tampung untuk nilai array ganjil dan tampung nilai array ganjil tersebut ke dalam tampung nilai.
2. Membuat tampung untuk nilai array genap dan tampung nilai array genap tersebut ke dalam tampung nilai.
3. Membuat nilai tampung array untuk genap dan ganjil
4. Looping untuk mengambil nilai array genap, dengan hasil pengurangan setiap nilai tersebut kecuali untuk  nilai array genap[0]  
5. Looping untuk mengambil nilai array ganjil, dengan hasil pengurangan setiap nilai tersebut kecuali untuk  nilai array ganjil[0] 
6. Membuat kondisi ketika nilai array ganjil atau genap bernilai undefined dan push masing-nilai tersebut ke dalam tampung masing-masing
7. Push nilai array dengan nilai hasil[0] untuk genap dan nilai hasil[1] untuk ganjil dan return hasilnya.
*/
console.log('--------------LC 001---------------------');
function substractEvenOdd (arrNum) {
  
  var ganjil = [];
  var genap = [];

  for (var i=0; i< arrNum.length; i++){
    if (arrNum[i] % 2 !== 0) {
        ganjil.push(arrNum[i]);
      }
    else {
       genap.push(arrNum[i]);
      }
    }
  //console.log('genap : ' +genap);
  //console.log('ganjil : ' +ganjil);
  
  var hasil= [[], []];
   
  var isGenap = genap[0];
  for (var x=1; x<genap.length; x++){
     isGenap -= genap[x]; 
  }
  
  var isGanjil = ganjil[0];
  for (var y=1; y<ganjil.length; y++){
   isGanjil -= ganjil[y]; 
  }
  
if (isGanjil === undefined) {
  isGanjil = 0;
}
if (isGenap === undefined) {
  isGenap = 0;
}

 //var evens = hasilIsGenap[hasilIsGenap.length-1];
 //var odds = hasilIsGanjil[hasilIsGanjil.length-1];
 hasil[0].push(isGenap);
 hasil[1].push(isGanjil);
 return hasil;
}

console.log(substractEvenOdd([3, 5, 7, 8])); // [ [8], [-9] ]

console.log(substractEvenOdd([14, 4, 6, 2])); // [ [2], [0] ]

console.log(substractEvenOdd([])); // [ [0], [0] ]

console.log('--------------LC 002---------------------');
/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function addTitle (people) {
  //console.log(people);
  //console.log(people[0][1])
  
  var genderMale = '' ;
  var genderFemale = '';
  var isGenderFemale = '' ;
  
  if (people[0] === undefined || people[0] === ''){
    return [];
  }

  var hasilGender = '';
  for (var i=0; i< people.length; i++){
    if (people[i][1] === 'male') {
      genderMale = 'Mr. ' + people[i][0];
    }
    else if (people[i][1] === 'female' && people[i][2] === false) {
    genderFemale = 'Ms. ' +people[i][0];
    }
    else if (people[i][1] === 'female' && people[i][2] === true) {
    isGenderFemale = 'Mrs. ' +people[i][0];
    }
  }
  //console.log(genderMale);
  //console.log(genderFemale);
  //console.log(isGenderFemale);
  //console.log('Mr ' +genderMale.toString());

 //console.log(genderMale);
 //console.log(genderFemale);
 //console.log(isGenderFemale);
 hasilGender = genderMale +(', ') + genderFemale+ (', ') + isGenderFemale;
 //console.log(hasilGender);
 var hasil = '';
  for (var i=0; i< hasilGender.length-2;  i++){
    hasil += hasilGender[i];
  }
  //console.log(hasil);
  return hasil;
  
  //return 'Mr. ' +genderMale.toString()+ ', Ms. ' +genderFemale.toString()+ ', Mrs. ' +isGenderFemale.toString();  
}

console.log(addTitle([['Sergei', 'male', true], ['Alyona', 'female', false]])); // Mr. Sergei, Ms. Alyona

console.log(addTitle([['Dimitri', 'male', false], ['Anastasia', 'female', false], ['Vladlena', 'female', true]])); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data

console.log('--------------LC 003---------------------');

/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/
function kali(operand1, operand2) {
  //your code here
  var hasil =0;
  hasil = operand1 * operand2;
  return hasil;
}

function tambah(operand1, operand2) {
  //your code here
   var hasil =0;
  hasil = operand1 + operand2;
  return hasil;
}

function kurang(operand1, operand2) {
  //your code here
  var hasil =0;
  hasil = operand1 - operand2;
  return hasil;
}

function bagi(operand1, operand2) {
  // your code here
  var hasil =0;
  hasil = operand1 / operand2;
  return hasil;
}

function calculate(arrNumber) {
//  your code here
  if (arrNumber[0] === undefined){
    return [];
  }
//  console.log(arrNumber);
  var hasil=[];
  var perkalian = 0;
  var penambahan = 0;
  var pengurangan =0;
  var pembagian =0;
  // console.log(arrNumber[0].operator);
  // console.log(arrNumber[0].operand1);
  // console.log(arrNumber[0].operand2);
  for(var x =0; x < arrNumber.length; x++){
  //console.log(x);
    if(arrNumber[x].operator === '*'){
      perkalian = kali(arrNumber[x].operand1, arrNumber[x].operand2);
      hasil.push(perkalian);
    }else if(arrNumber[x].operator === '+'){
      penambahan = tambah(arrNumber[x].operand1,arrNumber[x].operand2);
      result.push(penambahan);
    }else if(arrNumber[x].operator === '-'){
      pengurangan = kurang(arrNumber[x].operand1,arrNumber[x].operand2);
      hasil.push(pengurangan);
    }else if(arrNumber[k].operator === '/'){
      pembagian = bagi(arrNumber[x].operand1,arrNumber[x].operand2);
      hasil.push(pembagian);
    }
  }
  return hasil;
}

console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]

console.log('--------------SOAL ROCKET----------------');
/*
=============
UNIQUE FINDER
=============
Name :_____________

[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi kata yang duplikat atau lebih dari satu.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.


[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata duplikat: saya
output: ['saya']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function uniqueFinder(sentence) {
  //your code here
  //kondisi untuk nilai array kosong
  if (sentence.length === 0) {
      return 'NO WORDS';
    }
  
  //coding untuk split, space (' ');
  sentence += ' ';
  const tampungWords = [];
  let tampungKata = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      tampungWords.push(tampungKata.toLowerCase());
      tampungKata = ' ';
    } else {
      tampungKata += sentence[i];
    }
  }
  //console.log(tampungWords);
  
  const results = [];
  //looping untuk splitted
  for (let p = 0; p< tampungWords.length; p++){
    //looping untuk check words yg sama
    //console.log('Kata I : ' +tampungWords[p]);
      for (let q = p + 1; q< tampungWords.length; q++){
       //console.log('kata II ' +tampungWords[q]);
       let exist = false;
       
       //looping untuk check udah masuk result or belum
       for (let r = 0; r< results.length; r++) {
       //console.log('kata III : ' +results);
        if (tampungWords[p] === results[r]) {
        exist = true ;
         }
        }
       
       if (tampungWords[p] === tampungWords[q] && !exist ) {
            results.push(tampungWords[p]);
       }
      }
    }  
     //console.log(results);
     return results;

}
console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'dragon']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello']
console.log(uniqueFinder('john is coding and he is coding')); // ['is', 'coding']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'

