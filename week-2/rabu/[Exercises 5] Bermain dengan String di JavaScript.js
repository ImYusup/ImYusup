<<<<<<< HEAD
console.log('Rabu-[Exercises 5] Bermain dengan String di JavaScript');
//1. let's from a sentece
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word+ ' ' +second+ ' ' +third+ ' ' +fourth+ ' ' +fifth+ ' ' +sixth+ ' ' +seventh);

//2. Index Accessing-1 by 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2]; //<== see this code
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so' ; // do your own!
var fifthWord = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//3. Breaking Sentence (Again) using Substring
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3); //<== see this code
var secondWord3 = 'JavaScript'; // do your own!
var thirdWord3 = 'is'; // do your own!
var fourthWord3 = 'so'; // do your own!
var fifthWord3 = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = 'JavaScript'; // do your own!
var thirdWord4 = 'is'; // do your own!
var fourthWord4 = 'so'; // do your own!
var fifthWord4 = 'cool'; // do your own!
//untuk mempermudah melihat index dan array gunakanlah excel
//var exampleFirstWord4 = word4.substring(0, 3);
var firstWordLength = exampleFirstWord4.length;
//_______________//
//create new variables around here
var exampleSecondWord4 = word4.substring(4, 14);
var secondWordLength = exampleSecondWord4.length;
//_______________//
var exampleThirdWord4 = word4.substring(15, 17);
var thirdWordLength = exampleThirdWord4.length;
//_______________//
var exampleFourthWord4 = word4.substring(18, 20);
var fourWordLength = exampleFourthWord4.length;
//_______________//
var exampleFifthWord4 = word4.substring(21, 25);
var fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
=======
console.log('Rabu-[Exercises 5] Bermain dengan String di JavaScript');
//1. let's from a sentece
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word+ ' ' +second+ ' ' +third+ ' ' +fourth+ ' ' +fifth+ ' ' +sixth+ ' ' +seventh);

//2. Index Accessing-1 by 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2]; //<== see this code
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so' ; // do your own!
var fifthWord = 'cool'; // do your own!
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//3. Breaking Sentence (Again) using Substring
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3); //<== see this code
var secondWord3 = word3.substring(4,14); // do your own!
var thirdWord3 = word3.substring(15,17); // do your own!
var fourthWord3 = word3.substring(18,20); // do your own!
var fifthWord3 = word3.substring(21,25); // do your own!
console.log('First Word3: ' + exampleFirstWord);
console.log('Second Word3: ' + secondWord3);
console.log('Third Word3: ' + thirdWord3);
console.log('Fourth Word3: ' + fourthWord3);
console.log('Fifth Word3: ' + fifthWord3);

//4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4,14); // do your own!
var thirdWord4 = word4.substring(15,17); // do your own!
var fourthWord4 = word4.substring(18,20); // do your own!
var fifthWord4 = word4.substring(21,25); // do your own!
//untuk mempermudah melihat index dan array gunakanlah excel
//var exampleFirstWord4 = word4.substring(0, 3);
var firstWordLength = exampleFirstWord4.length;
//_______________//
//create new variables around here
var exampleSecondWord4 = word4.substring(4, 14);
var secondWordLength = exampleSecondWord4.length;
//_______________//
var exampleThirdWord4 = word4.substring(15, 17);
var thirdWordLength = exampleThirdWord4.length;
//_______________//
var exampleFourthWord4 = word4.substring(18, 20);
var fourWordLength = exampleFourthWord4.length;
//_______________//
var exampleFifthWord4 = word4.substring(21, 25);
var fifthWordLength = exampleFifthWord4.length;

console.log('First Word4: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word4: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word4: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word4: ' + fourthWord4 + ', with length: ' + fourWordLength);
console.log('Fifth Word4: ' + fifthWord4 + ', with length: ' + fifthWordLength);
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
