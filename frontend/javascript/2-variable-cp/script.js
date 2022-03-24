// Menukar variabel a dan b dengan operator matematika

// TODO: answer here
const prompt = require("prompt");
prompt.start();

prompt.get(["a", "b"], (err, res) => {
    let a = res.a;
    let b = res.b;

    console.log(`Nilai a sebelum ditukar: ${a}`);
    console.log(`Nilai b sebelum ditukar: ${b}`);

    let temp;
    temp = a;
    a = b;
    b = temp;

    console.log(`Nilai a setelah ditukar: ${a}`);
    console.log(`Nilai b setelah ditukar: ${b}`);
});