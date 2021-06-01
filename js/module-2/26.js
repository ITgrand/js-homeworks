

Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.





function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  
  for (const number of order) {
    total += number;
  }
    

  //for (let i = 0; i < order.length; i += 1) {
    //total += order[i];
  //}

  // Change code above this line
  return total;
}