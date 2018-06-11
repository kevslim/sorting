function split(wholeArray) {
  let mid = Math.floor(wholeArray.length / 2);
  let splitArray = [];
  splitArray.push(wholeArray.slice(0, mid));
  splitArray.push(wholeArray.slice(mid));
  return splitArray;
}

function merge(array1, array2) {
  let mergedArray = [];

  let left = 0;
  let right = 0;

  while (left < array1.length || right < array2.length) {
    if (left === array1.length) {
      array2.slice(right).forEach(function(index) {
        mergedArray.push(index);
      });
      return mergedArray;
    } else if (right === array2.length) {
      array1.slice(left).forEach(function(index) {
        mergedArray.push(index);
      });
      return mergedArray;
    } else {
      if (array1[left] < array2[right]) {
        mergedArray.push(array1[left]);
        left++;
      } else {
        mergedArray.push(array2[right]);
        right++;
      }
    }
  }
  return mergedArray;
}

function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  else {
    let splitArray = split(array);
    return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
  }

}