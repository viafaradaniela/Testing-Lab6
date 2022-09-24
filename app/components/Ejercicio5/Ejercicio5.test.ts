const ejercicio5 = require ('./Ejercicio5');

test("ejercicio5", () =>{
    let makeup1: string [] = [];
    let makeup2: string [] = [];
    makeup1 = ["labial", "rubor", "bronzer", "mascara"];
    makeup2 = ["labial", "rubur", "bronzer", "mascara"];
    expect(ejercicio5(makeup1,makeup2)).not.toEqual('Son iguales!')
})