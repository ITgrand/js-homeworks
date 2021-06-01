
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.


function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const item of numbers) {
    const number = item;
    
    if (number > value) {
      filteredNumbers.push(number);
    }
  
  //for (let i = 0; i < numbers.length; i += 1) {
    //const number = numbers[i];

    //if (number > value) {
      //filteredNumbers.push(number);
    //}
  }

  return filteredNumbers;
  // Change code above this line
}
