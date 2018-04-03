/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  // Code here
  words += ' ';
  let arrTampung = [];
  let strTampung = '';
  
  for (let i=0; i< words.length; i++){
    if (words[i] === ' '){
      arrTampung.push(strTampung);
      strTampung = '';
    }
    else {
      strTampung += words[i];
    }
  }
  //console.log(arrTampung);
  
  let totalLength = 0;
  for (var i=0; i< arrTampung.length; i++){
    totalLength += arrTampung[i].length;
  }
  //console.log('total length : ' +totalLength);
  
  let avarage = Math.round(totalLength / arrTampung.length);
  //console.log('rata2 : ' +avarage);
  
  let hasil = [];
  
  for (var j=0; j< arrTampung.length; j++){
    //console.log(words[j])
    if (arrTampung[j].length === avarage){
      hasil.push(arrTampung[j]);
    }
  }
  return hasil;
  
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
