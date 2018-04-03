/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/
/* psedeocode 
1. membuat tamoung array untuk variabel ganjil
2. membuat tamoung array untuk variabel genap
3. membuat looping dengan dimulai dari index satu, kurang dari panjang array dan penambahan satu
4. membuat kondisi untuk nilai array ganjil
5. selain itu membuat kodnisi untuk nilai array genap
6. tutup nilai looping tersebut
7. jika panjang nilai array ganjil lebih dari nol dan panjang nilai array genap lebih dari nol
   maka tampilkan hasil tersebut dengan ODDS nilai array ganjil dan evens nilau array genap
8. jika panjang nilai array ganjil lebih dari nol dan panjang nilai array genap sama dengan nol
   maka tampilkan hasil tersebut dengan string ODDS nilai array nilai array ganjil
9. jika panjang nilai array ganjil samsa dengan nol dan panjang nilai array genap lebih dari nol
   maka tampilkan hasil tersebut dengan string EVENS nilai array nilai array genap   
10. jika tidak ada panjang nilai array ganjil dan genap maka tampilkan kosong
*/

function groupOddEven(students) {
  // Code here
  var ganjil = [];
  var genap = [];
  
  for (var i=0; i<students.length; i++){
    if (students[i] % 2 !== 0){
      ganjil.push(students[i]);
    }
    else {
      genap.push(students[i]);
    }
  }
  //console.log('Ganjil : ' +ganjil);
  //console.log('Genap : ' +genap);
  if (ganjil.length > 0 && genap.length >0) {
    return 'ODDS : ' +ganjil.join(' , ') + ' EVENS : '+genap.join(' , '); 
  }
    else if (ganjil.length > 0 && genap.length === 0) {
    return 'ODDS : ' +ganjil.join(' , ');
    }
    else if (ganjil.length === 0 && genap.length > 0) {
    return 'EVENS : ' +genap.join(' , ');
    }
  else {
    return " ";
  }  
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
