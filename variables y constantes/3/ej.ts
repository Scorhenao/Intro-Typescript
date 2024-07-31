//Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.
let numero: number = 2;

if (numero > 0) {
    console.log("El número es positivo");
}else if(numero < 0) {
    console.log("El número es negativo");
}else{
    console.log("El número es cero");
}

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
                }

//¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?
/**
 * 
 */