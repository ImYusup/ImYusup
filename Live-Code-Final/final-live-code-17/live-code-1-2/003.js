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
34
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