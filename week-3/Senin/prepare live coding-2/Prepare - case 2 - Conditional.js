/*
Kasus Ibu Belanja
===================
Latihan Conditional

Seorang ibu memiliki sejumlah uang dan ingin berbelanja ke supermarket. Jika uang minimal 50.000, maka ia dapat membeli daging (menampilkan "DAGING" di log), dan jika dibawah 50.000 tapi masih minimal 30.000, ia dapat membeli ayam (menampilkan "AYAM" di log). Jika uang dibawah 30.000, maka ia dapat membeli mie instant (menampilkan "MIE INSTANT" di log). Kamu dapat dengan bebas mengganti jumlah uang si ibu untuk menge-testnya.

PEMECAHAN MASALAH
=================
1. Seorang ibu memiliki sejumlah uang. Maka dari itu buatlah variable bernama "uang".
2. Berdasarkan kondisi si soal, dapat kita lihat ada 3 kemungkinan:
 - uang minimal 50.000, maka bisa dikatakan bahwa "uang" >= 50000
 - jika dibawah 50.000 namun masih minimal 30.000, maka bisa dikatakan bahwa "uang" < 50000 DAN "uang" >= 30000  
 - jika dibawah 30.000, maka bisa dikatakan bahwa "uang" < 30000
3. Tampilkan barang yang bisa dibeli sesuai dengan kondisi yang diberikan.
4. Soal ini bisa memiliki banyak kemungkinan jawaban, namun kita akan coba cara yang paling sederhana terlebih dahulu.
*/

// SOLUSI 1, Hanya dengan IF tanpa ELSE

var uang = 60000; // silakan diganti untuk mengetest kemungkinan lain.

if(uang >= 50000) { // kemungkinan pertama
  console.log('DAGING');
}

if(uang < 50000 && uang >= 30000) { // kemungkinan kedua
  console.log('AYAM');
}

if(uang < 30000) { // kemungkinan ketiga
  console.log('MIE INSTANT');
}

/*
Pembahasan:
Solusi 1 merupakan solusi yang paling sederhana dan paling mirip dengan metode pemecahan masalah yang dijabarkan sebelumnya.
Kita akan mencoba melihat solusi 2 yang menggunakan if else yang "bertumpuk".

Untuk mencegah mendeklarasikan variabel yang sama, kita gunakan "uang2" sebagai variabel baru
*/

// SOLUSI 2, dengan IF dan ELSE tapi bertumpuk / nested

var uang2 = 60000; // silakan diganti untuk mengetest kemungkinan lain.

if(uang2 >= 50000) { // kemungkinan pertama
  console.log('DAGING');
} else {
  if(uang2 >= 30000) { // kemungkinan kedua, tapi tidak perlu mengecek jika dibawah 50.000 karena sudah masuk else
    console.log('AYAM');
  } else { // kemungkinan ketiga
    console.log('MIE INSTANT');
  }
}

/*
Pembahasan:
Solusi 2 merupakan solusi yang lebih efisien. Kita akan mencoba melihat solusi 3 yang menggunakan if else tapi dengan else if.

Untuk mencegah mendeklarasikan variabel yang sama, kita gunakan "uang3" sebagai variabel baru.
*/

// SOLUSI 3

var uang3 = 60000; // silakan diganti untuk mengetest kemungkinan lain.

if(uang3 >= 50000) { // kemungkinan pertama
  console.log('DAGING');
} else if(uang3 >= 30000) { // kemungkinan kedua
  console.log('AYAM');
} else { // kemungkinan ketiga
  console.log('MIE INSTANT');
}
