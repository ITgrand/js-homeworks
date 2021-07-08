

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
   
// };
// // Пиши код выше этой строки


// Пиши код ниже этой строки
const getTotalFriendCount = users => {
    return users.reduce((acc, value) => {
        return acc + value.friends.length;
    }, 0);
};
// Пиши код выше этой строки

console.log(getTotalFriendCount);