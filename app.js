var age = +prompt('Введите свой возраст');

if (age > 0 && age <= 18 && !isNaN(age) ) {
    alert('Вы еще молоды, вам нужно учится.');
} else if (age >= 18 && age <= 50 && !isNaN(age) ) {
    alert('Вам нужно работать.');
}else if (age > 50 && age <=59 && !isNaN(age)) {
    alert('Вам скоро на пенсию');
}else if (age > 59 && age <=100 && !isNaN(age)) {
    alert('Вы пинсоер');
}else{
    alert('Что-то пошло не так');
}


var clock = +prompt('Введите время');

switch (clock) {
    case 0:
        alert(clock + ' часа ночи');
        break;
    case 1: 
        alert(clock + ' часа ночи');
        break;
    case 2: 
        alert(clock + ' часа ночи');
        break; 
    case 3: 
        alert(clock + ' часа ночи');
        break;
    case 4: 
        alert(clock + ' часа ночи');
        break;
    case 5: 
        alert(clock + ' часа ночи');
        break;
    case 6: 
        alert(clock + ' часа ночи');
        break;
    case 7: 
        alert(clock + ' часа утра');
        break;
    case 8: 
        alert(clock + ' часа утра');
        break;
    case 9: 
        alert(clock + ' часа утра');
        break;
    case 10: 
        alert(clock + ' часа утра');
        break;
    case 11: 
        alert(clock + ' часа дня');
        break;
    case 12: 
        alert(clock + ' часа дня');
        break;
    case 13: 
        alert('1 часа дня');
        break;
    case 14: 
        alert('2 часа дня');
        break;
    case 15: 
        alert('3 часа дня');
        break;
    case 16: 
        alert('4 часа дня');
        break;
    case 17: 
        alert('5 часа дня');
        break;
    case 18: 
        alert('6 часа вечера');
        break;
    case 19: 
        alert('7 часа вечера');
        break;
    case 20: 
        alert('8 часа вечера');
        break;
    case 21: 
        alert('9 часа вечера');
        break;
    case 22: 
        alert('10 часа вечера');
        break;
    case 23: 
        alert('11 часа вечера');
        break;
    default: 
        alert('Ошибка');
        break;
}


var one = +prompt('Введите первое число');
var two = +prompt('Введите второе число');
var three = +prompt('Введите третье число');


if(one > two && one < three && !isNaN(one) && !isNaN(two) && !isNaN(three)){
    alert(one + ' Среднее число');
} else if(two > one && two < three && !isNaN(one) && !isNaN(two) && !isNaN(three)){
    alert(two + ' Среднее число');
} else if(three > one && two > three && !isNaN(one) && !isNaN(two) && !isNaN(three)){
    alert(three + ' Среднее число');
}