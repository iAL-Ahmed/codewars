// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]

// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false


function arraysSimilar(arr1, arr2) {
  var arr1Length = arr1.length;
  var arr2Length = arr2.length;
  var arr1Obj = {};
  var arr2Obj = {};
  var similar = true;
  
  if(arr1Length !== arr2Length){
    return false;
  }
  
  for(var i = 0; i < arr1Length; i++){
    var indexVal = JSON.stringify(arr1[i]);
    if(arr1Obj.hasOwnProperty(indexVal)){
      arr1Obj[indexVal]++;
    }
    else {
      arr1Obj[indexVal] = 1;
    }
  }
  for(var j = 0; j < arr2Length; j++){
    var indexVal2 = JSON.stringify(arr2[j]);
    if(arr2Obj.hasOwnProperty(indexVal2)){
      arr2Obj[indexVal2]++;
    }
    else {
      arr2Obj[indexVal2] = 1;
    }
  }
  
  for(var key in arr1Obj){
    if(arr1Obj[key] !== arr2Obj[key]){
      similar = false;
    }
  }
  
  return similar;
}

//a much smarter way of doing this...

// function arraysSimilar(arr1, arr2) {
//   arr1 = arr1.sort(sortFunc);
//   arr2 = arr2.sort(sortFunc);
//   return arr1.length == arr2.length && arr1.every(function(a,i) {return a === arr2[i];});
// }

// function sortFunc(a,b) {return a-b;}