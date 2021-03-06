/*
===================================
Array Mastery: Plus Minus Operation
===================================

Nama:________

[INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (+) dan kurang (-).

Function plusMinusProcess akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol +, dan - berturut-turut.
Simbol akan berotasi kembali ke + jika operasi - sudah dilakukan, sampai semua angka selesai di proses.

Gambaran Proses:
0 + angka pertama - angka kedua + angka ketiga - angka keempat + angka kelima - angka keenam + ... (dan seterusnya)


Function akan mereturn hasil kalkulasi dari operasi tersebut.
Jika tidak ada angka yang diberikan, function akan me-return 0.

[CONTOH]
input: [1, 2, 3, 4, 5]
proses: 0 + 1 - 2 + 3 - 4 + 5
output: 3

input: [5, 4, 3, 2, 1, 2]
proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
output: 1

input: [1, 1, 1, 1]
proses: 0 + 1 - 1 + 1 - 1
output: 0

input: []
proses: 0
output: 0
*/

function plusMinusProcess(numbers) {
  // Variable untuk menampung hasil.
  var result = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
      // Jika index genap: 0, 2, 4, 6, dst: lakukan penjumlahan.
      result += numbers[i];
    } else {
       // Jika index ganjil: 1, 3, 5, 7, dst: lakukan pengurangan.
      result -= numbers[i];
    }
  }

  return result;
}
  
// TEST CASES
console.log(plusMinusProcess([1, 2, 3, 4, 5])); // 3
console.log(plusMinusProcess([5, 4, 3, 2, 1, 2])); // 1
console.log(plusMinusProcess([1, 1, 1, 1])); // 0
console.log(plusMinusProcess([0, 10, 2, 5, 7])); // -6
console.log(plusMinusProcess([])); // 0
