function ubahHuruf(kata) {
  
  //Membuat variabel abc-z
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //memisahkan per kata
  var arr = kata.split('')
  var simpan=[]; //simpan untuk hasil
  
  for (var i=0; i<arr.length; i++){
    var ubah1 = abc.indexOf(arr[i]); //mencari nilai di parameter 
    var ubah2 = ubah1 + 1; //menambhkan nilai utk output
    var ubah3 = abc[ubah2]; //membuat variabel hasil
    simpan.push(ubah3);
  }
  
  var ubah4 = simpan.join(''); //buat join n variabel hasil
  return ubah4;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu