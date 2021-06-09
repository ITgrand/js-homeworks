


// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.


// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
 
//     // Change code above this line
//   },
// };


const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
      
      const oldIndex = this.potions.indexOf(oldName);
      this.potions.splice(oldIndex, 1, newName);

      return this.potions;

 
    // Change code above this line
  },
};


console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));