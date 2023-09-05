let array1 = [];
let array2 = [];

// Insertar números del 1 al 100 en el primer array
for(let i = 1; i <= 100; i++) {
    array1.push(i);
}

// Insertar números del 101 al 200 en el segundo array
for(let i = 101; i <= 200; i++) {
    array2.push(i);
}

// Calcular la media de ambos arrays
let media_array1 = array1.reduce((total, num) => total + num, 0) / array1.length;
let media_array2 = array2.reduce((total, num) => total + num, 0) / array2.length;

// Imprimir los resultados
console.log("Media del primer array:", media_array1);
console.log("Media del segundo array:", media_array2);
