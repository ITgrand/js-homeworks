

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
    
//     // Change code above this line
//   },
// };



const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
      const bookName = this.potions.indexOf(potionName);
      this.potions.splice(bookName, 1);
    
    // Change code above this line
      return this.potions;
  }
  
};


console.log(atTheOldToad.removePotion("Dragon breath"));
