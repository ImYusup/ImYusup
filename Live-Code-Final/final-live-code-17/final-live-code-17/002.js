/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut. 
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!


*/
/* ALGORITMA

1. Membuat kondisi ketika nilai parameter pertama dan kedua kosong makan tampilkan hasilnya menjadi nol.
2. Membuat variable baru tampung array (output) dengan menampung semua nilai array ketika terjadi perkalian di index yang sama dalam looping tersebut.
3. Membuat dua fungsi looping for, dengan dimulai dari index nol, batas kurang dari nilai panjang parameter pertama dan kedua dan penambahan satu
  3a. Membuat kondisi ketika index pada looping pertama dengan index pada looping kedua
  3b. Mengambil hasil nilai array (output) tersebut dengan melakukan perkalian di tiap masing-masing nilai array dan tutup hasil kedua looping tersebut.
4. Membuat variable baru (total) dengan sama dengan satu dengan tujuan mengganti ketika variable tersebut menghitung perkalian setiap nilai array tersebut.
5. Membuat fungsi looping for, dengan index awal sama dengan nol, batas index kurang dari nilai panjang variabel output dan penambahan satu
   5a. Membuat kondisi nilai array ketika ganjil
   5b. Melakukan jumlah total perkalian di setiap nilai array ganjil
6. Memanggil hasil nilai total tersebut ketika proses sudah dilakukan. 

*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 17 LC-002 The Number Cruncher');

function multiplyTheOdds(arrOperand1, arrOperand2) {
  // your code here
  if (arrOperand1[0] === undefined && arrOperand2[0] === undefined) {
    return 0;
  }
  
  const output = [];
  
  for (let i=0; i< arrOperand1.length; i++){
      for (let j=0; j< arrOperand2.length; j++){
        if (i === j) {
          output.push(arrOperand1[i] * arrOperand2[j]);
       }
     } 
   }
  //console.log(output);
  
  let total = 1;
  for (let p=0; p< output.length; p++){
    if (output[p] % 2 !== 0) {
      total *= output[p];
    }
  }
    return total;
  
  
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0