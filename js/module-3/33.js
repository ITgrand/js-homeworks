
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

//     Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2], потому что только они есть в массиве первого аргумента.


//     // Change code below this line
// function findMatches() {
//   const matches = []; // Don't change this line

//   // Change code above this line
//   return matches;
// }



function findMatches(...args)
 {  const matches = [];
 for (let i = 1; i < args.length; i += 1) {
     if (args[0].includes(args[i])) {
         matches.push(args[i]);
 }
 }
return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));