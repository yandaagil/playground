// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here
if (score >= 91 && score <= 100) {
    console.log("A");
} else if (score >= 71) {
    console.log("B");
} else if (score >= 61) {
    console.log("C");
} else if (score >= 51) {
    console.log("D");
} else {
    console.log("E");
}