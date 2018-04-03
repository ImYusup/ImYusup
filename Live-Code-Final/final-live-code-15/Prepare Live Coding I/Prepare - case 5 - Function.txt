/*

LATIHAN FUNCTION DENGAN 3 KASUS: CONDITIONAL, LOOPING, dan ARRAY.

SOAL 1
Kasus Ibu Belanja
=================================
Latihan Conditional dalam Function

Seorang ibu memiliki sejumlah uang dan ingin berbelanja ke supermarket. Jika uang minimal 50.000, maka ia dapat membeli daging (menampilkan "DAGING SAPI" di log), dan jika dibawah 50.000 tapi masih minimal 30.000, ia dapat membeli ayam (menampilkan "DAGING AYAM" di log). Jika uang dibawah 30.000, maka ia dapat membeli mie instant (menampilkan "MIE INSTANT" di log). Kamu dapat dengan bebas mengganti jumlah uang si ibu untuk menge-testnya.

Buatlah kasus tersebut ke dalam function yang bernama shoppingMom yang menerima satu parameter bernama money yang tipe data nya number. Manfaatkan parameter tersebut sebagai uang si ibu untuk berbelanja. Function akan mengembalikan nilai (return) barang yang sanggup di beli ibu.

*/

// SOLUSI

function shoppingMom(money) {
  if(money >= 50000) {
    return 'DAGING SAPI';
  } else if(money >= 30000) {
    return 'DAGING AYAM';
  } else {
    return 'MIE INSTANT';
  }
}

// TEST CASES (Test case adalah kemungkinan jawaban jika kita menjalankan function dengan parameter yang berbeda-beda)
console.log(shoppingMom(60000)); // DAGING SAPI
console.log(shoppingMom(10000)); // MIE INSTANT
console.log(shoppingMom(50000)); // DAGING SAPI
console.log(shoppingMom(40000)); // DAGING AYAM


/*
SOAL 2
Kasus Jalan Sehat
==============================
Latihan Looping

Seorang pejalan kaki akan berolahraga. Ia akan terus berjalan hingga mencapai langkah yang kita input. Setiap melakukan langkah, ia akan melangkah. Kemudian, si pejalan kaki juga memiliki energi sejumlah yang kita input. Setiap kali melakukan 10 kali langkah, energi akan berkurang 50. Dengan melakukan looping, buatlah proses diatas serta tampilkan energi sisa setelah berjalan!

Buatlah kasus tersebut menjadi sebuah function yang bernama jalanSehat yang menerima dua parameter, yaitu jumlahLangkahMaksimal dan energi. Masing-masing parameter bertipe data number. Function akan mengembalikan nilai berupa sisa energinya.
*/

function jalanSehat(jumlahLangkahMaksimal, energi) {
  for(var i = 0; i < jumlahLangkahMaksimal; i++) {
    energi -= 50; // sama saja dengan energi = energi - 50
  }
  
  return energi;
}

console.log(jalanSehat(100, 10000)); // 5000
console.log(jalanSehat(50, 10000)); // 75000
console.log(jalanSehat(200, 5000)); // -5000
console.log(jalanSehat(500, 50000)); // 25000
console.log(jalanSehat(1, 1)); // -49

/*
SOAL 3
Kasus Penghitung Dompet
=======================
Latihan Array

Seseorang sedang menghitung jumlah uang di dompetnya. Ia ingin hitung: berapa total uang yang ada di dompetnya. Uang dalam dompet akan direpresentasikan dalam bentuk array yang berisikan number.

Buatlah sebuah function bernama hitungIsiDompet yang menerima satu parameter bernama moneys yang bertipe data array yang berisikan number (array of number) dan mereturn total uang yang bertipe data number.
*/

function hitungIsiDompet(moneys) {
  var total = 0;

  for(var i = 0; i < moneys.length; i++) {
    var moneyInsideWallet = moneys[i];
    total = total + moneyInsideWallet;
  }
  
  return total;
}

console.log('TOTAL UANG: Rp. ' + hitungIsiDompet([10000, 20000])); // TOTAL UANG: Rp. 30000
console.log('TOTAL UANG: Rp. ' + hitungIsiDompet([50000, 50000, 20000])); // TOTAL UANG: Rp. 120000
console.log('TOTAL UANG: Rp. ' + hitungIsiDompet([10000, 20000])); // TOTAL UANG: Rp. 30000
console.log('TOTAL UANG: Rp. ' + hitungIsiDompet([10000, 50000])); // TOTAL UANG: Rp. 60000