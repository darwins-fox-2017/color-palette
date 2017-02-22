let lib = require('../lib/get_pallete.js')


console.log(`Is return of getPallete() method is 3 `);
if (lib.getPallete().length == 3) {
  console.log(`Yes. Test passed`);
} else {
  console.log('Test Fail, getPallete() length : ' + lib.getPallete());
}
