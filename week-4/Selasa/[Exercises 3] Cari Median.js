<<<<<<< HEAD

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