console.log('Selasa - Mengenal Tipe Data Array'); 
console.log('[Exercises 1] JavaScript Building Blocks: Codecademy JavaScript Course');
//1. Codecademy 
console.log('[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)');
//2. Mengakses Nilai Dalam Array
function balikKata (string) {
 var hasilKata = '';
 for (var i=string.length-1; i>=0; i--){
   hasilKata += string[i];
 }
 return hasilKata; 
}
console.log(balikKata('hello world'));
//input "hello world!"
//output
"!dlrow olleh";

console.log('[Exercises 3] Tantangan Array 2 (Melooping menggunakan Array)');
//3.Melakukan Looping Data Array
//contoh input

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];  
function dataHandling (input) {            
     for (var i=0; i<input.length; i++){
       console.log('Nomor ID : ' +input[i][0]);
       console.log('Nama Lengkap : ' +input[i][1]);
       console.log('TTL : ' +input[i][2]);
       console.log('Hobi : ' +input[i][3]);
       console.log('______________________')
     }
                
} 
dataHandling(input);
/*Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun*/

console.log('[Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)');
//4.Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2 (input) {
  //Roman Alamsyah Elsharawy
  input.splice(1,1, 'Roman Alamsyah Elsharawy');
  //Provinsi Bandar Lampung
  input.splice(2,1, 'Provinsi Bandar Lampung');
  //Pria
  input.splice(4,0, 'Pria');
  //SMA Internasional Metro
  input.splice(5,1, 'SMA Internasional Metro');
  console.log(input);
  console.log('________________________________');
  //Mei
  var bulan = input[3].split('/');
  var namaBulan= '';
  switch (bulan[1]) {
    case '01' :namaBulan='January'; break;
    case '02' :namaBulan='February'; break;
    case '03' :namaBulan='Maret'; break;
    case '04' :namaBulan='April'; break;
    case '05' :namaBulan='Mei'; break;
    case '06' :namaBulan='Juni'; break;
    case '07' :namaBulan='Juli'; break;
    case '08' :namaBulan='Agustus'; break;
    case '09' :namaBulan='September'; break;
    case '10' :namaBulan='Oktober'; break;
    case '11' :namaBulan='November'; break;
    case '12' :namaBulan='Desember'; break;
    default:
  }
  console.log(namaBulan);
  console.log('________________________________');
  //[1989, 21, 05]
  var simpanTanggal=[];
  for (var i=0; i<bulan.length; i++) {
    simpanTanggal.push(parseInt(bulan[i]));
  }
  /*simpanTanggal.push(parseInt(bulan[1]));
  simpanTanggal.push(parseInt(bulan[2]));
  simpanTanggal.push(parseInt(bulan[0]));*/
  simpanTanggal.sort(function(value1, value2) {return value1 < value2});
  //console.log(simpanTanggal);
  var simpanHasil = simpanTanggal[2].toString();
  //console.log(simpanHasil);
  var tambah0 = '';
  if ( simpanHasil < 10) {
    tambah0 += 0;
  }
  var str = tambah0+simpanHasil;
  simpanTanggal.splice(2,1, str);
  console.log(simpanTanggal);
  console.log('________________________________');
  //21-05-1989
  console.log(bulan.join('-'));
  //Roman Alamsyah
  console.log('________________________________');
  console.log(input[1].split(' ').slice(0,2).join(' '));
}  
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
 
console.log('Rabu - Logic Challenges Refresh');
console.log('[Exercises 5 (Auto)] Palindrome');
//5. Logic Challenge - Palindrome
function palindrome(kata) {
  // you can only write your code here!
  var hasilKata = '';
  for (var i=kata.length-1; i>=0; i--){
    hasilKata += kata[i];
  }
  //console.log(hasilKata);
   return hasilKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

console.log('[Exercises 6 (Auto)] Palindrome Angka');
//6. Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
  // you can only write your code here!
  do {
    //increase number
    num++;
    //proses looping && polindrome
    var tampung = '';
    for (var i=String(num).length-1; i>=0; i--){
    tampung += String(num)[i];
    }
  }
  
  //batas stop untuk looping
  while (tampung !== String(num));
  return parseInt(tampung);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log('________________________________');
var angka1 = 117;
var status1 = false;

while(status1 === false){
  angka1++;

var tampung1 = '';
  for (var i = String(angka1).length-1; i >=0; i--){
    tampung1 += String(angka1)[i];
  }
  console.log(tampung1);
  status1 = tampung1 === String(angka1);
}

console.log(typeof(angka1));
console.log(typeof(status1));
console.log(typeof(tampung1));
console.log('Polindrome angka page ke-1 : ' +parseInt(tampung1));
console.log('_______________________________');


var angka2 = 117;
//var status2 = true;

do {
angka2++;
console.log(angka2);
var tampung2 = '';
  for (var i = String(angka2).length-1; i >=0; i--){
    tampung2 += String(angka2)[i];
  }
}

while (tampung2 !== String(angka2));
console.log(typeof(angka2));
console.log(typeof(tampung2));
console.log('Polindrome angka page ke-2 : ' +parseInt(tampung2));
console.log('________________________________');

console.log('[Exercises 7 (Auto)] Hitung Jumlah Kata');
//7. Logic Challenge - Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  kalimat += ' ';
  var totalKata = 0;
  for (var i=0; i<kalimat.length; i++){
    if (kalimat[i] === ' ') {
      totalKata++;
    }
  }
  return totalKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

console.log('[Exercises 8 (Auto)] Pasangan Angka Terbesar');
//8 Logic Challenge - Pasangan Angka Terbesar
function pasanganTerbesar(num) {
  // you can only write your code here!
  var convert = num.toString();
  var simpan = [];
  for (var i=0; i<convert.length; i++){
    simpan[i] = convert[i] + convert[i+1];
  }
  //console.log(simpan);
  //Sorting for array looping
  var tampung =0;
    for (var j=0; j<simpan.length; j++){
      for (var k=0; k<simpan.length-j-1; k++){
        if (parseInt(simpan[k]) > parseInt(simpan[k+1])){
        tampung = simpan[k];
        simpan[k] = simpan [k+1];
        simpan[k+1] = tampung;
      }
      /*if (parseInt(simpan[j]) > parseInt(simpan[j+1])){
        tampung = simpan[j+1];
        simpan[j+1] = simpan [j];
        simpan[j] = tampung;
        j=-1;
      }*/
      }
    }
  //console.log(simpan);  
  return simpan[simpan.length-1];  
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

console.log('Kamis - Kamis - More Logic Challenges'); 
console.log('[Exercises 9 (Auto)] Cari Mean');
//9. Logic Challenge - Mencari Mean
function cariMean(arr) {
  // you can only write your code here!
  var mean=0;
  for (var i=0; i<arr.length; i++){
    mean += arr[i];
    }
    //console.log(Math.round(mean/arr.length));
    return Math.round(mean/arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

console.log('[Exercises 10 (Auto)] Perkalian Unik');
//10. Logic Challenge - Perkalian Unik
function perkalianUnik(arr) {
  // you can only write your code here!
  var multiply =1;
  for (var i=0; i<arr.length; i++){
    multiply *= arr[i];
  }
  
  var tampung =[];
  var hasil=0;
  for (var j=0; j<arr.length; j++){
    hasil = multiply/arr[j];
    tampung.push(hasil);
  }
  return tampung;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

console.log('[Exercises 11 (Auto)] Deret Aritmatika');
//11. Logic Challenge - Tentukan Deret Aritmatika
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  for (var i=0; i<arr.length; i++){
    return arr[i+1] - arr[i] === arr[arr.length-1] -  arr[arr.length-2];
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

console.log('Kamis - [Exercises 12 (Auto)] Deret Geometri');
//12.Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
  // you can only write your code here!
    for (var i=0; i<arr.length; i++){
    return arr[i+1] / arr[i] === arr[arr.length-1] /  arr[arr.length-2];
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

console.log('Jumat - More Arrays + Multidimensional Array'); 
console.log('[Exercises 13 (Auto)] Target Terdekat');
//13.Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  // you can only write your code here!
  var lookingO = arr.indexOf('o');
  //console.log('Nilai O : ' +lookingO);
  var isJarak = 0; //lookingO-i
  var realJarak = arr.length; //return hasil
  
  for (var i=0; i<arr.length; i++){
    if (arr[i] === 'x') {
      isJarak = Math.abs(lookingO-i);
        if (isJarak < realJarak) {
        realJarak = isJarak;
      }
    }
  }
  if (arr.indexOf('x') ===-1) {
    return 0;
  }
  //console.log('Real Jarak : ' +realJarak);
  return realJarak;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2

console.log('[Exercises 14] Mengelompokkan Angka');
//14. Logic Challenge - Mengelompokkan Angka
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var angkaGenap = [];
  var angkaGanjil = [];
  var angkaKelpatanTiga = [];
  var tampung = [];
  
  for (var i=0; i<arr.length; i++){
    if (arr [i] % 2 === 0 && arr [i] % 3 !== 0) {
      angkaGenap.push(arr[i]);
    }
    else if (arr [i] % 3 === 0) {
      angkaKelpatanTiga.push(arr[i]);
    }
    else {
      angkaGanjil.push(arr[i]);
    }
  }
  //console.log('Angka Genap : ' +angkaGenap);
  //console.log('Angka Ganjil : ' +angkaGanjil);
  //console.log('Angka Keliapatan 3 : ' +angkaKelpatanTiga);
  tampung[0] = angkaGenap;
  tampung[1] =  angkaGanjil;
  tampung[2] = angkaKelpatanTiga;
  //console.log(tampung);
  return tampung;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log('[Exercises 15] Mengelompokkan Hewan');
//15. Logic Challenge - Mengelompokkan Angka
function groupAnimals(animals) {
  // you can only write your code here!
 //console.log('Input : ' +animals);
 //buat group animals dengan huruf awal
 var animalsGroups = [];
 for (var i=0; i< animals.length; i++){
   animalsGroups.push([]); //push syntax [[]. [], ---]
   var indeks = 0;  // biar bernilai indeks [[0][0], [1][1]---]
   for (var j=0; j< animals.length; j++) {  
   if (animals[i][0] === animals[j][0]) { // compare huruf awal dgn looping ke dua
    animalsGroups[i][indeks] = animals[j]; 
    indeks ++;
   }
  }
  //indeks = 0;
 }
 //console.log(animalsGroups);
 
 //sort untuk nilai array
 var tampung=0;
 for (var i=0; i< animalsGroups.length; i++){
   for(var j=0; j< animalsGroups.length-i-1; j++){
     if(animalsGroups[j] > animalsGroups[j+1]){
       tampung = animalsGroups[j];
       animalsGroups[j] = animalsGroups[j+1];
       animalsGroups[j+1] = tampung;
     }
   }
 }
 //console.log(animalsGroups);
 
 //buat modus utk menghilangkan duplicate nilai array
 for (var i=0; i< animalsGroups.length-1; i++){
   if (animalsGroups[i][0] === animalsGroups[i+1][0]){
     animalsGroups.splice(i,1);
   }
 }
 //console.log(animalsGroups);
 return animalsGroups;
  
}
 
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


console.log('Selasa - Mengenal Tipe Data Array'); 
console.log('[Exercises 1] JavaScript Building Blocks: Codecademy JavaScript Course');
//1. Codecademy 
console.log('[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)');
//2. Mengakses Nilai Dalam Array
function balikKata (string) {
 var hasilKata = '';
 for (var i=string.length-1; i>=0; i--){
   hasilKata += string[i];
 }
 return hasilKata; 
}
console.log(balikKata('hello world'));
//input "hello world!"
//output
"!dlrow olleh";

console.log('[Exercises 3] Tantangan Array 2 (Melooping menggunakan Array)');
//3.Melakukan Looping Data Array
//contoh input

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];  
function dataHandling (input) {            
     for (var i=0; i<input.length; i++){
       console.log('Nomor ID : ' +input[i][0]);
       console.log('Nama Lengkap : ' +input[i][1]);
       console.log('TTL : ' +input[i][2]);
       console.log('Hobi : ' +input[i][3]);
       console.log('______________________')
     }
                
} 
dataHandling(input);
/*Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun*/

console.log('[Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)');
//4.Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2 (input) {
  //Roman Alamsyah Elsharawy
  input.splice(1,1, 'Roman Alamsyah Elsharawy');
  //Provinsi Bandar Lampung
  input.splice(2,1, 'Provinsi Bandar Lampung');
  //Pria
  input.splice(4,0, 'Pria');
  //SMA Internasional Metro
  input.splice(5,1, 'SMA Internasional Metro');
  console.log(input);
  console.log('________________________________');
  //Mei
  var bulan = input[3].split('/');
  var namaBulan= '';
  switch (bulan[1]) {
    case '01' :namaBulan='January'; break;
    case '02' :namaBulan='February'; break;
    case '03' :namaBulan='Maret'; break;
    case '04' :namaBulan='April'; break;
    case '05' :namaBulan='Mei'; break;
    case '06' :namaBulan='Juni'; break;
    case '07' :namaBulan='Juli'; break;
    case '08' :namaBulan='Agustus'; break;
    case '09' :namaBulan='September'; break;
    case '10' :namaBulan='Oktober'; break;
    case '11' :namaBulan='November'; break;
    case '12' :namaBulan='Desember'; break;
    default:
  }
  console.log(namaBulan);
  console.log('________________________________');
  //[1989, 21, 05]
  var simpanTanggal=[];
  for (var i=0; i<bulan.length; i++) {
    simpanTanggal.push(parseInt(bulan[i]));
  }
  /*simpanTanggal.push(parseInt(bulan[1]));
  simpanTanggal.push(parseInt(bulan[2]));
  simpanTanggal.push(parseInt(bulan[0]));*/
  simpanTanggal.sort(function(value1, value2) {return value1 < value2});
  //console.log(simpanTanggal);
  var simpanHasil = simpanTanggal[2].toString();
  //console.log(simpanHasil);
  var tambah0 = '';
  if ( simpanHasil < 10) {
    tambah0 += 0;
  }
  var str = tambah0+simpanHasil;
  simpanTanggal.splice(2,1, str);
  console.log(simpanTanggal);
  console.log('________________________________');
  //21-05-1989
  console.log(bulan.join('-'));
  //Roman Alamsyah
  console.log('________________________________');
  console.log(input[1].split(' ').slice(0,2).join(' '));
}  
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
 
console.log('Rabu - Logic Challenges Refresh');
console.log('[Exercises 5 (Auto)] Palindrome');
//5. Logic Challenge - Palindrome
function palindrome(kata) {
  // you can only write your code here!
  var hasilKata = '';
  for (var i=kata.length-1; i>=0; i--){
    hasilKata += kata[i];
  }
  //console.log(hasilKata);
   return hasilKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

console.log('[Exercises 6 (Auto)] Palindrome Angka');
//6. Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
  // you can only write your code here!
  do {
    //increase number
    num++;
    //proses looping && polindrome
    var tampung = '';
    for (var i=String(num).length-1; i>=0; i--){
    tampung += String(num)[i];
    }
  }
  
  //batas stop untuk looping
  while (tampung !== String(num));
  return parseInt(tampung);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log('________________________________');
var angka1 = 117;
var status1 = false;

while(status1 === false){
  angka1++;

var tampung1 = '';
  for (var i = String(angka1).length-1; i >=0; i--){
    tampung1 += String(angka1)[i];
  }
  console.log(tampung1);
  status1 = tampung1 === String(angka1);
}

console.log(typeof(angka1));
console.log(typeof(status1));
console.log(typeof(tampung1));
console.log('Polindrome angka page ke-1 : ' +parseInt(tampung1));
console.log('_______________________________');


var angka2 = 117;
//var status2 = true;

do {
angka2++;
console.log(angka2);
var tampung2 = '';
  for (var i = String(angka2).length-1; i >=0; i--){
    tampung2 += String(angka2)[i];
  }
}

while (tampung2 !== String(angka2));
console.log(typeof(angka2));
console.log(typeof(tampung2));
console.log('Polindrome angka page ke-2 : ' +parseInt(tampung2));
console.log('________________________________');

console.log('[Exercises 7 (Auto)] Hitung Jumlah Kata');
//7. Logic Challenge - Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  kalimat += ' ';
  var totalKata = 0;
  for (var i=0; i<kalimat.length; i++){
    if (kalimat[i] === ' ') {
      totalKata++;
    }
  }
  return totalKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

console.log('[Exercises 8 (Auto)] Pasangan Angka Terbesar');
//8 Logic Challenge - Pasangan Angka Terbesar
function pasanganTerbesar(num) {
  // you can only write your code here!
  var convert = num.toString();
  var simpan = [];
  for (var i=0; i<convert.length; i++){
    simpan[i] = convert[i] + convert[i+1];
  }
  //console.log(simpan);
  //Sorting for array looping
  var tampung =0;
    for (var j=0; j<simpan.length; j++){
      for (var k=0; k<simpan.length-j-1; k++){
        if (parseInt(simpan[k]) > parseInt(simpan[k+1])){
        tampung = simpan[k];
        simpan[k] = simpan [k+1];
        simpan[k+1] = tampung;
      }
      /*if (parseInt(simpan[j]) > parseInt(simpan[j+1])){
        tampung = simpan[j+1];
        simpan[j+1] = simpan [j];
        simpan[j] = tampung;
        j=-1;
      }*/
      }
    }
  //console.log(simpan);  
  return simpan[simpan.length-1];  
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

console.log('Kamis - Kamis - More Logic Challenges'); 
console.log('[Exercises 9 (Auto)] Cari Mean');
//9. Logic Challenge - Mencari Mean
function cariMean(arr) {
  // you can only write your code here!
  var mean=0;
  for (var i=0; i<arr.length; i++){
    mean += arr[i];
    }
    //console.log(Math.round(mean/arr.length));
    return Math.round(mean/arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

console.log('[Exercises 10 (Auto)] Perkalian Unik');
//10. Logic Challenge - Perkalian Unik
function perkalianUnik(arr) {
  // you can only write your code here!
  var multiply =1;
  for (var i=0; i<arr.length; i++){
    multiply *= arr[i];
  }
  
  var tampung =[];
  var hasil=0;
  for (var j=0; j<arr.length; j++){
    hasil = multiply/arr[j];
    tampung.push(hasil);
  }
  return tampung;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

console.log('[Exercises 11 (Auto)] Deret Aritmatika');
//11. Logic Challenge - Tentukan Deret Aritmatika
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  for (var i=0; i<arr.length; i++){
    return arr[i+1] - arr[i] === arr[arr.length-1] -  arr[arr.length-2];
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

console.log('Kamis - [Exercises 12 (Auto)] Deret Geometri');
//12.Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
  // you can only write your code here!
    for (var i=0; i<arr.length; i++){
    return arr[i+1] / arr[i] === arr[arr.length-1] /  arr[arr.length-2];
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

console.log('Jumat - More Arrays + Multidimensional Array'); 
console.log('[Exercises 13 (Auto)] Target Terdekat');
//13.Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  // you can only write your code here!
  var lookingO = arr.indexOf('o');
  //console.log('Nilai O : ' +lookingO);
  var isJarak = 0; //lookingO-i
  var realJarak = arr.length; //return hasil
  
  for (var i=0; i<arr.length; i++){
    if (arr[i] === 'x') {
      isJarak = Math.abs(lookingO-i);
        if (isJarak < realJarak) {
        realJarak = isJarak;
      }
    }
  }
  if (arr.indexOf('x') ===-1) {
    return 0;
  }
  //console.log('Real Jarak : ' +realJarak);
  return realJarak;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2

console.log('[Exercises 14] Mengelompokkan Angka');
//14. Logic Challenge - Mengelompokkan Angka
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var angkaGenap = [];
  var angkaGanjil = [];
  var angkaKelpatanTiga = [];
  var tampung = [];
  
  for (var i=0; i<arr.length; i++){
    if (arr [i] % 2 === 0 && arr [i] % 3 !== 0) {
      angkaGenap.push(arr[i]);
    }
    else if (arr [i] % 3 === 0) {
      angkaKelpatanTiga.push(arr[i]);
    }
    else {
      angkaGanjil.push(arr[i]);
    }
  }
  //console.log('Angka Genap : ' +angkaGenap);
  //console.log('Angka Ganjil : ' +angkaGanjil);
  //console.log('Angka Keliapatan 3 : ' +angkaKelpatanTiga);
  tampung[0] = angkaGenap;
  tampung[1] =  angkaGanjil;
  tampung[2] = angkaKelpatanTiga;
  //console.log(tampung);
  return tampung;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log('[Exercises 15] Mengelompokkan Hewan');
//15. Logic Challenge - Mengelompokkan Angka
function groupAnimals(animals) {
  // you can only write your code here!
 //console.log('Input : ' +animals);
 
let tampung = [];
  for (let i=0; i<animals.length; i++){
    tampung.push(animals[i][0]);
  }
  //console.log(tampung);
  
  //remove to duplicate Array && sort nilai array
  let isTampung = [];
  for (let j=0; j< tampung.length; j++){
    if (isTampung.indexOf(tampung[j]) === -1) {
      isTampung.sort().push(tampung[j]);
    }
  }
  //console.log(isTampung.sort());
  
  //push nilai semua array ke dalam multiple dimensi
  let hasilTampung = [];
  for (var i=0; i< isTampung.length; i++){
    hasilTampung.push([isTampung[i]]);
      for (var j=0; j< animals.length; j++){
        if (isTampung[i] === animals[j][0]){
          hasilTampung[i].push(animals[j]);
        }
      }
    }
  //console.log(hasilTampung);
  
 //menghilangkan semua huruf awal pada nilai array  
 //let hasil = hasilTampung[0][0];
 //console.log(hasil);
 for (let i=0; i< hasilTampung.length; i++){
   if (hasilTampung[i][0] === hasilTampung[i][1][0]) {
     hasilTampung[i].splice(0, 1);
   }
 }
 //console.log(hasilTampung);
 return hasilTampung;

 //buat group animals dengan huruf awal
 /*
 var animalsGroups = [];
 for (var i=0; i< animals.length; i++){
   animalsGroups.push([]); //push syntax [[]. [], ---]
   var indeks = 0;  // biar bernilai indeks [[0][0], [1][1]---]
   for (var j=0; j< animals.length; j++) {  
   if (animals[i][0] === animals[j][0]) { // compare huruf awal dgn looping ke dua
    animalsGroups[i][indeks] = animals[j]; 
    indeks ++;
   }
  }
  //indeks = 0;
 }
 //console.log(animalsGroups);
 
 //sort untuk nilai array
 var tampung=0;
 for (var i=0; i< animalsGroups.length; i++){
   for(var j=0; j< animalsGroups.length-i-1; j++){
     if(animalsGroups[j] > animalsGroups[j+1]){
       tampung = animalsGroups[j];
       animalsGroups[j] = animalsGroups[j+1];
       animalsGroups[j+1] = tampung;
     }
   }
 }
 //console.log(animalsGroups);
 
 //buat modus utk menghilangkan duplicate nilai array
for (var i=0; i< animalsGroups.length-1; i++){
     if (animalsGroups[i][0] === animalsGroups[i+1][0]){
       animalsGroups.splice(i,1);
     }
   }
   //console.log(animalsGroups);
  return animalsGroups;
 */   
}
 
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


