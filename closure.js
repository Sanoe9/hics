// Write a function that would allow you to do this.

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

const createBase = (number) => {
    return (numero) => {
        return number + numero;
    }
};
