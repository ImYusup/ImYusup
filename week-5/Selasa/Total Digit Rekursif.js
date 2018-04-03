function totalDigitRekursif(angka) {
  if (angka < 10){
    return angka;
  }
  else {
    var coba = String(angka);
    var coba1 = Number(coba[0]);
    var coba2 = Number(coba.slice(1, coba.length));
    //Hasil
    return coba1 + totalDigitRekursif(coba2);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5