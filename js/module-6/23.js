

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
   
// };
// // Пиши код выше этой строки



// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false);
};
// Пиши код выше этой строки
