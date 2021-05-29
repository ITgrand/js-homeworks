Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив,
    в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

    function filterArray(numbers, value) {
   // Change code below this line
	const filteredNumbers = [];
  	for (const number of numbers) {
      if (number > value) {
        filteredNumbers.push(number); 
      }
    }
  return filteredNumbers;


  // Change code above this line
}