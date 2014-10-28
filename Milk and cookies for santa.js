// Time for Milk and Cookies

// Write a function timeForMilkAndCookies (time_for_milk_and_cookies in Ruby) that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise. Keep in mind Javascript's Date month is 0 based, while Ruby's Date month isn't.

// Examples

// Javascript/CoffeeScript:

// timeForMilkAndCookies( new Date( 2013, 11, 24 ) ) // December 24, 2013 => returns true
// timeForMilkAndCookies( new Date( 2013, 0, 23 ) ) // January 23, 2013 => returns false
// timeForMilkAndCookies( new Date( 3000, 11, 24 ) ) //  December 24, 3000 => returns true

function timeForMilkAndCookies(date){
  return date.getDate() === 24 && date.getMonth() === 11 ? true : false;
}