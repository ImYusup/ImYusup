/*
Kasus Jalan Sehat
==============================
Latihan Looping

Seorang pejalan kaki akan berolahraga. Ia akan terus berjalan hingga mencapai 100 langkah. Setiap melakukan langkah, ia akan melangkah. Gunakan log untuk menampilkan aktivitas jalan (tampilkan "JALAN"). Kemudian, si pejalan kaki juga memiliki energi sejumlah 1000. Setiap kali melakukan 10 kali langkah, energi akan berkurang 50. Dengan melakukan looping, buatlah proses diatas serta tampilkan energi sisa setelah berjalan!

PEMECAHAN MASALAH
=================
1. Siapkan sebuah variable "langkah" yang dimulai dari 0, karena si pejalan kaki akan mulai dari 0.
2. Siapkan variable "energi" yang dimulai dari 10000.
3. Karena kita akan menggunakan looping, siapkan kondisi kapan pejalan kaki akan berhenti, yaitu saat "langkah" mencapai 100.
4. di dalam scope looping (while/for), buatlah sebuah console.log untuk menampilkan aktivitas melangkah.
5. masih di dalam scope looping, buatlah sebuah pengurangan energi sebesar 50.
6. masih di dalam scope looping, buatlah increment / penambahan nilai langkah, agar mencapai kondisi looping harus berhenti.
7. keluar dari scope looping (akan berjalan setelah loop selesai), buatlah console.log untuk menampilkan sisa energi.
*/

// SOLUSI MENGGUNAKAN WHILE

// deklarasikan variable langkah dan assign nilai dengan 0
var langkah = 0;
var energi = 10000;

// selama langkah belum mencapai 100, jalankan proses berjalan
while(langkah < 100) {
  console.log('JALAN DENGAN LANGKAH KE ' + langkah); // lakukan proses berjalan
  energi = energi - 50; // lakukan pengurangan terhadap energi
  langkah = langkah + 1; // lakukan increment terhadap variable langkah
}

console.log('SISA ENERGI: ' + energi);

// SOLUSI MENGGUNAKAN FOR
var energy2 = 10000;

for(var stepCount = 0; stepCount < 100; stepCount++) {
  console.log('JALAN DENGAN STEP KE ' + stepCount);
  energy2 = energy2 - 50;
}

console.log('SISA ENERGI: ' + energy2);