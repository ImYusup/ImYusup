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
  WKWK-<TAHUN> => untuk pendaftar yang warga negara 'wkwkland'. <TAHUN> mewakili selisih tahun 2017 dengan umur.
  ABCD-<TAHUN> => untuk pendaftar yang bukan warga negara 'wkwkland'. <TAHUN> mewakili selisih tahun 2017 dengan umur.

  Contoh:
  Untuk yang citizenship = 'wkwkland' dengan age = 17,
  maka ubah taxID menjadi 'WKWK-2000'.

  Untuk yang citizenship = 'Indonesia' dengan age = 20,
  maka ubah taxID menjadi 'ABCD-1997'.

Ketentuan
=========
Diberikan variable name, age, citizenship, dan taxID.
Dipersilahkan mengganti nilai dari name, age dan citizenship secara manual, dan gantilah taxId sesuai dengan ketentuan program.

*/

// SKELETON CODE (Code Sample)

var name = 'Joni'; // silakan berikan nilai bebas
var age = 17; // silakan berikan nilai bebas
var citizenship = 'wkwkland'; // silakan berikan nilai bebas
var taxId; // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!

// Buat code disini

// Step 1. Jika name kosong, maka tampilkan di console "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!" dan hentikan program.
if (name == '') {
  console.log('NAMA ANDA KOSONG! TIDAK BISA DAFTAR!');
} else {
  // Pada block else ini, variable name tidak kosong
  // Step 2. Jika age dibawah 17 tahun, maka tampilkan di console "BELUM CUKUP UMUR!" dan hentikan program.
  if (age < 17) {
    console.log('BELUM CUKUP UMUR!');
  } else {
    // Pada block else ini, variable name tidak kosong dan age >= 17
    // Step 3. program akan mengenerate Tax ID dengan format:
    //   - WKWK-<TAHUN> => untuk pendaftar yang warga negara 'wkwkland'.
    //   - ABCD-<TAHUN> => untuk pendaftar yang bukan warga negara 'wkwkland'.
    // Baik warga negara wkwkland atau negara lainnya, sama-sama memiliki bagian <TAHUN> pada Tax ID nya: selisih tahun 2017 dan umur
    var tahun = 2017 - age;
    
    // Untuk warga negara wkwkland
    if (citizenship == 'wkwkland') {
      taxId = 'WKWK-' + tahun;
    } else {
      // Unutk warga negara selain wkwkland
      taxId = 'ABCD-' + tahun;
    }
    
    // Cetak hasilnya:
    console.log('Nama: ' + name);
    console.log('Umur: ' + age);
    console.log('Warga Negara: ' + citizenship);
    console.log('Tax Id: ' + taxId);
  }
}

