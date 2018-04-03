/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/
/*
1. Menampung nilaiarray pertama dengan variable arrResult1
2. Menampung nilaiarray pertama dengan variable arrResult2
3. Membuat dua looping untuk membandingkan nilai array pertama dan nilai array kedua, dan push nilainya ke delam arrResult1
4. Membuat dua looping untuk membandingkan nilai arrResult1 dengan parameter pertama arr1
5. menampung nilai array tersebut dengan ke dalam arrResult2
6. membuat dua nilai tmapung array variabel baru dengan result dan freq
7. tampung nilai array result untuk meremove nilai array yang sama
8. tampung nilai array freq untuk mencari nilai array yang sering keluar
9. membuat variabel baru dengan hasil
10. membuat dua looping untuk nilai array pertama result dan freq dan kemudian push hasil nilai array arrResults tersebut ke dalam hasil 
11. menjumlahkan nilai array di masing-masing parameter dan return kosong [], jika jumlah tersebut sama.
*/

function findNotRelative(arr1, arr2) {
  // your code here
  // cara ke 1
  /*
  const output = [];
  for (let i=0; i< arr1.length; i++){
    let match = false;
      for (let j=0; j< arr2.length; j++){
        if (arr1[i] === arr2[j]) {
          match = true;
       }
     } 
      if (match === false) {
        output.push(arr1[i]);
    }
  }
  return output;
  */
  // cara ke 2
  let hasil = [];
  for (let j=0; j< arr1.length; j++)
    if (arr1.indexOf(arr1[j]) !== -1){
      hasil.push(arr1[j]);
    }
  //console.log(hasil);
  return hasil;
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]

/* // My answer
 
 let arrResult1 = [];
 let arrResult2 = [];
 
 for (let i=0; i< arr1.length; i++){
   for (let j=0; j<arr2.length; j++) {
     if (arr1[i] === arr2[j]) {
       arrResult1.push(arr1[i]);
     }
   }
 }
 console.log(arrResult1);
 
 for (let p=0; p< arrResult1.length; p++){
   for (let q=0; q< arr1.length; q++){
     if (arrResult1[p] !== arr1[q] ){
       arrResult2.push(arr1[q]);
     }
   }
 }
  console.log(arrResult2);
  
  let arrResults = [];
  let freq = [];
  //replicate number
  for (let r=0; r< arrResult2.length; r++){
    let simpan = arrResults.indexOf(arrResult2[r]);
    if (simpan === -1) {
      arrResults.push(arrResult2[r]);
      freq.push(1);
    }
    else {
      freq[simpan]++;
    }
  }
  //console.log(arrResults);
  //console.log(freq);
  
  let hasil =[];
   for (let p=0; p< arrResults.length; p++){
   for (let q=0; q< freq.length; q++){
     if (p === q && freq[q] === 2){
       hasil.push(arrResults[p]);
     }
   }
  }
  //console.log(hasil);
  
  //membandingkan nilai total array pertma dan kedua
    let total1 = 0 ;
  for (let l=0; l< arr1.length; l++){
      total1 += arr1[l];
  }
  //console.log(total1);
  
  let total2 = 0;
   for (let l=0; l< arr2.length; l++){
      total2 += arr2[l];
  }
  //console.log(total2);
  
  if (total1 === total2){
    return [];
  }
  
  return hasil;
*/  
