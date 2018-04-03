<<<<<<< HEAD
console.log('[Exercises 11] Change me');
function changeMe(arr) {
  // you can only write your code here!
  //convert array to object
  let person = {};
  let dataPerson = '';

  for (var i = 0; i < arr.length; i++) {
    //buat data object per person
    console.log(i + 1 + '.' + arr[i][0] + ' ' + arr[i][1] + ' :');
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    if (arr[i][3] === undefined || arr[i][3] > 2018) {
      person.age = 'Invalid Birth Year';
    } else {
      person.age = 2018 - arr[i][3];
    }
    console.log(person);
  }

  if (arr[0] === undefined) {
    console.log('');
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
=======
console.log('[Exercises 11] Change me');
function changeMe(arr) {
  // you can only write your code here!
  //convert array to object
  let person = {};
  let dataPerson = '';

  for (var i = 0; i < arr.length; i++) {
    //buat data object per person
    console.log(i + 1 + '.' + arr[i][0] + ' ' + arr[i][1] + ' :');
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    if (arr[i][3] === undefined || arr[i][3] > 2018) {
      person.age = 'Invalid Birth Year';
    } else {
      person.age = 2018 - arr[i][3];
    }
    console.log(person);
  }

  if (arr[0] === undefined) {
    console.log('');
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
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
