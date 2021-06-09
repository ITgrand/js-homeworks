
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// // Change code below this line
// function add() {
//   // Change code above this line
// }


// Change code below this line
function add(...args) {

    let totalArgs = 0;

    for (const arg of args) {
        totalArgs += arg;
        
    }
    return totalArgs;

  // Change code above this line
}

console.log(add(15, 27));