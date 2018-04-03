function tukarBesarKecil(kalimat) {
  
  var ubah = '';
  
  for (var i=0; i<kalimat.length; i++){
    var huruf = kalimat[i]
    if (huruf === huruf.toUpperCase()){
      ubah += huruf.toLowerCase();
    }
    else if (huruf === huruf.toLowerCase()) {
       ubah += huruf.toUpperCase();
    }
   else {
     ubah += huruf;
   }
  }
   return ubah;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"