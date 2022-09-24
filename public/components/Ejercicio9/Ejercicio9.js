/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
/**
  * Ejercicio 6
  * calcular el factorial de un número
  */
function factorial(number) {
    let total = 2;
    for (let a = 2; a < number; a++) {
        total = total * a;
    }
    return total;
}
console.log(factorial(2));
module.exports = factorial;
