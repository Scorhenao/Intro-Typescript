/**
 * Tarea: Implementa una función que reciba un array de números y retorne el mayor valor.
    Tarea 2: Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.
    Tarea 3: Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario. (2 Riwi points)
 */

    //tarea 1
    function encontrarNumeroMayor(array: number[]): number | undefined {
        if (array.length === 0) {
          return undefined; // Retorna undefined si el array está vacío
        }
        
        return Math.max(...array); // Usa Math.max para encontrar el número mayor
    }
  
    //tarea 2

    function validateParameters<T>(...args: T[]): void {
      if (args.length < 2) {
        throw new Error("At least two parameters are required.");
      }
    
      const firstType = typeof args[0];
      const secondType = typeof args[1];
    
      if (firstType !== secondType) {
        throw new Error("The first two parameters must be of the same type.");
      }
    
      for (let i = 2; i < args.length; i++) {
        if (typeof args[i] !== firstType) {
          throw new Error(`Parameter at position ${i + 1} is not of the same type as the first two parameters.`);
        }
      }
    }
    
    //tarea 3
    function matrixRotator(matrix: number[][]):void {
      let n = matrix.length;
  
      for(let i=0 ; i < Math.floor(n/2); i++){
          for(let j = i; j < n-i-1; j++){
              let temp = matrix[i][j];
              matrix[i][j] = matrix[n-1-j][i];
              matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
              matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
              matrix[j][n-1-i] = temp;
          }
      }
  }
  
  let laMatriz1: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
  
  let laMatriz2: number[][] = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
  ];
  
  matrixRotator(laMatriz1);
  matrixRotator(laMatriz2);
  
  
  laMatriz1.forEach(fila => console.log(fila));
  console.log('\n');
  laMatriz2.forEach(fila => console.log(fila));


//¿Qué beneficios ofrece la definición explícita de tipos en las funciones en TypeScript?
/**
 * La definición explícita de tipos en las funciones en TypeScript ofrece varios beneficios:

  Seguridad de Tipos: Ayuda a detectar errores en tiempo de desarrollo al garantizar que las variables y funciones se utilicen de acuerdo con sus tipos esperados.
  Autocompletado y Ayuda en el IDE: Mejora la experiencia de desarrollo proporcionando autocompletado y sugerencias precisas en editores de código compatibles.
  Documentación Clara: Actúa como documentación integrada, facilitando la comprensión de lo que se espera como entrada y salida de una función.
  Mantenimiento y Refactorización: Facilita el mantenimiento y la refactorización del código al permitir cambios más seguros y controlados.
  Consistencia y Legibilidad: Promueve la consistencia y legibilidad del código al hacer explícito el contrato de las funciones, reduciendo la ambigüedad.
 */