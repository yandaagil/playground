// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(string) {
    // TODO: answer here
    const str = string.toLowerCase();
    const temp = str.split('').reverse().join('');
    if (temp === str) {
        return true;
    } else {
        return false;
    }
}

// masukan teks
const string = prompt('Masukan string: ');

// memanggil fungsi palindrom
const value = checkPalindrome("Kasur ini rusak");

console.log(value);