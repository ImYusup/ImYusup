function cariMedian(arr) {
  
  var median = 0;
  //var urut = arr.sort(function(value1, value2) { return value1 > value2 });
  var rumus = Math.floor(arr.length/2);
  
  for (var i=1; i<arr.length; i++){
    if (arr.length % 2 === 1){
        median = arr[rumus];
    }
    else {
      median = ( arr[rumus] + arr[rumus-1] )*0.5;
    }
  }
 return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
