

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.

// // Пиши код ниже этой строки
// const getSortedFriends = users => {
   
// };
// // Пиши код выше этой строки


// Пиши код ниже этой строки
const getSortedFriends = users => {
    return [...users]
        .flatMap(user => user.friends)
        .filter((uniq, index, arr) => arr.indexOf(uniq) === index)
        .sort((a, b) => a.localeCompare(b));
};
// Пиши код выше этой строки