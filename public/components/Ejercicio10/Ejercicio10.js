function dados() {
    const dadoA = Math.floor(Math.random() * 4);
    const dadoB = Math.floor(Math.random() * 4);
    let result;
    return result = {
        dado1: dadoA,
        dado2: dadoB,
        suma: dadoA + dadoB
    };
}
console.log(dados());
module.exports = dados;
