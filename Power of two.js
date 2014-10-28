function isPowerOfTwo(n){
  var i = 0;
  var root = Math.pow(n, 1/1);
  
  while(root >= 2){
    i++;
    root = Math.pow(n, 1/i);
    
    if(root === 2){
      return true;
    }
  }
  
  return false;
}

//clever solutions

// function isPowerOfTwo(n){
//   if (n < 2) return false;
//   if (n == 2) return true;
//   return isPowerOfTwo(n / 2);
// }