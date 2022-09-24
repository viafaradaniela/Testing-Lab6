const ejercicio5 = require('./Ejercicio5');
test("ejercicio5", () => {
    let makeup1 = [];
    let makeup2 = [];
    makeup1 = ["labial", "rubor", "bronzer", "mascara"];
    makeup2 = ["labial", "rubur", "bronzer", "mascara"];
    expect(ejercicio5(makeup1, makeup2)).not.toEqual('Son iguales!');
});
