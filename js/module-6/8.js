

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }


// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach( element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
  
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));