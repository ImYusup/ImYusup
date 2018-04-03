/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number. 
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]

//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]

// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime

note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/
/* ALGORITMA

1. Membuat variable baru (output) dengan nilai tampung array terlebih dahulu dengan tujuan untuk mengambil index.
2. Membuat dua looping dalam fungsi ini.
  2a. Membuat looping pertama dengan dimulai dari index awal sama dengan dua, batas kurang dari atau sama dengan paramater num dalam fungsi dan penambahan satu  
  2b. Membuat variable baru dengan counter sama dengan nol
  2c. Membuat looping ke dua dengan index awal sama dengan nol, batas krang dari atau sama dengan index awal dari looping pertama dan penambahan satu
  2d. Membuat kondisi jika index looping pertama dan kedua sama dengan nol
  2e. Membuat varable counter menambah satu
  2f. Membuat kondisi variable counter sama dengan dua
3. Memanggil prosses hasil array variable simpan dengan push terhadap index di looping pertama

*/
console.log('___________________________________________');
console.log('Live Final Coding Batch 17 LC-001 The Prime Number');

function getPrime(num) {
  // your code here
   var simpan = [];
   //let counter =0;
    for(var i = 2; i <= num; i++){
        let counter = 0;
        for(j = 0; j<=i; j++){
          if(i % j === 0){
            counter++;
          }
        }
        if(counter === 2){
          simpan.push(i);
        }
    }
  //console.log(simpan);
  //console.log(simpan);
  return simpan;
  
  
}

console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []