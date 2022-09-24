const ejercicio1 = require ('./Ejercicio1');

test("Ejercicio1", () =>{
    let words1: string [] = [];
    words1 = ['v', 'n', 'q'];
    let numbers1: string[] = [];
    numbers1 = ['4', '2', '8'];
    let FinalResult = ['v','4','n','2','q','8']
    expect(ejercicio1(words1,numbers1)).toEqual(FinalResult)
})

