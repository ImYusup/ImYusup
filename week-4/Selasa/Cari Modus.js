function cariModus(arr) {
  var hitung1 = 0;
  var hitung2 = 0;
  var modus =0; 
  
  //rumus untuk mencari modus
  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr.length; j++){
      if (arr[i] === arr[j] && j !== i) {
        hitung1++
   //rumus untuk mencari modus      
        if (hitung1 > hitung2) {
          hitung2 = hitung1
          modus = i
        }
      }
    }
  }
  // hasil -1 jika gga ada nilai frequensi
  if (modus === 0) {
    return -1;
  }
  // hasil -1 jika semua nilai sama
  var coba = 0;
  for (var k=0; k<arr.length; k++){
     coba += arr[k]; //Looping untuk nilai sama semua
     if (coba/arr.length === arr[k]) {
       return -1
     } 
    }
  return (arr[modus]);
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1


 /* 
1. mencari angka unik didalam aray 
2. cari frekuensi dari setiap angka unik 
3. cari frekuensi terbesar 
4. cari angka unik mana yang punya frekuensi terbesar 
yang ada commentnya khusus soal yg nomer 1 [10,4,5,2,4]
biar keliatan angka2nya disetiap stepnya di console.log aja 
*/

function cariModus(arr){
  var  uniques = [] ; // untuk memasukan angka unik 
  var freqs = []; // untuk memasukan jumlah freqs dari angka unik 

// 1. mencari angka unik untuk di masukan ke array    
  for(var i = 0; i < arr.length ; i++){
  var position = uniques.indexOf(arr[i]);//mencari angka di array uniques 
//2. menghitung jumlah frekuensi dari angka unik  
  if (position === -1){ //karena gk ketemu, karena array uniques masih kosong
    uniques.push(arr[i]);// angka di arr, masuk ke array uniques
    freqs.push(1);// dan jumlah frekuensinya di tambah 1 
    }else { // jika ketemu, angka uniques yang sama harus nambah frekuensi nya 
      freqs[position]++;    
    }
  }
  console.log('Uniques : ' +uniques);
  console.log('Frequenty : ' +freqs);
  console.log('Position : ' +position);
  //3. looping mencari frekuensi terbesar
  var biggestFreq = 0 ;
  for (var j = 0 ; j< freqs.length ; j++){
    if(freqs[j] > biggestFreq){
      biggestFreq = freqs[j];  // didapat kalau biggestFreq = 2 
    }
   }
  console.log('Biggest Freq : ' +biggestFreq);
  //4. cari angka unik mana yang punya freq terbesar 
  var biggestPosition = freqs.indexOf(biggestFreq); // biggestFreq = 2, diindex keberapa pada array freqs yang mempunyai nilai 2 , jawabannya di index ke 1
  console.log('Biggest Position : ' +biggestPosition);
  if(biggestFreq === 1){
    return -1
  }else if(uniques.length <= 1 ){
    return -1
  }else {
  var mode = uniques[biggestPosition]; // biggestPosition = 1, nilai array uniques di index ke 1 adalah 4
  }
  return mode
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1