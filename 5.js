function myFunction(y1, y2, ...y3) {
    const [x1, ...[result]] = y3;

    console.log(result);
}

const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

myFunction(...myArray);


// why is the output 'lizard' ?
myFunction('rock', 'paper', 'scissors', 'lizard', 'spock');
const [a, ...[X]] = ['scissors', 'lizard', 'spock'];
