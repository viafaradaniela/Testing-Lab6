 
 /**
  * Ejercicio 5
  * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
  */
let makeup1: string [] = [];
let makeup2: string [] = [];
makeup1 = ["labial", "rubor", "bronzer", "mascara"];
makeup2 = ["labial", "rubor", "bronzer", "mascara"];

 function sameListMakeup(array1, array2){
    array1.sort()
    array2.sort()
    if(array1.length==array2.length && array1.every(function(v,i) { return v === array2[i] })){
        return "Son iguales!";
    }else{
        return "No son iguales";
    }
 }

 console.log(sameListMakeup(makeup1, makeup2));

 module.exports = sameListMakeup;