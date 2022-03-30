/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  let platSplit = plat.split(";");
  let platGanjil = [];
  let platGenap = [];
  for (let i = 0; i < platSplit.length; i++) {
    if (platSplit[i].length === 5) {
      if (platSplit[i][0] % 2 === 1) {
        platGanjil.push(platSplit[i]);
      } else {
        platGenap.push(platSplit[i]);
      }
    }
  }
  if (platGanjil.length === 0 && platGenap.length === 0) {
    return "plat tidak ditemukan";
  } else if (platGanjil.length === 0) {
    return "plat genap sebanyak " + platGenap.length + " dan plat ganjil tidak ditemukan";
  } else if (platGenap.length === 0) {
    return "plat ganjil sebanyak " + platGanjil.length + " dan plat genap tidak ditemukan";
  } else {
    return "plat genap sebanyak " + platGenap.length + " dan plat ganjil sebanyak " + platGanjil.length;
  }
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data

// module.exports = ganjilGenap