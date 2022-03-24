// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
for (let i = 0; i <= 5; i++) {
    let str = "";
    for (let j = 5; j > i; j--) {
        str += "*";
    }
    console.log(str);
}