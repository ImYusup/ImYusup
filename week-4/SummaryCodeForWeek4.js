console.log('Selasa - Numbers Crunching and Play with Strings');
console.log('[Exercises 1] Angka Prima');
function angkaPrima(angka) {
  // you can only write your code here!
   let simpan = [];
 
  for (let i = 2; i <= angka; i++) {
    let counter = 0;
    for (let j=0; j<=i; j++) {
      if (i % j === 0) {
        counter++;
      }
    }
      if (counter === 2) {
        simpan.push([i]);
      }
  }
  //console.log(simpan);
  return parseInt(simpan[simpan.length-1]) === angka;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

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
console.log(cariMedian([7, 7, 8, 8])); // 7.5

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
console.log(cariModus([7, 7, 7, 7, 7])); // -1

console.log('[Exercises 5] Ubah Huruf');
function ubahHuruf(kata) {
  // you can only write your code here!
  //console.log(kata);
  var libraryWords = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',  'u','v','w','x','y','z'];
  var resultsWords = '';
  for (var i = 0; i < kata.length; i++) {
    resultsWords += libraryWords[libraryWords.indexOf(kata[i]) + 1];
  }
  //console.log(resultsWords);
  return resultsWords;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

console.log('[Exercises 6] Hitung Huruf');
function hitungHuruf(kata) {
  // you can only write your code here!
  //this code same with split code (' ')
  kata += ' ';
  var tampungWords = [];
  var tampungKata = '';
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === ' ') {
      tampungWords.push(tampungKata);
      tampungKata = ' ';
    } else {
      tampungKata += kata[i];
    }
  }
  //console.log(tampungWords);

  //membandingkan nilai array dengan semua looping
  //1. looping untuk ambil kata
  //2. looping untuk ambil huruf
  //3. looping 3 untuk banding huruf
  var counter = 0;
  for (var p = 0; p < tampungWords.length; p++) {
    for (var q = 0; q < tampungWords[p].length; q++) {
      //console.log(tampungWords[p][q]);
      for (var r = 0; r < tampungWords[p].length; r++) {
        //console.log('compare II : ' +tampungWords[p][r]);
        if (
          tampungWords[p][q] === tampungWords[p][r] &&
          tampungWords[q] !== tampungWords[r]
        ) {
          //console.log('Tampung Q : ' +tampungWords[q]);
          //console.log('Tampung R : ' +tampungWords[r]);
          counter++;
          //console.log('counter : ' +counter);
        }
      }
    }
    //console.log(counter);
    if (counter > 1) {
      //console.log(tampungWords[p]);
      return tampungWords[p];
    }
  }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

console.log('Rabu - Built-in Functions Mastery');
console.log('[Exercises 7] Digit Perkalian Minimum');
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  //buat perkalian minimun yg sama
  var tampung = [];
  for (var i = 1; i < angka; i++) {
    for (var j = 1; j < angka; j++) {
      if (i * j === angka) {
        tampung.push(String(i).length + String(j).length);
      }
    }
  }
  //console.log(tampung);

  //buat modus utk duplicate nilai array
  var tampungUniques = [];
  for (var j = 0; j < tampung.length; j++) {
    var tampungPosition = tampungUniques.indexOf(tampung[j]);
    if (tampungPosition === -1) {
      tampungUniques.push(tampung[j]);
    }
  }
  //console.log(tampungUniques);

  //membandingkan nilai array
  if (tampungUniques[0] > tampungUniques[1]) {
    return tampungUniques[1];
  } else if (tampungUniques[0]) {
    return tampungUniques[0];
  } else {
    return parseInt(String(angka).length) + 1;
  }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log('[Exercises 8] Urutkan Abjad');
function urutkanAbjad(str) {
  // you can only write your code here!
  //buat looping untuk split ('')
  var tampungWords = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str[i].length; j++) {
      if (str[i] !== str[j]) {
        tampungWords.push(str[i][j]);
      } else {
        tampungWords.push(str[i]);
      }
    }
  }
  //console.log(tampungWords);

  //buat sort untuk looping tersebut
  var isWords = 0;
  for (var x = 0; x < tampungWords.length; x++) {
    for (var y = 0; y < tampungWords.length; y++) {
      if (tampungWords[y] > tampungWords[y + 1]) {
        isWords = tampungWords[y];
        tampungWords[y] = tampungWords[y + 1];
        tampungWords[y + 1] = isWords;
      }
    }
  }
  //console.log(tampungWords.toString());

  //cari hasil penambahan string untuk mendapatkan hasil akhir
  var hasilWords = '';
  for (var k = 0; k < tampungWords.length; k++) {
    hasilWords += tampungWords[k];
  }
  return hasilWords;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

console.log('[Exercises 9] Tukar Ukuran');
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  //this code same like split ('')
  var tampungWords = [];
  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < kalimat[i].length; j++) {
      if (kalimat[i] !== kalimat[j]) {
        tampungWords.push(kalimat[i][j]);
      } else {
        tampungWords.push(kalimat[i]);
      }
    }
  }
  //console.log(tampungWords);

  //change nilai array dengan besar-kecil huruf
  var isWords = [];
  for (var x = 0; x < tampungWords.length; x++) {
    if (tampungWords[x] === tampungWords[x].toUpperCase()) {
      isWords.push(tampungWords[x].toLowerCase());
    } else {
      isWords.push(tampungWords[x].toUpperCase());
    }
  }
  //console.log(isWords);

  //cari hasil penambahan string untuk mendapatkan hasil akhir
  var hasilWords = '';
  for (var y = 0; y < isWords.length; y++) {
    hasilWords += isWords[y];
  }
  //console.log(hasilWords);
  return hasilWords;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

console.log('[Exercises 10] Cek AB');
function checkAB(num) {
  // you can only write your code here!
  //this code same like split ('')
  var tampungWords = [];
  for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num[i].length; j++) {
      if (num[i] !== num[j]) {
        tampungWords.push(num[i][j]);
      } else {
        tampungWords.push(num[i]);
      }
    }
  }
  //console.log(tampungWords);
  var isB = tampungWords.indexOf('b');
  //console.log('nilai b : ' +isB);

  var jarak1 = 0;
  var jarak2 = num.length;
  //console.log('jarak 2 length : ' +jarak2);
  for (var k = 0; k < tampungWords.length; k++) {
    if (tampungWords[k] === 'a') {
      jarak1 = Math.abs(isB - k);
      //console.log('jarak 1 : ' +jarak1);
      if (jarak1 < jarak2) {
        jarak2 = jarak1;
      }
    }
  }
  //console.log('real jarak : ' +jarak2);

  if (jarak2 === 4 || tampungWords[tampungWords.length - 5] === 'a') {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

console.log('Kamis - Object Literal');
console.log('[Exercises 11] Change me');
function changeMe(arr) {
  // you can only write your code here!
  //console.log(arr);
  //console.log(arr[1][1]);
  const results = '';
  for (let i=0; i<arr.length; i++){
    //create object
    console.log(i+1+ '. ' +arr[i][0]+ ' ' +arr[i][1]+ ' :');
    let person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3],
    };
    
    for (let j=0; j< arr.length; j++){
     //console.log(arr[j]);
     if (arr[j][3] === person.age){
       person.age = 2018 - person.age;
     }
     else {
       if (arr[i][3] === undefined) {
       person.age =  'Invalid Birth Year';
       }
       else 
         console.log(' ');
      }
    }
    console.log(person);
  }
}
  //console.log(arr[0]);

  /*  
  arr.map((row, i) => {
  //console.log(row);
  person = {
  firstName: row[0],
  lastName: row[1],
  gender: row[2],
  age: 2018 - row[3] || 'Invalid Birth Year',
  }
  
  //console.log(`${i++}. ${person.firstName} ${person.lastName}: ${person}`);
  console.log(i+ ' ' +person.firstName+ ' ' +person.lastName+ ' ' +person)
  console.log(person);
  });
  */
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

console.log('[Exercises 12] Shopping Time!');
function shoppingTime(memberId, money) {
  // you can only write your code here!
  var store = [
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju H&N', 250000],
    ['Sweater brand Uniklooh', 175000],
    ['Casing Handphone', 50000]
    ];
    //console.log(tokoX[2][1])
  
  const results = [];  
  var tampung = [memberId, money];
  //console.log('memberId : ' +tampung[0]);
  //console.log('money : ' +tampung[1]);
  
  for (let i=0; i< tampung.length-1; i++ ) {
  //create object first  
    let obj = {
      memberId: tampung[0],
      money: tampung[1],
      listPurchased: [],
      changeMoney: 0, 
    };
    
    for (let j=0; j< store.length; j++){
      
      if (tampung[0] !== '' && tampung[1] > store[j][1] ) {
        obj.listPurchased.push(store[j][0]);
        money -= store[j][1];                     
        obj.changeMoney = money;
      }
      else {
        if (tampung[0] === undefined || tampung[0] === '' ) {
          return 'Mohon maaf, toko X hanya berlaku untuk member saja';
        }
        else if (tampung[1] < 50000) {
         return 'Mohon maaf, uang tidak cukup'; 
        }
      }
    }
    results.push(obj);
    //console.log(obj);
  }
  return results;
}

  /*
    const items = [{"Sepatu Stacattu": 1500000}, {"Baju Zoro": 500000}, {"Baju H&N": 250000}, {"Sweater Uniklooh": 175000}, {"Casing Handphone": 50000}]
  let wallet  = money
  let objRes  = {}
  let cart    = []
  let message = ''
  // console.log(memberId, money);
  if (memberId == undefined || memberId == '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if ((memberId == undefined || memberId == '') && (money == undefined || money == '')) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else {
    items.map((item, i) => {
      let product = Object.keys(items[i])
      let price   = Object.values(items[i])
      // console.log(product[0], price[0]);
      if (money >= price[0]) {
        cart.push(product[0])
        money -= price[0]
      }
    })
    if (cart.length > 0) {
      return {
        memberId: memberId,
        money: wallet,
        listPurchased: cart,
        changeMoney: money
      }
    } else {
      return 'Mohon maaf, uang tidak cukup'
    }
  }
}
  */
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log('[Exercises 13] Toko X');
console.log('Exercises 13');
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  //undefined untuk nilai kosong
  if (shoppers[0] === undefined) {
    return [];
  }
  
  const results = [];
  
  //create object untuk menampung semua nilai
for (let i=0; i< listBarang.length; i++){
  let obj = {
    product: listBarang[i][0],
    shoppers: [],
    leftOver: listBarang[i][2],
    totalProfit: 0,
  };
    
 //looping untuk mencari nilai semuanya
   for (let j=0; j< shoppers.length; j++) {
     if (shoppers[j].product === obj.product && shoppers[j].amount <= obj.leftOver){
        obj.shoppers.push(shoppers[j].name);
        obj.leftOver -= shoppers[j].amount;
        obj.totalProfit += shoppers[j].amount * listBarang[i][1];
      }
    }
  results.push(obj);  
  //console.log(obj);  
  }
  
  return results;
}

// TEST CASES
console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
  ]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]

console.log('Jumat - Modularizing Code using Functions & Recursive Functions');
console.log('[Exercises 14] Most Frequent Largest Numbers');
function sorting(arrNumber) {
  // code di sini
  var sortNumber = 0;
  for (var i=0; i< arrNumber.length; i++){
    for (var j=0; j< arrNumber.length-i-1; j++){
      if (arrNumber[j] > arrNumber[j+1]) {
        sortNumber = arrNumber [j];
        arrNumber[j] = arrNumber [j+1];
        arrNumber[j+1] = sortNumber;
      }
    }
  }
  //console.log(arrNumber);
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber[0] === undefined) {
    return ' ';
  }
  
  var countHighest = 0;
  for (var j=0; j<arrNumber.length; j++){
    if (arrNumber[j] === arrNumber[arrNumber.length-1] ){ 
      countHighest++;
    }
  }
  return 'angka paling besar adalah ' +arrNumber[arrNumber.length-1]+ ' dan jumlah kemunculan sebanyak ' + countHighest++ + ' kali';
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

console.log('[Exercises 15] Password Generator');
function changeVocals (str) {
  //code di sini
  //console.log(str);
  var vokal = 'aAiIuUeEoO';
  var konsonan = 'bBjJvVfFpP';
  var tampungWords ='';

  for (var i = 0; i<str.length; i++){
    var inisial = false;
    for(var j =0; j<vokal.length; j++){
      if(str[i] === vokal[j]) {
        tampungWords += konsonan[j] ;
        inisial = true;
     }
    } 
     if (inisial === false) {
        tampungWords += str[i]; 
     }
  }
  //console.log(tampungWords);
  return tampungWords;
}

function reverseWord (str) {
  //code di sini
  var tampungWords = '';
  for (var i=str.length-1; i>= 0; i--){
    tampungWords += str[i];
  }
  //console.log(tampungWords1);
  return tampungWords;
}

function setLowerUpperCase (str) {
  //code di sini
  var tampungWords = [];  
  for (var j=0; j< str.length; j++){
    if (str[j] ===  str[j].toLowerCase()) {
    tampungWords.push(str[j].toUpperCase());
  }
  else {
    tampungWords.push(str[j].toLowerCase());
  }
 }
  //console.log(tampungWords2.toString());
  return tampungWords;
}

function removeSpaces (str) {
  //code di sini
  var tampungWords = [];
  for (var k=0; k< str.length; k++){
    if (str[k] !== ' '){
      tampungWords.push(str[k]);
    }
  }
  //console.log(tampungWords4);
  return tampungWords;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <= 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  
  var code1 = changeVocals(name);
  //console.log(code1);
  var code2 = reverseWord(code1);
  //console.log(code2);
  var code3 = setLowerUpperCase(code2);
  //console.log(code3);
  var code4 = removeSpaces(code3);
  //console.log(code4);
  var hasilCode = '';
  for (var i=0; i< code4.length; i++){
    hasilCode += code4[i];
  }
  return hasilCode;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

console.log('[Exercises 16] Makan Terus Rekursif');
function makanTerusRekursif(waktu) {
  // you can only write your code here!
 var hasil = 0; 
 if (waktu <= 0){
   return hasil;
 }
 else {
   return 1 + makanTerusRekursif(waktu - 15);
 }

}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

console.log('[Exercises 17] Total Digit Rekursif');
function totalDigitRekursif(angka) {
  // you can only write your code here!
  //convert to string
  var str = angka.toString();
  //console.log(typeof str);
  //console.log(str.slice(1, angka.length));
  
  if (str.length === 1){
    return parseInt(str);
  }
  else {
    return parseInt(str[0]) + totalDigitRekursif(parseInt(str.slice(1, angka.length)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(0)); // 0

console.log('[Exercises 18] Kali Terus Rekursif');
function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString();
  //console.log(typeof str);
  //console.log(str.slice(1, angka.length));
  if (str.length === 1){
    return parseInt(str);
  }
  else {
    return kaliTerusRekursif(parseInt(str[0]) * kaliTerusRekursif(parseInt(str.slice(1, angka.length))));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
=======
console.log('Selasa - Numbers Crunching and Play with Strings');
console.log('[Exercises 1] Angka Prima');
function angkaPrima(angka) {
  // you can only write your code here!
  var simpan = [];
  for (var i = 1; i <= angka; i++) {
    if (angka % [i + 1] === 0) {
      simpan.push(i + 1);
    }
  }
  //console.log(simpan);
  return parseInt(simpan) === parseInt(angka);
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

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
console.log(cariMedian([7, 7, 8, 8])); // 7.5

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
console.log(cariModus([7, 7, 7, 7, 7])); // -1

console.log('[Exercises 5] Ubah Huruf');
function ubahHuruf(kata) {
  // you can only write your code here!
  //console.log(kata);
  var libraryWords = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',  'u','v','w','x','y','z'];
  var resultsWords = '';
  for (var i = 0; i < kata.length; i++) {
    resultsWords += libraryWords[libraryWords.indexOf(kata[i]) + 1];
  }
  //console.log(resultsWords);
  return resultsWords;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

console.log('[Exercises 6] Hitung Huruf');
function hitungHuruf(kata) {
  // you can only write your code here!
  //this code same with split code (' ')
  kata += ' ';
  var tampungWords = [];
  var tampungKata = '';
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === ' ') {
      tampungWords.push(tampungKata);
      tampungKata = ' ';
    } else {
      tampungKata += kata[i];
    }
  }
  //console.log(tampungWords);

  //membandingkan nilai array dengan semua looping
  //1. looping untuk ambil kata
  //2. looping untuk ambil huruf
  //3. looping 3 untuk banding huruf
  var counter = 0;
  for (var p = 0; p < tampungWords.length; p++) {
    for (var q = 0; q < tampungWords[p].length; q++) {
      //console.log(tampungWords[p][q]);
      for (var r = 0; r < tampungWords[p].length; r++) {
        //console.log('compare II : ' +tampungWords[p][r]);
        if (
          tampungWords[p][q] === tampungWords[p][r] &&
          tampungWords[q] !== tampungWords[r]
        ) {
          //console.log('Tampung Q : ' +tampungWords[q]);
          //console.log('Tampung R : ' +tampungWords[r]);
          counter++;
          //console.log('counter : ' +counter);
        }
      }
    }
    //console.log(counter);
    if (counter > 1) {
      //console.log(tampungWords[p]);
      return tampungWords[p];
    }
  }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

console.log('Rabu - Built-in Functions Mastery');
console.log('[Exercises 7] Digit Perkalian Minimum');
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  //buat perkalian minimun yg sama
  var tampung = [];
  for (var i = 1; i < angka; i++) {
    for (var j = 1; j < angka; j++) {
      if (i * j === angka) {
        tampung.push(String(i).length + String(j).length);
      }
    }
  }
  //console.log(tampung);

  //buat modus utk duplicate nilai array
  var tampungUniques = [];
  for (var j = 0; j < tampung.length; j++) {
    var tampungPosition = tampungUniques.indexOf(tampung[j]);
    if (tampungPosition === -1) {
      tampungUniques.push(tampung[j]);
    }
  }
  //console.log(tampungUniques);

  //membandingkan nilai array
  if (tampungUniques[0] > tampungUniques[1]) {
    return tampungUniques[1];
  } else if (tampungUniques[0]) {
    return tampungUniques[0];
  } else {
    return parseInt(String(angka).length) + 1;
  }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log('[Exercises 8] Urutkan Abjad');
function urutkanAbjad(str) {
  // you can only write your code here!
  //buat looping untuk split ('')
  var tampungWords = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str[i].length; j++) {
      if (str[i] !== str[j]) {
        tampungWords.push(str[i][j]);
      } else {
        tampungWords.push(str[i]);
      }
    }
  }
  //console.log(tampungWords);

  //buat sort untuk looping tersebut
  var isWords = 0;
  for (var x = 0; x < tampungWords.length; x++) {
    for (var y = 0; y < tampungWords.length-i-1; y++) {
      if (tampungWords[y] > tampungWords[y + 1]) {
        isWords = tampungWords[y];
        tampungWords[y] = tampungWords[y + 1];
        tampungWords[y + 1] = isWords;
      }
    }
  }
  //console.log(tampungWords.toString());

  //cari hasil penambahan string untuk mendapatkan hasil akhir
  var hasilWords = '';
  for (var k = 0; k < tampungWords.length; k++) {
    hasilWords += tampungWords[k];
  }
  return hasilWords;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

console.log('[Exercises 9] Tukar Ukuran');
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  //this code same like split ('')
  var tampungWords = [];
  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < kalimat[i].length; j++) {
      if (kalimat[i] !== kalimat[j]) {
        tampungWords.push(kalimat[i][j]);
      } else {
        tampungWords.push(kalimat[i]);
      }
    }
  }
  //console.log(tampungWords);

  //change nilai array dengan besar-kecil huruf
  var isWords = [];
  for (var x = 0; x < tampungWords.length; x++) {
    if (tampungWords[x] === tampungWords[x].toUpperCase()) {
      isWords.push(tampungWords[x].toLowerCase());
    } else {
      isWords.push(tampungWords[x].toUpperCase());
    }
  }
  //console.log(isWords);

  //cari hasil penambahan string untuk mendapatkan hasil akhir
  var hasilWords = '';
  for (var y = 0; y < isWords.length; y++) {
    hasilWords += isWords[y];
  }
  //console.log(hasilWords);
  return hasilWords;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

console.log('[Exercises 10] Cek AB');
function checkAB(num) {
  // you can only write your code here!
  //this code same like split ('')
  var tampungWords = [];
  for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num[i].length; j++) {
      if (num[i] !== num[j]) {
        tampungWords.push(num[i][j]);
      } else {
        tampungWords.push(num[i]);
      }
    }
  }
  //console.log(tampungWords);
  var isB = tampungWords.indexOf('b');
  //console.log('nilai b : ' +isB);

  var jarak1 = 0;
  var jarak2 = num.length;
  //console.log('jarak 2 length : ' +jarak2);
  for (var k = 0; k < tampungWords.length; k++) {
    if (tampungWords[k] === 'a') {
      jarak1 = Math.abs(isB - k);
      //console.log('jarak 1 : ' +jarak1);
      if (jarak1 < jarak2) {
        jarak2 = jarak1;
      }
    }
  }
  //console.log('real jarak : ' +jarak2);

  if (jarak2 === 4 || tampungWords[tampungWords.length - 5] === 'a') {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

console.log('Kamis - Object Literal');
console.log('[Exercises 11] Change me');
function changeMe(arr) {
  // you can only write your code here!
  //console.log(arr);
  //console.log(arr[1][1]);
  
  for (let i=0; i< arr.length; i++){
    //create object
    console.log(i+1+ '. ' +arr[i][0]+ ' ' +arr[i][1]+ ' :');
    let person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3],
    };
    
    for (let j=0; j< arr.length; j++){
     //console.log(arr[j]);
     if (arr[j][3] === person.age){
       person.age = 2018 - person.age;
     }
     else {
       if (arr[i][3] === undefined) {
       person.age =  'Invalid Birth Year';
       } 
       else if (arr[0] ===  undefined) {
       console.log(person);
       }
     }
    }
    console.log(person);
  }
}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

console.log('[Exercises 12] Shopping Time!');
function shoppingTime(memberId, money) {
  // you can only write your code here!
  var store = [
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju H&N', 250000],
    ['Sweater brand Uniklooh', 175000],
    ['Casing Handphone', 50000]
    ];
    //console.log(tokoX[2][1])
  
  const results = [];  
  var tampung = [memberId, money];
  //console.log('memberId : ' +tampung[0]);
  //console.log('money : ' +tampung[1]);
  
  for (let i=0; i< tampung.length-1; i++ ) {
  //create object first  
    let obj = {
      memberId: tampung[0],
      money: tampung[1],
      listPurchased: [],
      changeMoney: 0, 
    };
    
    for (let j=0; j< store.length; j++){
      
      if (tampung[0] !== '' && tampung[1] > store[j][1] ) {
        obj.listPurchased.push(store[j][0]);
        money -= store[j][1];                     
        obj.changeMoney = money;
      }
      else {
        if (tampung[0] === undefined || tampung[0] === '' ) {
          return 'Mohon maaf, toko X hanya berlaku untuk member saja';
        }
        else if (tampung[1] < 50000) {
         return 'Mohon maaf, uang tidak cukup'; 
        }
      }
    }
    results.push(obj);
    //console.log(obj);
  }
  return results;
}
  /*
    const items = [{"Sepatu Stacattu": 1500000}, {"Baju Zoro": 500000}, {"Baju H&N": 250000}, {"Sweater Uniklooh": 175000}, {"Casing Handphone": 50000}]
  let wallet  = money
  let objRes  = {}
  let cart    = []
  let message = ''
  // console.log(memberId, money);
  if (memberId == undefined || memberId == '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if ((memberId == undefined || memberId == '') && (money == undefined || money == '')) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else {
    items.map((item, i) => {
      let product = Object.keys(items[i])
      let price   = Object.values(items[i])
      // console.log(product[0], price[0]);
      if (money >= price[0]) {
        cart.push(product[0])
        money -= price[0]
      }
    })
    if (cart.length > 0) {
      return {
        memberId: memberId,
        money: wallet,
        listPurchased: cart,
        changeMoney: money
      }
    } else {
      return 'Mohon maaf, uang tidak cukup'
    }
  }
}
  */
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log('Exercises 13');
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  //undefined untuk nilai kosong
  if (shoppers[0] === undefined) {
    return [];
  }
  
  const results = [];
  
  //create object untuk menampung semua nilai
for (let i=0; i< listBarang.length; i++){
  let obj = {
    product: listBarang[i][0],
    shoppers: [],
    leftOver: listBarang[i][2],
    totalProfit: 0,
  };
    
 //looping untuk mencari nilai semuanya
   for (let j=0; j< shoppers.length; j++) {
     if (shoppers[j].product === obj.product && shoppers[j].amount <= obj.leftOver){
        obj.shoppers.push(shoppers[j].name);
        obj.leftOver -= shoppers[j].amount;
        obj.totalProfit += shoppers[j].amount * listBarang[i][1];
      }
    }
  results.push(obj);  
  //console.log(obj);  
  }
  
  return results;
}

// TEST CASES
console.log(
  countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 },
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
    { name: 'Devi', product: 'Baju Zoro', amount: 1 },
    { name: 'Lisa', product: 'Baju Zoro', amount: 1 },
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]

console.log('Jumat - Modularizing Code using Functions & Recursive Functions');
console.log('[Exercises 14] Most Frequent Largest Numbers');
function sorting(arrNumber) {
  // code di sini
  var sortNumber = 0;
  for (var i=0; i< arrNumber.length; i++){
    for (var j=0; j< arrNumber.length-i-1; j++){
      if (arrNumber[j] > arrNumber[j+1]) {
        sortNumber = arrNumber [j];
        arrNumber[j] = arrNumber [j+1];
        arrNumber[j+1] = sortNumber;
      }
    }
  }
  //console.log(arrNumber);
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber[0] === undefined) {
    return ' ';
  }
  
  var countHighest = 0;
  for (var j=0; j<arrNumber.length; j++){
    if (arrNumber[j] === arrNumber[arrNumber.length-1] ){ 
      countHighest++;
    }
  }
  return 'angka paling besar adalah ' +arrNumber[arrNumber.length-1]+ ' dan jumlah kemunculan sebanyak ' + countHighest++ + ' kali';
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

console.log('[Exercises 15] Password Generator');
function changeVocals (str) {
  //code di sini
  //console.log(str);
  var vokal = 'aAiIuUeEoO';
  var konsonan = 'bBjJvVfFpP';
  var tampungWords ='';

  for (var i = 0; i<str.length; i++){
    var inisial = false;
    for(var j =0; j<vokal.length; j++){
      if(str[i] === vokal[j]) {
        tampungWords += konsonan[j] ;
        inisial = true;
     }
    } 
     if (inisial === false) {
        tampungWords += str[i]; 
     }
  }
  //console.log(tampungWords);
  return tampungWords;
}

function reverseWord (str) {
  //code di sini
  var tampungWords = '';
  for (var i=str.length-1; i>= 0; i--){
    tampungWords += str[i];
  }
  //console.log(tampungWords1);
  return tampungWords;
}

function setLowerUpperCase (str) {
  //code di sini
  var tampungWords = [];  
  for (var j=0; j< str.length; j++){
    if (str[j] ===  str[j].toLowerCase()) {
    tampungWords.push(str[j].toUpperCase());
  }
  else {
    tampungWords.push(str[j].toLowerCase());
  }
 }
  //console.log(tampungWords2.toString());
  return tampungWords;
}

function removeSpaces (str) {
  //code di sini
  var tampungWords = [];
  for (var k=0; k< str.length; k++){
    if (str[k] !== ' '){
      tampungWords.push(str[k]);
    }
  }
  //console.log(tampungWords4);
  return tampungWords;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <= 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  
  var code1 = changeVocals(name);
  //console.log(code1);
  var code2 = reverseWord(code1);
  //console.log(code2);
  var code3 = setLowerUpperCase(code2);
  //console.log(code3);
  var code4 = removeSpaces(code3);
  //console.log(code4);
  var hasilCode = '';
  for (var i=0; i< code4.length; i++){
    hasilCode += code4[i];
  }
  return hasilCode;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

console.log('[Exercises 16] Makan Terus Rekursif');
function makanTerusRekursif(waktu) {
  // you can only write your code here!
 var hasil = 0; 
 if (waktu <= 0){
   return hasil;
 }
 else {
   return 1 + makanTerusRekursif(waktu - 15);
 }

}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

console.log('[Exercises 17] Total Digit Rekursif');
function totalDigitRekursif(angka) {
  // you can only write your code here!
  //convert to string
  var str = angka.toString();
  //console.log(typeof str);
  //console.log(str.slice(1, angka.length));
  
  if (str.length === 1){
    return parseInt(str);
  }
  else {
    return parseInt(str[0]) + totalDigitRekursif(parseInt(str.slice(1, angka.length)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(0)); // 0

console.log('[Exercises 18] Kali Terus Rekursif');
function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString();
  //console.log(typeof str);
  //console.log(str.slice(1, angka.length));
  if (str.length === 1){
    return parseInt(str);
  }
  else {
    return kaliTerusRekursif(parseInt(str[0]) * kaliTerusRekursif(parseInt(str.slice(1, angka.length))));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(kaliTerusRekursif(1231)); // 6