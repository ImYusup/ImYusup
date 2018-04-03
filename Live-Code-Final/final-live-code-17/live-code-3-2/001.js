/**
================================
Array Mastery: Substract Evens and Odds
================================

[INSTRUKSI]

Function substractEvenOdd akan menerima satu parameter berupa array of number.
Kelompokkanlah hasil pengurangan bilangan yang genap dan bilangan yang ganjil dan
return array 2 dimensi di mana array pertama merupakan hasil pengurangan angka genap dan
array selanjutnya adalah hasil pengurangan angka ganjil

Contoh:
input: [3, 5, 7, 8]
output: [[8], [-9]]

input: [14, 4, 6, 2]
output: [[2], [0]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/
/*
1. Membuat tampung untuk nilai array ganjil dan tampung nilai array ganjil tersebut ke dalam tampung nilai.
2. Membuat tampung untuk nilai array genap dan tampung nilai array genap tersebut ke dalam tampung nilai.
3. Membuat nilai tampung array untuk genap dan ganjil
4. Looping untuk mengambil nilai array genap, dengan hasil pengurangan setiap nilai tersebut kecuali untuk  nilai array genap[0]  
5. Looping untuk mengambil nilai array ganjil, dengan hasil pengurangan setiap nilai tersebut kecuali untuk  nilai array ganjil[0] 
6. Membuat kondisi ketika nilai array ganjil atau genap bernilai undefined dan push masing-nilai tersebut ke dalam tampung masing-masing
7. Push nilai array dengan nilai hasil[0] untuk genap dan nilai hasil[1] untuk ganjil dan return hasilnya.
*/
function substractEvenOdd (arrNum) {
  
  var ganjil = [];
  var genap = [];

  for (var i=0; i< arrNum.length; i++){
    if (arrNum[i] % 2 !== 0) {
        ganjil.push(arrNum[i]);
      }
    else {
       genap.push(arrNum[i]);
      }
    }
  //console.log('genap : ' +genap);
  //console.log('ganjil : ' +ganjil);
  
  var hasil= [[], []];
   
  var isGenap = genap[0];
  for (var x=1; x<genap.length; x++){
     isGenap -= genap[x]; 
  }
  
  var isGanjil = ganjil[0];
  for (var y=1; y<ganjil.length; y++){
   isGanjil -= ganjil[y]; 
  }
  
if (isGanjil === undefined) {
  isGanjil = 0;
}
if (isGenap === undefined) {
  isGenap = 0;
}

 //var evens = hasilIsGenap[hasilIsGenap.length-1];
 //var odds = hasilIsGanjil[hasilIsGanjil.length-1];
 hasil[0].push(isGenap);
 hasil[1].push(isGanjil);
 return hasil;
}

console.log(substractEvenOdd([3, 5, 7, 8])); // [ [8], [-9] ]

console.log(substractEvenOdd([14, 4, 6, 2])); // [ [2], [0] ]

console.log(substractEvenOdd([])); // [ [0], [0] ]