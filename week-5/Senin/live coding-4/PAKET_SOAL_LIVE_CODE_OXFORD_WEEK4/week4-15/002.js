/*
================
Break Sentence
================

Name :_____________

[INSTRUCTIONS]

breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.


[CONSTRAINTS]
Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.

[EXAMPLE]
breakSentence('I am so amazed')

output: ['i', 'am', 'so', 'amazed']
*/

function breakSentence(sentence) {
  // Variable untuk menyimpan array dari pecahan kata.
  var words = [];
  
  // Indeks untuk looping setiap huruf
  var i = 0;
  
  // Variable sementara untuk menampung 1 pecahan kata
  var word = '';
  
  // Loop setiap karakter/huruf dalam sentence.
  while (i < sentence.length) {
    // Menemukan spasi, akhir dari 1 pecahan kata:
    // step-1: Jika ada pecahan kaya yang terbentuk (word), tambahkan ke array words
    // step-2: Reset kembali variable word untuk kata berikutnya
    if (sentence[i] === ' ') {
      if (word !== '') {
         words.push(word); // step-1
      }
     
      word = ''; // step-2
    } else {
      // Karakter bukan spasi, tambahkan huruf ke variable word
      // untuk membentuk pecahan kata
      word += sentence[i];
    }
    
    i++;
  }
  
  return words;
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week4 is so easy')); // ['week4', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']