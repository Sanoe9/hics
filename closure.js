// Write a function that would allow you to do this.

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

const createBase = (number) => {
    return (numero) => {
        return number + numero;
    }
};


// Write a function that would allow you to do this.
// multiply(5)(6);

const multiply = (num) => {
    return (number) => {
        return num * number;
    }
};

console.log(multiply(5)(6));