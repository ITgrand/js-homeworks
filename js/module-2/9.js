Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.


function getExtremeElements(array) {
  // Change code below this line
const firstElement = array[0];
const lastElementIndex = array.length - 1;
const lastElement = array[lastElementIndex];  
  
  const newElement = [firstElement, lastElement];
  return newElement;
}


console.log(getExtremeElements([1, 2, 3, 4, 5]));
  // Change code above this line