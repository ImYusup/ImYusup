/*
=============
UNIQUE FINDER
=============
Name :_____________

[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi kata yang duplikat atau lebih dari satu.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.


[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata duplikat: saya
output: ['saya']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function uniqueFinder(sentence) {
  //your code here
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'dragon']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello']
console.log(uniqueFinder('john is coding and he is coding')); // ['is', 'coding']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'
