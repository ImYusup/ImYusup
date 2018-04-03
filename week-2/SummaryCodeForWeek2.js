<<<<<<< HEAD
console.log('Senin-[Exercises 1] Berlatih dengan Pseudocode');
//1. Tulis rumus hukum newton dalam psedecode => F = m X a
/* READ and SAVE 'first number'
   READ and SAVE 'second number'
   COMPUTE 'first number' multiple by 'second number'
   SAVE previous computation result
   SHOW the computation result */
var massa = 20;
var kecepatan = 10;
var gaya = massa * kecepatan;
console.log('Nomor 1 : ' +gaya+ ' Newton');

//2. Hitung tahun kabisat
/* SIMPAN dan TULIS TAHUN pada tahun 
   IF TAHUN habis dibagi 4
      IF TAHUN tidak habis dibagi 100
      TULISKAN TAHUN adalah tahun kabisat
      ELSE : 
         IF TAHUN dibagi 100 dan habis dibagi 400
         TULISKAN TAHUN adalah tahun kabisat
   ELSE TAHUN tidak habis dibagi 4
   TULISKAN TAHUN adalah bukan tahun kabisat*/
var tahun = 2000;
if (tahun % 4 === 0) {
  if (tahun % 100 !== 0) {
    console.log('Nomor 2 : ' +tahun+ ' adalah tahun kabisat');
  }
  else {
    if (tahun % 100 === 0 && tahun % 400 === 0) {
    console.log('Nomor 2 : ' +tahun+ ' adalah tahun kabisat');
    } 
  }
}
else {
  console.log('Nomor 2 : ' +tahun+ ' adalah bukan tahun kabisat');
}
//3. Mengambil baju sebanyak 20X dan dimasukan kedalam mesin cuci, using looping
/* SIMPAN 'banyaknya baju'
   FOR setiap penambahan satu dari 'banyaknya baju' dari 1 sampai dengan 20
   TULISKAN 'banyaknya baju' adalah untuk mengambil baju*/
var banyaknyaBaju ;  
  for (banyaknyaBaju=1; banyaknyaBaju<=20; banyaknyaBaju++){
    console.log('Nomor 3 : mengambil baju ke-' +banyaknyaBaju);
  }
//4. periksa kuku sebanayak 40 siswa/i dengan menggunakan kondisi baik jika kuku bagus
/* SIMPAN dan TULIS 'kuku'
  for setiap penambahan satu dari index 1 sampai dengan 40
  IF 'kukunya panjang' THEN
  TULISKAN 'kamu kukunya panjang dan kamu harus dihukum!'
  ELSE 'kukunya pendek'THEN
  TULISKAN 'kamu adalah contoh siswa/i yang baik'*/
 //tergantung assign ketika bertemeu siswa/i kukunya panjang or tidak  
var kuku = 'panjang';
for (var i=1; i<=40; i++){
  if (i = kuku) {
    console.log('nomor 4 : kamu kukunya panjang dan kamu harus dihukum!' );
      }
  else {
    console.log('nomor 4 : kamu adalah contoh siswa/i yang baik' );
  }
}
console.log('Selasa-[Exercises 2] Codecademy JavaScript Building Blocks: Unit 1 and 2 - Intro and Control Flow only');
console.log('Selasa-[Exercises 3] Mengenal penggunaan Conditional if-else dalam JavaScript');
//1. soal menggunakan kondisi if-else
var nama = 'Zero';
var peran = 'Penyihir' ;
if (nama === ''){
  console.log('Nama tidak boleh kosong!!');
}  
else {
  if (nama === 'Mikael' && peran === ''){
  console.log('Hallo ' +nama+ ' Pilih peranmu untuk memulai game!');
  } 
  else if (nama === 'Nina' && peran === 'Ksatria')  {
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' +peran+ ' ' +nama+ ' kamu dapat menyerang dengan senjatamu!');
  }  
  else if (nama === 'Danu' && peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' +peran+ ' ' +nama+ ' kamu akan membantu temanmu yang terluka');
  }  
  else if (nama === 'Zero' && peran === 'Penyihir') { 
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' +peran+ ' ' +nama+ ', ciptakan keajaiban yang membantu kemenanganmu!');
  }  
}
console.log('Selasa-[Exercises 4] Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript');
//2.  soal menggunakan switch-case
var tanggal = 28;
var bulan = 8;
var tahun = 2017;
var namaBulan='';
switch (bulan) {
  case 1: namaBulan= 'Januari'; break;
  case 2: namaBulan= 'Februari'; break;
  case 3: namaBulan= 'Maret'; break;
  case 4: namaBulan= 'April'; break;
  case 5: namaBulan= 'Mei'; break;
  case 6: namaBulan= 'Juni'; break;
  case 7: namaBulan= 'Juli'; break;
  case 8: namaBulan= 'Agustus'; break;
  case 9: namaBulan= 'September'; break;
  case 10: namaBulan= 'Oktober'; break;
  case 11: namaBulan= 'November'; break;
  case 12: namaBulan= 'Desember'; break;
  default:
}
console.log('Anak saya yang bernama Arsyad Al Khawarizmi Priadi lahir : ' +tanggal+ ' ' +namaBulan+ ' ' +tahun);


console.log('Rabu-[Exercises 5] Bermain dengan String di JavaScript');
//1. let's from a sentece
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word+ ' ' +second+ ' ' +third+ ' ' +fourth+ ' ' +fifth+ ' ' +sixth+ ' ' +seventh);

//2. Index Accessing-1 by 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2]; //<== see this code
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so' ; // do your own!
var fifthWord = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//3. Breaking Sentence (Again) using Substring
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3); //<== see this code
var secondWord3 = 'JavaScript'; // do your own!
var thirdWord3 = 'is'; // do your own!
var fourthWord3 = 'so'; // do your own!
var fifthWord3 = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = 'JavaScript'; // do your own!
var thirdWord4 = 'is'; // do your own!
var fourthWord4 = 'so'; // do your own!
var fifthWord4 = 'cool'; // do your own!
//untuk mempermudah melihat index dan array gunakanlah excel
//var exampleFirstWord4 = word4.substring(0, 3);
var firstWordLength = exampleFirstWord4.length;
//_______________//
//create new variables around here
var exampleSecondWord4 = word4.substring(4, 14);
var secondWordLength = exampleSecondWord4.length;
//_______________//
var exampleThirdWord4 = word4.substring(15, 17);
var thirdWordLength = exampleThirdWord4.length;
//_______________//
var exampleFourthWord4 = word4.substring(18, 20);
var fourWordLength = exampleFourthWord4.length;
//_______________//
var exampleFifthWord4 = word4.substring(21, 25);
var fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);

console.log('Rabu-[Exercises 6] Berlatih Perulangan di JavaScript');
console.log('--menggunakan looping while method--');
//1. menggunakan looping while method
console.log('Looping pertama');
var i=2;
while (i<=20) {
 console.log(i+ ' - I Love coding');
  i++;
}
console.log('Looping kedua');
var i=20;
while (i>=2) {
 console.log(i+ ' - I Love coding');
  i--;
}
console.log('--menggunakan looping for method--');
//2. menggunakan looping for method
console.log('Looping pertama');
for (var i=1; i<=20; i++){
   console.log(i+ ' - I Love coding');
}
console.log('Looping kedua');
for (var j=20; j>=1; j--){
   console.log(j+ ' - I Love coding');
}

console.log('menggunakan kondisi untuk angka genap dan ganjil');
for (var i=1; i<=100; i++){
  if (i % 2 === 0) {
    console.log('Bilangan genap : ' +i);
  }
  else {
    console.log('Bilangan ganjil ' +i);
  }
}
console.log('counter untuk kelipatan tiga');
for (var j=1; j<=100; j+=2){
  if (j % 3 === 0) {
    console.log('Bilangan 3 kelipatan ' +j);
  }
}
console.log('counter untuk kelipatan enam');
for (var k=1; k<=100; k+=5){
  if (k % 6 === 0) {
    console.log('Bilangan 6 kelipatan ' +k);
  }
}
console.log('counter untuk kelipatan sepuluh');
for (var l=1; l<=100; l+=9){
  if (l % 10 === 0) {
    console.log('Bilangan 10 kelipatan ' +l);
  }
}

console.log('Rabu-[Exercises 7] Perulangan - Play with Asterisks')
//1. Menyusun Barisan Bintang
console.log('menyusun bintang jika rows1 = 5');
var rows1 = '';
for (var i=1; i<=5; i++){
  rows1 += '*'
  console.log(rows1);
  rows1=''
}
//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('menyusun bintang jika rows2 = 5');
var rows2 = '';
for (var a=1; a<=5; a++){
  for(var b=1; b<=5; b++){
  rows2 += '*'
  }  
  console.log(rows2);
  rows2=''
}  
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('menyusun bintang jika rows3 = 5');
var rows2 = '';
for (var a=1; a<=5; a++){
  rows2 += '*'
  console.log(rows2);
}  

console.log('Kamis-[Exercises 8] JavaScript Building Blocks: Codecademy JavaScript Course (Unit 3 - Functions)');
console.log('Kamis-[Exercises 9] Berlatih Penggunaan Functions');
//1. tugas I - create function
console.log('tugas I - create function');
function shoutOut () {
  //BUATLAH KODE FUNCTION DISINI
  return 'Hallo Function';
}
console.log(shoutOut()); // Menampilkan "Halo Function!" di console

//2. tugas II - calculateMultiply function
console.log('tugas II - calculateMultiply()');
  
function calculateMultiply (num1, num2) {
 //BUATLAH KODE FUNCTION DISINI
  return num1 * num2;
}
  var num1 = 5;
  var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log('hasilPerkalian : ' +hasilPerkalian); // Menampilkan angka 30

//3. tugas III - processSentence function
console.log('tugas III - processSentence()');
function processSentence () {
//BUATLAH KODE FUNCTION DISINI
  return 'Nama saya ' +name+ ', umur saya ' +age+ ' tahun, alamat saya di ' +address+ ', dan saya punya hobby yaitu ' +hobby+ '!'; 
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

console.log('Jumat-[Exercises 10] Bandingkan Angka')
//1. Logic Challenge - Bandingkan Angka
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2){
    return true;
  } 
  else if (angka1 > angka2) {
    return false;
  }
  else {
    return -1;
  }
}
// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log('Jumat-[Exercises 11] Balik Kata');
//2. Balik Kata
function balikKata(kata) {
  var balikKata=''
  // you can only write your code here!
  for (var i=kata.length-1; i>=0; i--){
    balikKata += kata[i];
  }
  return balikKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log('Jumat-[Exercises 12] Konversi Menit');
//3.Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit/60;
  var isHours = Math.floor(jam);
  //console.log(isHours);
  
  var minute = menit % 60;
  //console.log(minute);
  var nol='';
  if(minute < 10) {
    nol += 0;
  }
  return isHours+ ':' +nol+ +minute; 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log('[Exercises 13] X dan O');
//4. Logic Challenge - X dan O
function xo(str) {
  // you can only write your code here!
  var isX = 0 ;
  var isO = 0 ;
  for (var i=0; i<str.length; i++) {
    if (str[i] === 'x') {
      isX++;
    }
    else {
      isO++;
    }
  }
  //console.log(isX);
  //console.log(isO);
  if (isX === isO) {
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
=======
console.log('Senin-[Exercises 1] Berlatih dengan Pseudocode');
//1. Tulis rumus hukum newton dalam psedecode => F = m X a
/* READ and SAVE 'first number'
   READ and SAVE 'second number'
   COMPUTE 'first number' multiple by 'second number'
   SAVE previous computation result
   SHOW the computation result */
var massa = 20;
var kecepatan = 10;
var gaya = massa * kecepatan;
console.log('Nomor 1 : ' +gaya+ ' Newton');

//2. Hitung tahun kabisat
/* SIMPAN dan TULIS TAHUN pada tahun 
   IF TAHUN habis dibagi 4
      IF TAHUN tidak habis dibagi 100
      TULISKAN TAHUN adalah tahun kabisat
      ELSE : 
         IF TAHUN dibagi 100 dan habis dibagi 400
         TULISKAN TAHUN adalah tahun kabisat
   ELSE TAHUN tidak habis dibagi 4
   TULISKAN TAHUN adalah bukan tahun kabisat*/
var tahun = 2000;
if (tahun % 4 === 0) {
  if (tahun % 100 !== 0) {
    console.log('Nomor 2 : ' +tahun+ ' adalah tahun kabisat');
  }
  else {
    if (tahun % 100 === 0 && tahun % 400 === 0) {
    console.log('Nomor 2 : ' +tahun+ ' adalah tahun kabisat');
    } 
  }
}
else {
  console.log('Nomor 2 : ' +tahun+ ' adalah bukan tahun kabisat');
}
//3. Mengambil baju sebanyak 20X dan dimasukan kedalam mesin cuci, using looping
/* SIMPAN 'banyaknya baju'
   FOR setiap penambahan satu dari 'banyaknya baju' dari 1 sampai dengan 20
   TULISKAN 'banyaknya baju' adalah untuk mengambil baju*/
var banyaknyaBaju ;  
  for (banyaknyaBaju=1; banyaknyaBaju<=20; banyaknyaBaju++){
    console.log('Nomor 3 : mengambil baju ke-' +banyaknyaBaju);
  }
//4. periksa kuku sebanayak 40 siswa/i dengan menggunakan kondisi baik jika kuku bagus
/* SIMPAN dan TULIS 'kuku'
  for setiap penambahan satu dari index 1 sampai dengan 40
  IF 'kukunya panjang' THEN
  TULISKAN 'kamu kukunya panjang dan kamu harus dihukum!'
  ELSE 'kukunya pendek'THEN
  TULISKAN 'kamu adalah contoh siswa/i yang baik'*/
 //tergantung assign ketika bertemeu siswa/i kukunya panjang or tidak  
var kuku = 'panjang';
for (var i=1; i<=40; i++){
  if (i = kuku) {
    console.log('nomor 4 : kamu kukunya panjang dan kamu harus dihukum!' );
      }
  else {
    console.log('nomor 4 : kamu adalah contoh siswa/i yang baik' );
  }
}
console.log('Selasa-[Exercises 2] Codecademy JavaScript Building Blocks: Unit 1 and 2 - Intro and Control Flow only');
console.log('Selasa-[Exercises 3] Mengenal penggunaan Conditional if-else dalam JavaScript');
//1. soal menggunakan kondisi if-else
var nama = 'Zero';
var peran = 'Penyihir' ;
if (nama === ''){
  console.log('Nama tidak boleh kosong!!');
}  
else {
  if (nama === 'Mikael' && peran === ''){
  console.log('Hallo ' +nama+ ' Pilih peranmu untuk memulai game!');
  } 
  else if (nama === 'Nina' && peran === 'Ksatria')  {
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' +peran+ ' ' +nama+ ' kamu dapat menyerang dengan senjatamu!');
  }  
  else if (nama === 'Danu' && peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' +peran+ ' ' +nama+ ' kamu akan membantu temanmu yang terluka');
  }  
  else if (nama === 'Zero' && peran === 'Penyihir') { 
  console.log('Selamat datang di Dunia Proxytia, ' +nama);
  console.log('Hallo ' +peran+ ' ' +nama+ ', ciptakan keajaiban yang membantu kemenanganmu!');
  }  
}
console.log('Selasa-[Exercises 4] Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript');
//2.  soal menggunakan switch-case
var tanggal = 28;
var bulan = 8;
var tahun = 2017;
var namaBulan='';
switch (bulan) {
  case 1: namaBulan= 'Januari'; break;
  case 2: namaBulan= 'Februari'; break;
  case 3: namaBulan= 'Maret'; break;
  case 4: namaBulan= 'April'; break;
  case 5: namaBulan= 'Mei'; break;
  case 6: namaBulan= 'Juni'; break;
  case 7: namaBulan= 'Juli'; break;
  case 8: namaBulan= 'Agustus'; break;
  case 9: namaBulan= 'September'; break;
  case 10: namaBulan= 'Oktober'; break;
  case 11: namaBulan= 'November'; break;
  case 12: namaBulan= 'Desember'; break;
  default:
}
console.log('Anak saya yang bernama Arsyad Al Khawarizmi Priadi lahir : ' +tanggal+ ' ' +namaBulan+ ' ' +tahun);


console.log('Rabu-[Exercises 5] Bermain dengan String di JavaScript');
//1. let's from a sentece
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word+ ' ' +second+ ' ' +third+ ' ' +fourth+ ' ' +fifth+ ' ' +sixth+ ' ' +seventh);

//2. Index Accessing-1 by 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2]; //<== see this code
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so' ; // do your own!
var fifthWord = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//3. Breaking Sentence (Again) using Substring
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3); //<== see this code
var secondWord3 = 'JavaScript'; // do your own!
var thirdWord3 = 'is'; // do your own!
var fourthWord3 = 'so'; // do your own!
var fifthWord3 = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = 'JavaScript'; // do your own!
var thirdWord4 = 'is'; // do your own!
var fourthWord4 = 'so'; // do your own!
var fifthWord4 = 'cool'; // do your own!
//untuk mempermudah melihat index dan array gunakanlah excel
//var exampleFirstWord4 = word4.substring(0, 3);
var firstWordLength = exampleFirstWord4.length;
//_______________//
//create new variables around here
var exampleSecondWord4 = word4.substring(4, 14);
var secondWordLength = exampleSecondWord4.length;
//_______________//
var exampleThirdWord4 = word4.substring(15, 17);
var thirdWordLength = exampleThirdWord4.length;
//_______________//
var exampleFourthWord4 = word4.substring(18, 20);
var fourWordLength = exampleFourthWord4.length;
//_______________//
var exampleFifthWord4 = word4.substring(21, 25);
var fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);

console.log('Rabu-[Exercises 6] Berlatih Perulangan di JavaScript');
console.log('--menggunakan looping while method--');
//1. menggunakan looping while method
console.log('Looping pertama');
var i=2;
while (i<=20) {
 console.log(i+ ' - I Love coding');
  i++;
}
console.log('Looping kedua');
var i=20;
while (i>=2) {
 console.log(i+ ' - I Love coding');
  i--;
}
console.log('--menggunakan looping for method--');
//2. menggunakan looping for method
console.log('Looping pertama');
for (var i=1; i<=20; i++){
   console.log(i+ ' - I Love coding');
}
console.log('Looping kedua');
for (var j=20; j>=1; j--){
   console.log(j+ ' - I Love coding');
}

console.log('menggunakan kondisi untuk angka genap dan ganjil');
for (var i=1; i<=100; i++){
  if (i % 2 === 0) {
    console.log('Bilangan genap : ' +i);
  }
  else {
    console.log('Bilangan ganjil ' +i);
  }
}
console.log('counter untuk kelipatan tiga');
for (var j=1; j<=100; j+=2){
  if (j % 3 === 0) {
    console.log('Bilangan 3 kelipatan ' +j);
  }
}
console.log('counter untuk kelipatan enam');
for (var k=1; k<=100; k+=5){
  if (k % 6 === 0) {
    console.log('Bilangan 6 kelipatan ' +k);
  }
}
console.log('counter untuk kelipatan sepuluh');
for (var l=1; l<=100; l+=9){
  if (l % 10 === 0) {
    console.log('Bilangan 10 kelipatan ' +l);
  }
}

console.log('Rabu-[Exercises 7] Perulangan - Play with Asterisks')
//1. Menyusun Barisan Bintang
console.log('menyusun bintang jika rows1 = 5');
var rows1 = '';
for (var i=1; i<=5; i++){
  rows1 += '*'
  console.log(rows1);
  rows1=''
}
//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('menyusun bintang jika rows2 = 5');
var rows2 = '';
for (var a=1; a<=5; a++){
  for(var b=1; b<=5; b++){
  rows2 += '*'
  }  
  console.log(rows2);
  rows2=''
}  
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('menyusun bintang jika rows3 = 5');
var rows2 = '';
for (var a=1; a<=5; a++){
  rows2 += '*'
  console.log(rows2);
}  

console.log('Kamis-[Exercises 8] JavaScript Building Blocks: Codecademy JavaScript Course (Unit 3 - Functions)');
console.log('Kamis-[Exercises 9] Berlatih Penggunaan Functions');
//1. tugas I - create function
console.log('tugas I - create function');
function shoutOut () {
  //BUATLAH KODE FUNCTION DISINI
  return 'Hallo Function';
}
console.log(shoutOut()); // Menampilkan "Halo Function!" di console

//2. tugas II - calculateMultiply function
console.log('tugas II - calculateMultiply()');
  
function calculateMultiply (num1, num2) {
 //BUATLAH KODE FUNCTION DISINI
  return num1 * num2;
}
  var num1 = 5;
  var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log('hasilPerkalian : ' +hasilPerkalian); // Menampilkan angka 30

//3. tugas III - processSentence function
console.log('tugas III - processSentence()');
function processSentence () {
//BUATLAH KODE FUNCTION DISINI
  return 'Nama saya ' +name+ ', umur saya ' +age+ ' tahun, alamat saya di ' +address+ ', dan saya punya hobby yaitu ' +hobby+ '!'; 
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

console.log('Jumat-[Exercises 10] Bandingkan Angka')
//1. Logic Challenge - Bandingkan Angka
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2){
    return true;
  } 
  else if (angka1 > angka2) {
    return false;
  }
  else {
    return -1;
  }
}
// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log('Jumat-[Exercises 11] Balik Kata');
//2. Balik Kata
function balikKata(kata) {
  var balikKata=''
  // you can only write your code here!
  for (var i=kata.length-1; i>=0; i--){
    balikKata += kata[i];
  }
  return balikKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log('Jumat-[Exercises 12] Konversi Menit');
//3.Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit/60;
  var isHours = Math.floor(jam);
  //console.log(isHours);
  
  var minute = menit % 60;
  //console.log(minute);
  var nol='';
  if(minute < 10) {
    nol += 0;
  }
  return isHours+ ':' +nol+ +minute; 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log('[Exercises 13] X dan O');
//4. Logic Challenge - X dan O
function xo(str) {
  // you can only write your code here!
  var isX = 0 ;
  var isO = 0 ;
  for (var i=0; i<str.length; i++) {
    if (str[i] === 'x') {
      isX++;
    }
    else {
      isO++;
    }
  }
  //console.log(isX);
  //console.log(isO);
  if (isX === isO) {
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(xo('xoxooxxo')); // true