


// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
   
// };
// // Пиши код выше этой строки


// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Пиши код выше этой строки