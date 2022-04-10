// Only change code below this linef

function myBouncer(arr) {

  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}



// Only change code above this line
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined])); // Change this line


module.exports = myBouncer;




