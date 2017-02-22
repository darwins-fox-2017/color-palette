var pickColor = require('../lib/get_pallete')
var color = ["#69D2E7", "#E0E4CC", "#f35630"]

// Test driven development
console.log('Test Driven Development')
if ( pickColor().length === color.length) {
  console.log(true);
} else {
  console.log(false);
}

console.log('Testing color match');
let match = 0
for (let i = 0; i < color.length; i++) {
  if (pickColor()[i] === color[i]) {
    console.log(`Matching library : Expected + ${pickColor()[i]} : Actual + ${color[i]}`);
    match++
  } else {
    console.log(`Matching library : Expected + ${pickColor()[i]} : Actual - ${color[i]}`);
  }
}

console.log(`Match : ${match}, Error : {$color.length-match}`);
