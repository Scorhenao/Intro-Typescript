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

    let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let mayor = encontrarNumeroMayor(numeros);

    //tarea 2

    


//¿Qué beneficios ofrece la definición explícita de tipos en las funciones en TypeScript?