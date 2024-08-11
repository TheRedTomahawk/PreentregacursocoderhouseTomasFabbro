// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'No se puede dividir por cero';
    }
}

// Ciclo for para imprimir los primeros 10 números
console.log('Ciclo for:');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ciclo while para imprimir los primeros 10 números
console.log('Ciclo while:');
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// Ciclo do while para imprimir los primeros 10 números
console.log('Ciclo do while:');
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);

// Condicional if else para verificar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return 'El número ' + numero + ' es par';
    } else {
        return 'El número ' + numero + ' es impar';
    }
}

// Ejecución de las funciones y ciclos
console.log('Suma de 5 y 3:', sumar(5, 3));
console.log('Resta de 5 y 3:', restar(5, 3));
console.log('Multiplicación de 5 y 3:', multiplicar(5, 3));
console.log('División de 5 y 3:', dividir(5, 3));
console.log(esParOImpar(5));
console.log(esParOImpar(4));
