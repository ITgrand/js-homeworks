

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей(свойство balance),
//     пол которых(свойство gender) совпадает со значением параметра gender.


//     // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
   
// };
// // Пиши код выше этой строки


// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
   return [...users]
        .filter(user => user.gender === gender)
        .reduce((prev, total) => prev + total.balance, 0);
};
// Пиши код выше этой строки
