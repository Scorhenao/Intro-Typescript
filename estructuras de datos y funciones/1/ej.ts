/**
 * Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
    Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
    Tarea 3: Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.
    Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.
 */

    let numeros: number[] = [1,2,3,4,5,6,7,8,9,10];

    //tarea 1
    let suma: number = numeros.reduce((acumulador:number, valorActual:number) => acumulador + valorActual, 0);

    //tarea 2
    let strings: string[] = ["Hola", "Mundo", "Este", "es", "una", "concatenacion", "de", "strings"];
    function concatenacion (array:string[]): void {
        let result: string = array.reduce((acumulador: string, valorActual:string) => acumulador + valorActual, "");
        console.log(result);
    };

    //tarea 3
    let usuarios: {id: number, name: string}[] = [
        {id: 1, name: "Juan"},
        {id: 2, name: "Pedro"},
        {id: 3, name: "Maria"},
    ];

    usuarios.forEach(usuario => console.log(usuario.name));

    //tarea 4
    function mayorValor (array: number[]): number {
        return array.reduce((acumulador: number, valorActual: number) => Math.max
        (acumulador, valorActual), -Infinity);
        };

/**
 * ¿Cómo se puede asegurar el tipo de datos en un array en TypeScript?
    En TypeScript, puedes asegurar el tipo de datos en un array mediante:

    Declaración explícita: Especificando el tipo del array al definirlo.
    Interfaces o tipos personalizados: Definiendo estructuras para arrays de objetos.
    Generics en funciones: Utilizando parámetros genéricos para asegurar el tipo en funciones que operan sobre arrays.
 */