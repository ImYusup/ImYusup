/**
Buatlah sebuah algoritma untuk kasus berikut:
Sebuah becak ketika dikayuh oleh pemiliknya yang tidak membawa penumpang memiliki kecepatan 20 km/jam. Jumlah penumpang yang bisa dibawa oleh becak tersebut bervariasi (maksimal 4 orang) dan kecepatan ketika becak itu dikayuh mengalami penurunun:
 - Lebih dari 2 orang kecepatan becak berkurang 5 km/jam
 - Maksimal penumpang kecepatan becak berkurang 7 km/jam
 - Selain itu kecepatan becak hanya berkurang 2 km/jam
 Tampilkan kecepatan becak sekarang jika membawa x penumpang
 noted: x bisa di isi nilai berapa saja (maksimal 4)
 **/


//your alogritma/pseudocode here
//psedecode
/*
SIMPAN dan TULIS banyaknya orang pada 'Jumlah Penumpang'
SIMPAN dan TULIS KECEPATAN MAXIMAL pada 'kecepatanMax'
IF 'jumlahPenumpang' sama dengan 0 THEN
  TULISKAN dan TAMPILKAN 'Kecepatan becak' adalah kecepatanMax 'km/jam' 
  ELSE IF 'jumlahPenumpang' lebih dari sama dengan 2 dan kurang dari 4 THEN
    TULISKAN 'kecepatanMax1' sama dengan kecepatanMax berkurang 5 
    TAMPILKAN 'Kecepatan becak' adalah kecepatanMax1 'km/jam'  
  ELSE IF 'jumlahPenumpang' sama dengan 4 THEN
    TULISKAN 'kecepatanMax2' sama dengan kecepatanMax berkurang 7 
    TAMPILKAN 'Kecepatan becak' adalah kecepatanMax2 'km/jam'
ELSE 'jumlahPenumpang' selain dari angka disebutkan THEN
    TULISKAN 'kecepatanMax3' sama dengan kecepatanMax berkurang 2
    TAMPILKAN 'Kecepatan becak' adalah kecepatanMax3 'km/jam'  
*/
console.log('No 1 Psedecode-----------------');
var jumlahPenumpang = 4; //Input variabel jumlah penumpang
var kecepatanMax = 20;
if (jumlahPenumpang === 0){
  console.log('Kecepatan Becak : ' +kecepatanMax+ ' km/jam');
}
    else if (jumlahPenumpang >= 2 && jumlahPenumpang < 4){
    kecepatanMax1 = kecepatanMax -5;
    console.log('Kecepatan Becak : ' +kecepatanMax1+ ' km/jam');
    }
    else if (jumlahPenumpang === 4){
    kecepatanMax2 = kecepatanMax -7;
    console.log('Kecepatan Becak : ' +kecepatanMax2+ ' km/jam');
    }
else {
  kecepatanMax3 = kecepatanMax -2;
  console.log('Kecepatan Becak : ' +kecepatanMax3+ ' km/jam');
}


console.log('No 2 - Mathematical Operation and Conditionals----------------');
// Competencies: Mathematical Operation and Conditionals
/*
==================
Tax Administration
==================
Instruksi
=========
Di negara wkwkland, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.
3. citizenship: kewarganegaraan pendaftar.
Program akan melakukan tahap-tahap berikut:
Step 1. Jika name kosong, maka tampilkan di console "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!" dan hentikan program.
Step 2. Jika age dibawah 17 tahun, maka tampilkan di console "BELUM CUKUP UMUR!" dan hentikan program.
Step 3. program akan mengenerate Tax ID dengan format:
  WKWK-<KODE> => untuk pendaftar yang warga negara 'wkwkland'. <KODE> mewakili jumlah karakter dari name ditambah age.
  ABCD-<KODE> => untuk pendaftar yang bukan warga negara 'wkwkland'. <KODE> mewakili jumlah karakter dari name ditambah age.
  Contoh:
  Untuk yang citizenship = 'wkwkland' dengan name = 'dimitri', age = 17,
  maka ubah taxID menjadi 'WKWK-24'.
  Untuk yang citizenship = 'Indonesia' dengan name = 'alexei', age = 20,
  maka ubah taxID menjadi 'ABCD-26'.
Ketentuan
=========
Diberikan variable name, age, citizenship, dan taxID.
Dipersilahkan mengganti nilai dari name, age dan citizenship secara manual, dan gantilah taxId sesuai dengan ketentuan program.
*/

// SKELETON CODE (Code Sample)

var name = 'dimitri'; // silakan berikan nilai bebas
var age = 16 ; // silakan berikan nilai bebas
var citizenship = 'wkwkland'; // silakan berikan nilai bebas
var taxID; // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!
// Buat code disini

if (name === ''){
  console.log('NAMA ANDA KOSONG! TIDAK BISA DAFTAR!');
}
else {
  if (age < 17) {
   console.log('BELUM CUKUP UMUR!'); 
  }
  else  { 
    var karakter = name.length + age ;
    if (citizenship === 'wkwkland'){
     taxID = 'WKWK-' +karakter;
    }
    else {
    taxID = 'ABCD-' +karakter;
    }
  }
  console.log('Nama : ' +name);
  console.log('Umur : ' +age);
  console.log('Citizenship : ' +citizenship);
  console.log('TAX ID : ' +taxID);
}

console.log('No 3 - Loopings------------');
// Competencies: Loopings
/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
123
23
3

contoh 2 (height = 5):
12345
2345
345
45
5

contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
console.log('Lopping untuk height 3');
var height = 3;// isi dengan nilai tinggi tangga!
var nilai = 0;
for (var i=height; i>0; i--){
  var angka='';
    for (var j=1; j<=i; j++){
      angka += j + nilai;
    }
  nilai++;  
  console.log(angka);
}
console.log('Lopping untuk height 5');
var height = 5; // isi dengan nilai tinggi tangga!
var nilai =0;
for (var i=height; i>=0; i--){
  var angka='';
    for (var j=1; j<=i; j++){
      angka += j + nilai;
    }
  nilai++;  
  console.log(angka);
}
console.log('Lopping untuk height 1');
var height = 1; // isi dengan nilai tinggi tangga!
var nilai=0;
for (var i=height; i>=0; i--){
  var angka='';
    for (var j=1; j<=i; j++){
      angka += j + nilai;
    }
  nilai++;  
  console.log(angka);
}

// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
9 8 7
6 5 4
3 2 1

contoh 2 (drawThreeColsBox(5)):
15 14 13
12 11 10
9 8 7
6 5 4
3 2 1

contoh 3 (drawThreeColsBox(1)):
3 2 1

Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
console.log('No 3 - Soal Rocket------------');
function drawThreeColsBox (height) {
var isi = height * 3;

  for (var i=1; i<=height; i++){
    var angka = '';
      for (var j=1; j<=3; j++){
        angka += isi + ' ';
        isi--;
   } 
  console.log(angka);
 }
 
}
(drawThreeColsBox(3));
console.log('__________________');
(drawThreeColsBox(5));
console.log('__________________');
(drawThreeColsBox(1));

/*
console.log('Iseng latihan - Contoh Sort Array');
var angka = [22,10,15,3,2];
var tampung = 0;

for (var i=0; i<angka.length; i++){ 
  for (var j=0; j<angka.length-i-1; j++) {
    if (angka[j] > angka [j+1]) {
      tampung = angka [j];
      angka[j] = angka[j+1];
      angka[j+1] = tampung;
    }    
  }
}
console.log(angka);
*/

