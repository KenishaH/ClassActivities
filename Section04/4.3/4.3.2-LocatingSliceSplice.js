const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];
console.log(arr.length);
// find the first index of "a", "b", and "c"
console.log(arr.indexOf("a"), arr.indexOf("b"), arr.indexOf("c"));
// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOfi("a"), arr.lastIndexOf("b"), arr.lastIndexOf("c"));
// if the first index and last index of "a" is not the same, remove the last instance
function removesStuff(arr) {
  let firstA = arr.indexOf("a");
  let lastA = arr.lastIndexOf("a");
  if (firstA! == lastA) {
console.log(lastA);
    arr.splice(lastA, 1);
  } else {
    console.log("it didnt runn")
  }
  return arr;
}
console.log(removesStuff(arr));
console.log(arr.length);

for(let x = 0; x < lastA; i++){
  removesStuff(arr);
  console.log(arr);

}
console.log(arr.length, arr);

// repeat until there is just one "a"
// Matt's solution to final challenge:
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
  }
  return array;
}

console.log(removeDuplicates(arr, "a"));

for(lastA; firstA !== lastA; lastA = arr.lastIndexOf('a')) {
  arr.splice(lastA, 1);
  console.log(arr);
}
