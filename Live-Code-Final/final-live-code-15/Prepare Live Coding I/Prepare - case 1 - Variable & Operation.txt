/*
Kasus Ibu Belanja
===================
Latihan Operations

Seorang ibu memiliki uang 500.000 dan ingin berbelanja ke supermarket. Jika ia membeli daging sapi, maka ia harus membayar sebesar 50.000 per kg nya. Jika ia membeli daging ayam, aka ia harus membayar 40.000 per ekor. Hitunglah sisa uang ibu jika ia membeli sejumlah daging sapi dan sejumlah ayam. Tampilkan di log sisa uang ibu sekarang!

PEMECAHAN MASALAH
=================
1. Seorang ibu memiliki uang 50.000. Maka dari itu buatlah variable bernama "uang".
2. Berdasarkan soal, maka buatlah variable penampung harga daging sapi dan ayam masing-masing "hargaDagingSapi" dan "hargaDagingAyam".
3. Untuk menampung berapa jumlah daging sapi dan ayam, buatlah variable bernama "jumlahBeliDagingSapi" dan "jumlahBeliDagingAyam".
4. Untuk mendapatkan total harga daging, kalian harga dengan jumlah masing-masing daging.
5. Untuk mendapatkan sisa uang ibu, kurangi value dalam variable "uang" dengan total harga yang harus dibayarkan. Tampunglah ke variable "sisaUang".
*/

// SOLUSI

// Buatlah inisialisasi variable uang dan harga sapi dan ayam
var uang = 500000;
var hargaDagingSapi = 50000;
var hargaDagingAyam = 40000;

// Tentukan jumlah yang akan dibeli si ibu
var jumlahBeliDagingSapi = 2; // silakan diganti untuk mengetest kemungkinan lain.
var jumlahBeliDagingAyam = 3; // silakan diganti untuk mengetest kemungkinan lain.

// Hitung total harga masing-masing jenis belanjaan
var totalHargaSapi = hargaDagingSapi * jumlahBeliDagingSapi;
var totalHargaAyam = hargaDagingAyam * jumlahBeliDagingAyam;

// Hitung total harga belanja yang harus dibayarkan ibu
var totalHargaBelanja = totalHargaSapi + totalHargaAyam;

// Kurangi sisa uang ibu dengan total harga belanja
var sisaUang = uang - totalHargaBelanja;

// Tampilkan di log sisa uang ibu
console.log('SISA UANG IBU: ' + sisaUang);