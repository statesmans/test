const chooseBestDistance = (t, k, ls) => {
    var corteges = [];

    function combineCortege(arr, i) {
        if (arr.length === k) {
            let sum = 0;
            arr.forEach(el => sum += el)

            corteges.push(sum);
            return;
        }
        if (i + 1 > ls.length) {
            return;
        }
        combineCortege(arr.concat(ls[i]), i + 1);
        combineCortege(arr, i + 1);
    }
    
    combineCortege([], 0);

    cortages = corteges.filter( el => el <= t)
    
    if(cortages.length != 0) {
        return cortages[cortages.length - 1];
    } else { 
        return null;
    }
}

console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseBestDistance(163, 3, [50])); // null
