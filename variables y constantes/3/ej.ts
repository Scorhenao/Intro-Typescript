//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.
let numero: number = 2;

if (numero > 0) {
    console.log("El número es positivo");
    }else if(numero < 0) {
        console.log("El número es negativo");
        }else{
            console.log("El número es cero");
        };

switch (true) {
    case numero > 0:
        console.log("El número es positivo");
        break;
        case numero < 0:
            console.log("El número es negativo");
            break;
            default:
                console.log("El número es cero");
                break;
                };

//¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?
/**
 * El operador ternario es preferible en lugar de una estructura if cuando la condición y las acciones son simples y se pueden expresar en una sola línea. Es ideal para asignar valores o hacer decisiones rápidas sin añadir mucha complejidad. Sin embargo, para lógica más compleja o cuando se requiere mayor claridad, es mejor usar if-else
 */