// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    return str.split('').reverse().join('');
}

// take input from the user
// const string = prompt('Masukan teks: ');

const result = reverseString("yanda agil marfani");
console.log(result);