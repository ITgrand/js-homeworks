

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.


const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
    
    const arrProducts = [];
  
    for (const product of products) {
        if (propName === "name") {
            arrProducts.push(product.name);
        } if (propName === "price") {
            arrProducts.push(product.price);
        } if (propName === "quantity") {
            arrProducts.push(product.quantity);
        }
    }
  return arrProducts
  // Change code above this line
}

console.log(getAllPropValues("quantity"));
