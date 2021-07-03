
// Выполни рефакторинг кода, заменив функцию - конструктор Car на класс с методом - конструктором, принимающим объект.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

class Car { 
  brand;
  model;
  price;

    constructor ({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
  
}



const mango = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

console.log(mango);