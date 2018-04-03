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
 sentence += ' '; //menambah satu array terkakhir
  var mukidi = [];
  var tampung ='';
  
  for (var i=0; i<sentence.length; i++){
    if (sentence[i] === ' ') {
      mukidi.push(tampung);
      tampung = '';
    } 
    else {
      tampung += sentence[i];
    }
  } //console.log(mukidi);

  if (mukidi[0] === '' && mukidi.length === 1) {
    return [];  
  } 
  else {
    return mukidi;
  }
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week4 is so easy')); // ['week4', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']