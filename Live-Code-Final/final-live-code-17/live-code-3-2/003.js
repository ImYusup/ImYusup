/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/
function kali(operand1, operand2) {
  //your code here
  var hasil =0;
  hasil = operand1 * operand2;
  return hasil;
}

function tambah(operand1, operand2) {
  //your code here
   var hasil =0;
  hasil = operand1 + operand2;
  return hasil;
}

function kurang(operand1, operand2) {
  //your code here
  var hasil =0;
  hasil = operand1 - operand2;
  return hasil;
}

function bagi(operand1, operand2) {
  // your code here
  var hasil =0;
  hasil = operand1 / operand2;
  return hasil;
}

function calculate(arrNumber) {
//  your code here
  if (arrNumber[0] === undefined){
    return [];
  }

  var hasil=[];
  var perkalian = 0;
  var penambahan = 0;
  var pengurangan =0;
  var pembagian =0;
  
  for(var x =0; x < arrNumber.length; x++){
  //console.log(x);
    if(arrNumber[x].operator === '*'){
      perkalian = kali(arrNumber[x].operand1, arrNumber[x].operand2);
      hasil.push(perkalian);
    }else if(arrNumber[x].operator === '+'){
      penambahan = tambah(arrNumber[x].operand1,arrNumber[x].operand2);
      result.push(penambahan);
    }else if(arrNumber[x].operator === '-'){
      pengurangan = kurang(arrNumber[x].operand1,arrNumber[x].operand2);
      hasil.push(pengurangan);
    }else if(arrNumber[x].operator === '/'){
      pembagian = bagi(arrNumber[x].operand1,arrNumber[x].operand2);
      hasil.push(pembagian);
    }
  }
  return hasil;
}

console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]