<<<<<<< HEAD
console.log('[Exercises 2] Faktor Persekutuan Terbesar');
function fpb(angka1, angka2) {
  // you can only write your code here!
  var tampungAngka1 = [];
  var tampungAngka2 = [];
  //Looping untuk angka1
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) tampungAngka1.push(i);
  }
  //Looping untuk angka2
  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) tampungAngka2.push(j);
  }
  //console.log('Angka1 : ' +tampungAngka1);
  //console.log('Angka2 : ' +tampungAngka2);
  var tampung = [];
  for (var m = 0; m < tampungAngka2.length; m++) {
    for (var k = 0; k < tampungAngka1.length; k++) {
      if (tampungAngka1[k] === tampungAngka2[m]) {
        tampung.push(tampungAngka1[k]);
      }
    }
  }
  //console.log('Array Tampung : ' +tampung);
  return tampung[tampung.length - 1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log('[Exercises 3] Cari Median');
function cariMedian(arr) {
  // you can only write your code here!
  var ganjil = Math.round((arr.length + 1) / 2);
  //console.log('Ganjil : ' +ganjil);

  if (arr.length % 2 === 1) {
    return arr[ganjil - 1];
  } else {
    var genap1 = arr.length / 2; //contoh soal 2 : 3
    var genap2 = arr.length / 2 + 1; //contoh soal 2 : 4
    var totalGenap = (arr[genap1 - 1] + arr[genap2 - 1]) / 2; //contoh soal 2 : arr[2] + arr[3]
    //console.log('Genap1 : ' +genap1);
    //console.log('Genap2 : ' +genap1);
    //console.log('Genap : ' +totalGenap);
    return totalGenap;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
=======
console.log('[Exercises 2] Faktor Persekutuan Terbesar');
function fpb(angka1, angka2) {
  // you can only write your code here!
  var tampungAngka1 = [];
  var tampungAngka2 = [];
  //Looping untuk angka1
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) tampungAngka1.push(i);
  }
  //Looping untuk angka2
  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) tampungAngka2.push(j);
  }
  //console.log('Angka1 : ' +tampungAngka1);
  //console.log('Angka2 : ' +tampungAngka2);
  var tampung = [];
  for (var m = 0; m < tampungAngka2.length; m++) {
    for (var k = 0; k < tampungAngka1.length; k++) {
      if (tampungAngka1[k] === tampungAngka2[m]) {
        tampung.push(tampungAngka1[k]);
      }
    }
  }
  //console.log('Array Tampung : ' +tampung);
  return tampung[tampung.length - 1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log('[Exercises 3] Cari Median');
function cariMedian(arr) {
  // you can only write your code here!
  var ganjil = Math.round((arr.length + 1) / 2);
  //console.log('Ganjil : ' +ganjil);

  if (arr.length % 2 === 1) {
    return arr[ganjil - 1];
  } else {
    var genap1 = arr.length / 2; //contoh soal 2 : 3
    var genap2 = arr.length / 2 + 1; //contoh soal 2 : 4
    var totalGenap = (arr[genap1 - 1] + arr[genap2 - 1]) / 2; //contoh soal 2 : arr[2] + arr[3]
    //console.log('Genap1 : ' +genap1);
    //console.log('Genap2 : ' +genap1);
    //console.log('Genap : ' +totalGenap);
    return totalGenap;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(cariMedian([7, 7, 8, 8])); // 7.5