let r = process.argv.slice(2)[0];

function daireAlani(r) {
  let sonuc = 3.14 * Number(r * r);
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${sonuc}`);
}

daireAlani(r);
