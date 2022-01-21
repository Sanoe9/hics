const isInt = (number) => {
    return !String(number).includes('.');
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
