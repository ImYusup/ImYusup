/*Tugas 1
Ubahlah seluruh var pada kode JavaScript dibawah ini menjadi let atau const!*/

let phi = 3.14;
let power = 2;
let radius = 0;
let calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
let area21 = calculateArea(radius);

radius = 7;
let area7 = calculateArea(radius);

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);


/*Tugas 2
Ubahlah anonymous functions dibawah ini menjadi ES6 Arrow Function!*/

const multiply = (num1, num2) => { return num1 * num2;}

  const divide = (num1, num2) => { return num1 / num2; }

  const doubleMe = (num) => {return num * 2;}

  console.log(multiply(5,2));
  console.log(divide(10,2));