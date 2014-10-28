// Create the function projectPartners with the parameter n representing the number 
//of students in Mrs. Frizzle's class. The function should return the total number 
//of unique pairs she can make with n students.

// projectPartners(2)
//   --> returns 1

// projectPartners(4)
//   --> returns 6

function projectPartners(n) {
  //n!
  var nFac = factorial(n);
  //(n-2)!
  var subFac = factorial(n - 2);
  //2!
  var twoFac = factorial(2);
  
  return Math.round(nFac / (subFac * twoFac));
}

function factorial(num)
{
  if (num < 0) {
      return -1;
  }
  else if (num == 0) {
      return 1;
  }
  var temp = num;
  while (num-- > 2) {
      temp *= num;
  }
  return temp;
}