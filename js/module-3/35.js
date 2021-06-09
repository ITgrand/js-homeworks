

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.Используй indexOf() для того,
//     чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент


//     const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
	
	
	
//     // Change code above this line
//   },
// };


const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
      const findName = this.books.indexOf(oldName);
      this.books.splice(findName, 1, newName);
	
      return this.books;
    // Change code above this line
    }
};

console.log(bookShelf);