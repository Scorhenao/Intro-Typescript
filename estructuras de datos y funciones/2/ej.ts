/**
 * Tarea: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.
    Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.
    Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.
 */

    //tarea 1 

    interface car {
        marca: string;
        modelo: string;
        año: number;
    }
        let carAudi: car = { marca: "audi", modelo: "mkultra", año: 2006 };
        console.log(carAudi);

    //tarea 2

    class Car {
        marca: string;
        modelo: string;
        año: number;
        constructor(marca: string, modelo: string, año: number) {
            this.marca = marca;
            this.modelo = modelo;
            this.año = año;
        }
        static getCarInfo(car: car): string {
            return `El carro es un ${car.marca} ${car.modelo} del año ${car
                .año}`;
                }
    }

    //tarea 3
    function incrementarAño(car: car): car {
        return { marca: car.marca, modelo: car.modelo, año: car.año +1 };
            }

/**
 * ¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
 * 
    El uso de tipos personalizados en TypeScript ofrece varias ventajas clave:

    Claridad: Define claramente cómo deben ser los objetos, lo que hace el código más fácil de entender.
    Seguridad: Asegura que los datos se ajusten a la estructura esperada, evitando errores.
    Autocompletado: Facilita el desarrollo con sugerencias y documentación integrada en el editor.
    Refactorización: Simplifica los cambios en la estructura de los objetos y asegura que se actualicen en todo el código.
    Detección de Errores: Identifica problemas antes de ejecutar el código, mejorando la estabilidad.
    Reusabilidad: Permite usar la misma definición de tipo en diferentes partes del código.
    Colaboración: Ayuda a que los equipos trabajen con una comprensión común de las estructuras de datos.
 */