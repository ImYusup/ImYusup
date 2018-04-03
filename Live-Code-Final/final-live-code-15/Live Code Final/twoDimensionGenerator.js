/*
==================================
Two Dimentional Array Generator
==================================

Nama:________

[INSTRUKSI]

function twoDimensionalGenerator adalah sebush function yang menerima satu parameter berupa angka.
Function akan mengembalikan sebuah array multidimensi - array yang berisikan array-array yang menampung string.
Array yang dikembalikan memiliki jumlah array di dalamnya sejumlah angka di parameter, dan setiap array di dalamnya akan menampung string 'X' sejumlah angka parameter juga.

WARNING: Harus dalam bentuk array, bukan string! hasil test case dibawah adalah visualisasi bentuk array, dan mungkin bisa sedikit berbeda di setiap console.

[CONTOH]

input: 2
output: [ [ 'X', 'X' ], [ 'X', 'X' ] ]

input: 4
output: [ [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ] ]

input: 1
output: [ ['X'] ]
*/

function twoDimensionalGenerator(count) {
  // Code here 
  
  let tampung = [];
  //let hasil = [];
  
  for (let i=0; i< count; i++){
    tampung.push([]);
      for (let j=0; j< count; j++){
        //console.log(count);
        let inisial = 'X';
        tampung[i].push(inisial);
       }
  }
  console.log(tampung);
  
}


console.log(twoDimensionalGenerator(2)); // [ [ 'X', 'X' ], [ 'X', 'X' ] ]
console.log(twoDimensionalGenerator(4)); // [ [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ] ]
console.log(twoDimensionalGenerator(1)); // [ ['X'] ]
console.log(twoDimensionalGenerator(0)); // []

