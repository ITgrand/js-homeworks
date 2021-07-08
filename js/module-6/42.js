

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей(свойство friends).

// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
   
// };
// // Пиши код выше этой строки


// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
    return [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name);
};
// Пиши код выше этой строки