/*
Kasus Penghitung Dompet
=======================
Latihan Array

Seseorang sedang menghitung jumlah uang di dompetnya. Ada dua hal yang ia ingin hitung: berapa total uang yang ada di dompetnya, dan untuk setiap pecahan uang, ada berapa lembar masing-masing. Uang dalam dompet akan direpresentasikan dalam bentuk array yang berisikan number. Program akan menampilkan di log berupa "TOTAL UANG: <total>" dan log juga masing-masing pecahan uangnya. Untuk memudahkan kita, anggap saja hanya ada uang 10.000, 20.000, dan 50.000 di dompetnya.

PEMECAHAN MASALAH
=================

1. Buatlah sebuah variable bernama "moneys". Biasakan dalam array yang merepresentasikan kumpulan menggunakan penamaan plural / jamak. Isikan uang di dalam variable tersebut dengan bebas.

BAGIAN 1 - Mencari Total

2. Untuk mencari total, siapkan sebuah variable bernama "total". Kita bisa mulai total dari 0, dan nantinya kita akan mengakumulasikan total ini dengan setiap uang yang ada di dalam dompet.
3. Dengan memanfaatkan looping, looping-lah array "moneys" mulai dari index 0 (index pertama) sampai index terakhir. Untuk mendapatkan index terakhir, kita dapat mendapatkan panjang array dikurangi satu (array.length - 1).
4. Di dalam setiap scope looping (while / for), akses isi array sesuai dengan nilai index yang sedang kita looping.
5. Tambahkan nilai di variable total dengan isi array yang kita akses di step 4.
6. Ulangi proses 5 hingga looping selesai
7. Tampilkan nilai "total" di console.

BAGIAN 2 - Mencari jumlah masing-masing pecahan.

2. Siapkan variable untuk menampung masing-masing jumlah pecahan. Karena ada tiga kemungkinan pecahan uang, maka kita siapkan "count10" untuk mewakili 10.000, "count20" untuk mewakili 20.000, dan "count50" untuk 50.000.
3. Assign nilai untuk masing-masing variable tersebut dengan nilai 0.
4. Di dalam looping yang kita lakukan di step 4, lakukan pengecekan dengan if-else. Akan ada 3 kali pengecekan
5. Cek jika nilai array yang di akses adalah 10000, maka tambahkan count10 dengan 1.
6. Cek jika nilai array yang di akses adalah 20000, maka tambahkan count20 dengan 1.
7. Cek jika nilai array yang di akses adalah 50000, maka tambahkan count50 dengan 1.
8. Terakhir, tampilkan masing-masing nilai variable tersebut.
*/


/*
Bagian 1 dan Bagian 2 akan dipisah agar terlalu membingungkan. Bagian 2 akan menggunakan penamaan variable yang berbeda agar tidak bentrok dengan Bagian 1.
*/

// SOLUSI BAGIAN 1

var moneys1 = [20000, 50000, 10000, 10000, 20000];

var total = 0;

for(var i = 0; i < moneys1.length; i++) { // looping dari index 0 sampai index akhir si array dengan moneys1.length
  // tampung nilai isi dompet yang sedang kita akses
  var moneyInsideWallet = moneys1[i];
  // akumulasi nilai total dengan isi array
  total = total + moneyInsideWallet;
}

console.log('TOTAL UANG: Rp. ' + total);

// SOLUSI BAGIAN 2 

var moneys2 = [20000, 50000, 10000, 10000, 20000];

var count10 = 0;
var count20 = 0;
var count50 = 0;

for(var i = 0; i < moneys1.length; i++) { // looping dari index 0 sampai index akhir si array dengan moneys1.length
  // tampung nilai isi dompet yang sedang kita akses
  var moneyInsideWallet = moneys1[i];
  
  if(moneyInsideWallet === 10000) {
    count10++; // count10++ sama saja dengan count10 = count10 + 1
  }
  
  if(moneyInsideWallet === 20000) {
    count20++;
  }
  
  if(moneyInsideWallet === 50000) {
    count50++;
  }
}

console.log('Pecahan Rp. 10.000 ada : ' + count10 + ' lembar.');
console.log('Pecahan Rp. 20.000 ada : ' + count20 + ' lembar.');
console.log('Pecahan Rp. 50.000 ada : ' + count50 + ' lembar.');