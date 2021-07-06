
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     // Пиши код выше этой строки
//   }

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const newArray = [];

    numbers.forEach((number) => {
        if (number % 2 === 0) {
            newArray.push(number + value);
        } else {
            newArray.push(number);
        }
    });

    return newArray;
    // Пиши код выше этой строки
  };
  
console.log(changeEven([1, 2, 3, 4, 5], 10));