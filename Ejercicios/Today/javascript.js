function mayorArray(arr) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      let mayor = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
          mayor = arr[i];
        }
      }
      console.log("Elementos del array:");
      let j = 0;
      while (j < arr.length) {
        console.log(arr[j]);
        j++;
      }
      let count = 0;
      let k = 0;
      do {
        if (arr[k] % 2 !== 0) {
          count++;
        }
        k++;
      } while (k < arr.length);
      console.log("Numero de impares es: " + count)
      return "El número mayor es: " + mayor;
    }
  }

let numeros = [5, 9, 3, 6, 1, 8, 7];
let resultado = mayorArray(numeros);
console.log(resultado);


