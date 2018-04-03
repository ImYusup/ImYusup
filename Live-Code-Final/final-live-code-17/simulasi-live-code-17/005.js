/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

*/

function initialObjectGrouping(studentsArr) {
  // your code here
  // cara trainer
   
  let arrResult1 = [];
  let arrResult2 = [];
 
  //push nilai array huruf pertama
  for (let i=0; i< studentsArr.length; i++){
    arrResult1.push(studentsArr[i][0]);
  }
  
  
  //menghilangkan duplicate array pada huruf pertama
  for (let j=0; j< arrResult1.length; j++){
   if (arrResult2.indexOf(arrResult1[j]) === -1){
     arrResult2.push(arrResult1[j]);
   } 
  }
  //console.log('Result 1 : ' +arrResult1);
  //console.log('Result 2 : ' +arrResult2);
  
  //mengaggabungkan semua nilai array
  let obj = {};
  for (let p=0; p< arrResult2.length; p++){
    var hasil = [];    
    //arrResult3.push([arrResult2[p]]);
      for (let q=0; q< studentsArr.length; q++){
        if (arrResult2[p] === studentsArr[q][0]) {
          hasil.push(studentsArr[q]);
        }
      }
    //console.log(arrResult2[p]);    
    obj[arrResult2[p]] = hasil; //<== obj.keyname 
  }
  
  //console.log(arrResult3);
  return obj;
}

console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/

/*
 let output = {};
  
  for (let i=0; i< studentsArr.length; i++){
    if (output[studentsArr[i][0]] === undefined) {
      output[studentsArr[i][0]] = [studentsArr[i]];
   }
   else {
     output[studentsArr[i][0]].push(studentsArr[i]);
   }
  } 
  return output;
  */