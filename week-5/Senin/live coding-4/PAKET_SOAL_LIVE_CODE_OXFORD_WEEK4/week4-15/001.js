/*
======================
Highest Global Minimum
======================

Name :_____________

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.


[CONSTRAINTS]
Hanya boleh menggunakan sintaks for/while dan if else untuk pemecahan masalah.
Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.


[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

function highestGlobalMinimum(firstArr, secondArr) {
  // Cari angka minimum dari array firstArr.
  var minimum1 = getMinimum(firstArr);
  // Cari angka minimum dari array secondArr.
  var minimum2 = getMinimum(secondArr);
  
  // minimum1 lebih besar dari minimum2
  if (minimum1 > minimum2) {
    return minimum1;
  }
  
  // minimum2 lebih besar dari minimum1
  return minimum2;
}

// Mendapatkan angka minimum dari array numbers.
function getMinimum(numbers) {
  // Variable untuk menampung angka minimum.
  // Asumsi awal, angka pertama dalam numbers adalah yang paling kecil.
  var minimum = numbers[0];
   
  // Loop mulai dari i = 1 (angka ke-dua).
  for (var i = 1; i < numbers.length; i++) {
    // Jika angka tersebut lebih kecil dari isi variable minimum
    // jadikan angka tersebut sebagai pengganti nilai paling minimum
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  
  return minimum;
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
