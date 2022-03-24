// Masukan 3 bilangan bulat menggunakan if condition
const num1 = parseInt(prompt("Masukan bilangan pertama: "));
const num2 = parseInt(prompt("Masukan bilangan kedua: "));
const num3 = parseInt(prompt("Masukan bilangan ketiga: "));

// let largest;

// TODO: answer here
let largest = num1;
if (num2 > largest) {
    largest = num2;
}

if (num3 > largest) {
    largest = num3;
}
// Menampilkan hasil
console.log("Bilangan terbesar adalah " + largest);