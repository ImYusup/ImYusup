/*
==================================
Array Mastery: Separate Them
==================================

Function separateThem akan menerima satu parameter berupa array yang berisi string pasangan nama student dengan format 'NAMA_STUDENT_1 dan NAMA_STUDENT_2'.
Function ini akan memecah setiap kelompok menjadi per orang satu per satu.
[CONTOH]
input: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri']

input: ['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhie']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rodhie']

input: []
output: []

*/

function separateThem(students) {
  
  //variabel untuk menampung sebuah group
  if (students[0] === undefined) {
    return [];
  }
  var group =[];
  //coding splite space be array
  students += ' '; 
  let simpan = [];
  let tampung = '';
  
  for (let i=0; i<students.length; i++){
    if (students[i] === ' ' || students[i] === ',') {
      simpan.push(tampung);
      tampung = '';
    } 
    else {
      tampung += students[i];
    }
  } 
  //console.log(simpan);
  
  let hasil = []; 
  for (let j=0; j< simpan.length; j++) {
    if (simpan[j] !== 'dan') {
      hasil.push(simpan[j]);
    }
   }
  return hasil;
}
  
// TEST CASES
console.log(separateThem(['Budi dan Badu'])); // ['Budi', 'Badu']
console.log(separateThem(['Budi dan Michael'])); // ['Budi', 'Michael']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhes'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rhodes']
console.log(separateThem([])); // []