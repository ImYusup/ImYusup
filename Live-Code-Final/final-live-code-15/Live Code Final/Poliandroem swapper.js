polindrome swapper
/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  debugger
  let newStr = '';
  if (isPalindrome(str)) return true;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j+1];
        newStr += str[j]
        j++;
      } else {
        newStr += str[j];
      }
    }
    if (isPalindrome(newStr)) return true;
    newStr = ''
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  debugger
  return str.split('').reverse().join('') === str;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('raceacr')); // TRUE
console.log(palindromeSwapper('makan')); // FALSE
console.log(palindromeSwapper('recacar')); // FALSE
