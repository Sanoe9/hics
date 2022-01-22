const isInt = (number) => {
    return !String(number).includes('.');
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false


const isInt = (number) => {
    // 5 is integer, if you divide it by 5, the remainder is 0. but lets take 5.3, if you divide it by 1, the remainder will be .3
    return number % 1 === 0;
};