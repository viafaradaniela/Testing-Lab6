const ejercicio6 = require ('./Ejercicio6');

test ("ejercicio6",()=>{

    let numbersAndWords = ["b", 6, "a", "q", 7, 2];

    expect(ejercicio6(numbersAndWords)).not.toBe(numbersAndWords);
});