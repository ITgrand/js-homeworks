
// Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price.
// Деструктуризируй объект в сигнатуре(подписи) функции.

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(newCar);