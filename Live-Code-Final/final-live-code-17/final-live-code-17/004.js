
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 

*/

function initialGroupingDescending(studentsArr) {

  // Only Code Here
  
  let arrResult1 = [];
  let arrResult2 = [];
  let arrResult3 = [];
  
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
  for (let p=0; p< arrResult2.length; p++){
    arrResult3.push([arrResult2[p]]);
      for (let q=0; q< studentsArr.length; q++){
        if (arrResult2[p] === studentsArr[q][0]) {
          arrResult3[p].push(studentsArr[q]);
      }
    }
  }
  //console.log(arrResult3);
  //return arrResult3;
  
  let code = 0;
  for (var i=0; i< arrResult3.length; i++){
    for (var j=0; j< arrResult3.length-i-1; j++){
      if (arrResult3[j] < arrResult3[j+1]) {
        code = arrResult3 [j];
        arrResult3[j] = arrResult3 [j+1];
        arrResult3[j+1] = code;
      }
    }
  }
  //console.log(arrResult3);
  return arrResult3;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/