<<<<<<< HEAD
console.log('[Exercises 4] Cari Modus');
function cariModus(arr) {
  // you can only write your code here!
  var unik = []; //mencari nilai array unik
  var frequensi = []; //memasukan frequensi dari angka unik
  //1. menghitung frequensi dari angka unik
  for (var i = 0; i < arr.length; i++) {
    var simpan = unik.indexOf(arr[i]);
    //console.log(simpan);
    //2. menghitung frequensi dari angka unik
    if (simpan === -1) {
      //inisial untuk tidak ketemu array (masih kosong)
      unik.push(arr[i]); //masukan arr ke unik array
      frequensi.push(1); //frequensi array bernilai 1
    } else {
      frequensi[simpan]++; //jika ketemu, frequensi array menjadi increase
    }
  }
  //console.log('Angka Unik : ' + unik);
  //console.log('Nilai sering keluar I : ' + frequensi);

  //3. mencari looping terbesar pada frequensi
  var isFrequensi = 1;
  for (var j = 0; j < frequensi.length; j++) {
    if (frequensi[j] > isFrequensi) {
      isFrequensi = frequensi[j];
    }
  }
  //console.log('Nilai sering keluar II : ' +isFrequensi);

  //Mencari nilai hasil dengan index array
  var isSimpan = frequensi.indexOf(isFrequensi);
  for (var k = 0; k < frequensi.length; k++) {
    if (frequensi[k] === 2) {
      return arr[isSimpan];
    } else if (isFrequensi !== 2) {
      return -1;
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
=======
console.log('[Exercises 4] Cari Modus');
function cariModus(arr) {
  // you can only write your code here!
  var unik = []; //mencari nilai array unik
  var frequensi = []; //memasukan frequensi dari angka unik
  //1. menghitung frequensi dari angka unik
  for (var i = 0; i < arr.length; i++) {
    var simpan = unik.indexOf(arr[i]);
    //console.log(simpan);
    //2. menghitung frequensi dari angka unik
    if (simpan === -1) {
      //inisial untuk tidak ketemu array (masih kosong)
      unik.push(arr[i]); //masukan arr ke unik array
      frequensi.push(1); //frequensi array bernilai 1
    } else {
      frequensi[simpan]++; //jika ketemu, frequensi array menjadi increase
    }
  }
  //console.log('Angka Unik : ' + unik);
  //console.log('Nilai sering keluar I : ' + frequensi);

  //3. mencari looping terbesar pada frequensi
  var isFrequensi = 1;
  for (var j = 0; j < frequensi.length; j++) {
    if (frequensi[j] > isFrequensi) {
      isFrequensi = frequensi[j];
    }
  }
  //console.log('Nilai sering keluar II : ' +isFrequensi);

  //Mencari nilai hasil dengan index array
  var isSimpan = frequensi.indexOf(isFrequensi);
  for (var k = 0; k < frequensi.length; k++) {
    if (frequensi[k] === 2) {
      return arr[isSimpan];
    } else if (isFrequensi !== 2) {
      return -1;
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(cariModus([7, 7, 7, 7, 7])); // -1