/*Tugas 1
Buatlah sebuah code yang mentransformasi array menggunakan map!*/

var transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  return arr.map(coba => {return coba.toLowerCase()});
  
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

/* Tugas 2
Buatlah sebuah code yang melakukan filter ke array menggunakan filter!*/

var filterArrUnder10 = arr => {
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
  return arr.filter(coba => {return coba>9});
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

/*Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!*/

var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  let coba = arr.reduce((x,y) => {
    let hasil = x>y ? x : x = y ;
    return hasil;
  })
  return coba;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9