/**
 * Konversikan menit pada parameter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */


function konversiMenit(menit) {
  let hour = Math.floor(menit / 60);
  let minute = menit % 60;
  if (minute < 10){
    return hour + ":0" + minute;
  }
  return hour + ":" + minute;
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

// module.exports = konversiMenit;