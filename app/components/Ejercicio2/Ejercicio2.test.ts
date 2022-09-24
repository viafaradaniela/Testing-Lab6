const ejercicio2 = require ('./Ejercicio2');

test("Ejercicio2", () =>{
    let listNumbers: number [] = [];
    listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(ejercicio2(listNumbers)).not.toEqual([2, 4, 6, 8, 10]);
})