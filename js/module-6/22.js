
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
   
// };
// // Пиши код выше этой строки


// Пиши код ниже этой строки
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive === true);
};
// Пиши код выше этой строки
