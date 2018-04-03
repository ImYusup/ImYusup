function tambahDash(str) {
  
  var ubah = '';
  
  for (var i=0; i<str.length; i++){
    //buat kondisi bilangan ganjil
    if (str[i+1] % 2 ===1 && str[i] % 2 === 1 ) {
      ubah += str[i] + '-'; //gabdungkan dash '-'
    }
    else {
      ubah += str[i]; //masukan angka genap
    }
  }
  return ubah;
}

// TEST CASES
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'