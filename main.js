'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    expences1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expences2 = prompt('Во сколько обойдется', ''),
    newObg = {
        budget: money,
        timeData: time,
        expences: {
            expences1: expences2
        },
        optionalExpenses: '',
        income: [],
        savings: false,
    };
alert(money / 30);