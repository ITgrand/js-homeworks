
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
В противном случае функция должна вернуть новый массив целиком.



function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line

	let newArray = firstArray.concat(secondArray);
  	
  	if (newArray.length > maxLength) {
      newArray.length = maxLength;
      return newArray;
    }
  
  	return newArray.slice(0);