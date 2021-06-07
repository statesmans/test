const chooseBestDistance = (t, k, ls) => {
    var corteges = [];

    // функция поиска всех вариантов
    function combineCortege(arr, i) {
        // условие сработает если массив заполнен до заданого размера
        if (arr.length === k) {
            // сразу же вычесляем растояние и пушим само значение
            let sum = 0;
            arr.forEach(el => sum += el)

            corteges.push(sum);
            return;
        }
        // если дошли до конца массива маршрутов, то сработае это
        if (i + 1 > ls.length) {
            return;
        }
        // перебирает комбинации с одним из чисел массива, в начале кортежа
        combineCortege(arr.concat(ls[i]), i + 1);
        // меняет первое число в кортеже если закончились варианты для предыдущего
        combineCortege(arr, i + 1);
    }
    
    combineCortege([], 0);

    //фильтруем ратояния от малого к великому 
    cortages = corteges.filter( el => el <= t)
    
    // если нашли число меньше условной длинны выдаем его, иначе нал
    if(cortages.length != 0) {
        return cortages[cortages.length - 1];
    } else { 
        return null;
    }
}

console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseBestDistance(163, 3, [50])); // null
