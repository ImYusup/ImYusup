console.log('[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)');
//2. Mengakses Nilai Dalam Array
function balikKata (string) {
 var hasilKata = '';
 for (var i=string.length-1; i>=0; i--){
   hasilKata += string[i];
 }
 return hasilKata; 
}
console.log(balikKata('hello world'));
//input "hello world!"
//output
"!dlrow olleh";
