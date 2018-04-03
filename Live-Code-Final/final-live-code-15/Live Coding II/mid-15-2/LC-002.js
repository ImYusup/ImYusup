/*
==================================
Array Mastery: Pair Up
==================================

Nama:________

[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.

Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']

input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']

input: []
output: []

*/

function pairUp(students) {
  // Variable untuk menampung setiap group.
  var groups = [];
  
  // Loop i - jumlah students
  // Dengan index i naik dengan kelipatan dua: 0, 2, 4, dst
  for (var i = 0; i < students.length; i += 2) {
    // Anggota 1 dari group.
    var member1 = students[i];
    var member2;

    if (students[i + 1]) {
      // Jika masih ada student setelahnya, masukan ke group.
      member2 = students[i + 1];
    } else {
      // Jika tidak ada lagi studen setelahnya, pasangkan dengan instruktur.
      member2 = 'Instruktur';
    }
    
    // Tambahkan group ke array groups.
    groups.push(member1 + ' dan ' + member2);
  }

  return groups;
}
  
// TEST CASES
console.log(pairUp(['Budi', 'Badu'])); // ['Budi dan Badu']
console.log(pairUp(['Budi'])); // ['Budi dan Instruktur']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []
