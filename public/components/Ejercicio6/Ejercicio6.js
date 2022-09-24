/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */
let numbersAndWords = [];
numbersAndWords = ["b", 6, "a", "q", 7, 2];
function organizeNumbersAndWords(array) {
    const arr = array;
    let newArray = [];
    array = array.filter(number => Number.isInteger(number));
    array = array.filter(string => !Number.isInteger(string));
    array.sort();
    arr.sort();
    arr.forEach(element => {
        newArray.push(element);
    });
    array.forEach(element => {
        newArray.push(element);
    });
    return newArray;
}
console.log(organizeNumbersAndWords(numbersAndWords));
module.exports = organizeNumbersAndWords;
