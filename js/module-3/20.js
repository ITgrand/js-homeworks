

// // Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// // Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки



//   // Пиши код выше этой строки
// }

// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100


const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
    
//     let totalPrice = 0;

//     for (const product of products) {
//         let totalName = product.name;

//         if (productName === totalName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }

//             return totalPrice

//   // Пиши код выше этой строки
// }


function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;

    for (const product of products) {
        if (productName === product.name) {
            totalPrice = product.price * product.quantity;
        }
    }
    return totalPrice
  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Scanner"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));