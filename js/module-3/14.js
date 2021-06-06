

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }






function countProps(object) {
  // Change code below this line
  let propCount = 0;
  
  const keys = Object.keys(object);
  
  for (const key of keys) {
      propCount += 1;
    }  

  return propCount;
  // Change code above this line
}


console.log(countProps({ name: "Fedir", surname: "Dovhopolyk"}));