const getPallete = require('../pallete');

let colorPallete = getPallete()
let validation = true

for (let i = 0; i < colorPallete.length; i++) {
  if (!/^#([a-f\d]{3}){1,2}$/ig.test(colorPallete[i])) {
    console.log("Hex code is not valid!!");
    validation = false
    break
  }
}

console.log(validation);
