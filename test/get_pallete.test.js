var lib = require('../lib/get_pallete');
let paletteResult=["#000000","#ffffff","#333333"];

console.log('----- cek len get_palatte-----');
if (lib.getPallete().length==paletteResult.length) {
  console.log('true');
}else{
  console.log('false');
}

console.log('----- cek get_palatte value-----');
let palate=lib.getPallete();
for (var i = 0; i < paletteResult.length; i++) {
    if (palate[i]==paletteResult[i]) {
      console.log(`expected:${paletteResult[i]} | real : ${palate[i]} | true`);
    }else{
      console.log(`expected:${paletteResult[i]} | real : ${palate[i]} | false`)
    }
}
