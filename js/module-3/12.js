

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   // Change code above this line
//   return propCount;
// }


function countProps(object) {
  let propCount = 0;
  // Change code below this line
    for (let key in object) {
        if (object.hasOwnProperty(key))
            propCount += 1;
    }
  // Change code above this line
  return propCount;
}


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const obj in object) {
//         if (object.hasOwnProperty(obj))
//             propCount += 1;
//     }
//     // Change code above this line
//     return propCount;

console.log(countProps({ name: "Mango", age: 2 }));