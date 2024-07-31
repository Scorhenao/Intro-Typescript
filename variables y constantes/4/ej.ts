//Implementa una función que recorra un array de nombres y los imprima en consola.
let nombres: string[] = ["sam", "andrew", "stiven"];
function imprimirNombres(nombres: string[]): void {
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
        }
        }

/**
 * ¿Qué ventajas tiene el método map sobre un bucle for en TypeScript?
 * El método map tiene las siguientes ventajas sobre un bucle for en TypeScript:

    Concisión: map permite transformar arrays en una sola línea de código, haciendo el código más limpio y legible.

    Inmutabilidad: map no modifica el array original, sino que devuelve un nuevo array con los elementos transformados.

    Declarativo: map expresa claramente la intención de aplicar una transformación a cada elemento, en contraste con el enfoque imperativo de un bucle for.

    Funcionalidad: map es parte de la programación funcional y se integra bien con otros métodos de array como filter y reduce.
 * 
 */