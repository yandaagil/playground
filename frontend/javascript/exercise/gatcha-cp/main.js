/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

// PSEUDOCODE:
// TODO: answer here
/**
  * STORE button with value random between 1 - 5
  * CASE button is 1
  *   DISPLAY "coba lagi ya"
  *   BREAK
  * CASE button is 2
  *   DISPLAY "selamat kamu mendapatkan kupon sebanyak 5"
  *   BREAK
  * CASE button is 3
  *   DISPLAY "selamat kamu mendapatkan kupon sebanyak 15"
  *   BREAK
  * CASE button is 4
  *   DISPLAY "selamat kamu mendapatkan kupon sebanyak 50"
  *   BREAK
  * CASE button is 5
  *   DISPLAY "selamat kamu mendapatkan kupon sebanyak 100"
*/

function gatcha(button) {
  // TODO: answer here
  switch (button) {
    case 1:
      return "coba lagi ya";
    case 2:
      return "selamat kamu mendapatkan kupon sebanyak 5";
    case 3:
      return "selamat kamu mendapatkan kupon sebanyak 15";
    case 4:
      return "selamat kamu mendapatkan kupon sebanyak 50";
    case 5:
      return "selamat kamu mendapatkan kupon sebanyak 100";
  }
}

// Create variable button here
// TODO: answer here
let button = Math.floor(Math.random() * 5 + 1);

console.log(gatcha(button));

// module.exports = gatcha;
