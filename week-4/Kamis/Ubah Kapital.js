function ubahKapital(kalimat) {
  
  //Ubah spasi array antar kalimat
  var ubah1 = kalimat.split(' ');
  
  for (var i=0; i<ubah1.length; i++){
    //Ubah spasi array antar kata
    var ubah2  = ubah1[i].split('');
    //Memberikan huruf kapital
    ubah2[0] = ubah2[0].toUpperCase();
    //Gabungkan ke kalimat semula
    ubah1[i] = ubah2.join('');
  }
   //mngilangkan per array pada kalimat
   var ubah3 = ubah1.join(' ');
   return ubah3;
      
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun