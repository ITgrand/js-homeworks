

// С помощью Function Declaration напиши функцию - конструктор Storage, которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]



// function Storage(items) {
//     this.items = items;
// }

// Storage.prototype.getItems = function () {
//     return this.items;
// }

// Storage.prototype.addItem = function (newItem) {
//    return this.items.push(newItem);
// }

// Storage.prototype.removeItem = function (item) {
//     for (let i = 0; i < this.items.length; i + 1) {
//         if (this.items[i] === item) {
//             return this.items.splice(i, 1);
//         }
//     }
// }


function Storage(items) {
  this.items = items;
}
Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i] === item) {
      return this.items.splice(i, 1);
    }
  }
};


const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


