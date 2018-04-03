function kaliTerusRekursif(angka) {
  if (angka < 10){
    return angka;
  }
  else {
    var coba = String(angka);
    var hasil=1;
    for (var i=0; i<coba.length; i++){
      hasil = hasil * coba[i];
      }
    return kaliTerusRekursif(hasil);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6