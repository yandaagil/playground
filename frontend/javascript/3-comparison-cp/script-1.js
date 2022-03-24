// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here
if (number > 0) {
    console.log(`${number} adalah bilangan positif`);
} else if (number < 0) {
    console.log(`${number} adalah bilangan negatif`);
} else {
    console.log(`${number} adalah bilangan nol`);
}