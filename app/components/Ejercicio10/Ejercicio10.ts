 /**
  * Ejercicio 10
  * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
  * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
  * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
  * ejemplo del resultado:
  * const result = { "7": 3, "2": 1 }
  */
  interface result {
    dado1: number;
    dado2: number;
    suma:number;
}
  function dados(){
    const dadoA = Math.floor(Math.random()*4);
    const dadoB = Math.floor(Math.random()*4);
    let result: result;
    return result = {
        dado1: dadoA,
        dado2: dadoB,
        suma: dadoA + dadoB
    };
 }
console.log(dados());

module.exports = dados;