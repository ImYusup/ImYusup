// Competency: Function + Looping + Conditional
/*

Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
x
oo
xxx

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo

*/

function drawLadder(row) {
  // Loop untuk tiap baris, dari 1 s/d row
  for (var i = 1; i <= row; i++) {
    var char = '';
    
    // Jika baris genap gunakan karakter 'o'
    if (i % 2 == 0) {
      char = 'o';
    } else {
      // Jika baris ganjil gunakan karakter 'x'
      char = 'x';
    }
    
    // Variable untuk menampung deretan karakter untuk tiap baris.
    var charSequence = '';
  
    // Loop untuk kolom, dari 1 s/d nomor baris (variable i)
    for (var j = 1; j <= i; j++) {
      charSequence += char;
    }
  
    console.log(charSequence);
  }
}

drawLadder(6);
drawLadder(3);