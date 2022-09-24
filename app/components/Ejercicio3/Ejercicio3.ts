 /**
  * Ejercicio 3
  * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
  * ordene su contenido en orden alfabetico.
  *  * las letras de cada grupo están en orden aleatorio.
  *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
  *
  * Ejem:
  * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
  * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
  */

  let list1 = ['e', 'd', 'f'];
  let list2 = ['a', 'c', 'b'];
  let list3 = ['m', 'o', 'n'];

  let list = list1.concat(list2,list3);

 function organizeList(array){
     const arr = [];
     array.sort();
     for (let a = 0; a < array.length; a++) {
         const element = array[a];
         arr.push(element);
     }
     return arr;
 }
 console.log(organizeList(list));
 module.exports = organizeList;