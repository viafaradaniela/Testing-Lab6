/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */
 
 let words1: string [] = [];
 words1 = ['v', 'n', 'q'];
 
 let numbers1: string[] = [];
 numbers1 = ['4', '2', '8'];
 
 function joinNumbersWords(array1, array2?){
     const arraySize = array1.length + array2.length;
     const array= [];
     for (let v = 0; v < arraySize; v++) {
         if(array1[v] !== undefined){
             array.push(array1[v]);
         }
         if(array2[v] !== undefined){
             array.push(array2[v]);
         }
     }
     return array;
 }
 console.log(joinNumbersWords(words1, numbers1));

 module.exports = joinNumbersWords;