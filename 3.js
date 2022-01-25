// let x = 'fog';

// function first() {
//     console.log(x);
// };

// x = 'dog';
// function second() {
//     let x = 'log';
//     first();
// };

// second();


// const a = 0;
// const b = '';
// const c = [false]

// const outcome = !!(a || b || c || d)

// const sparseArray = [,1,,2,,3,,4]

// let sum = 0;
// sparseArray.forEach(val => {
//     sum += val;
// })

// console.log(sum)

function* gen1() {
    yield 'a'
    yield 'b'
    yield 'c'

}

function* gen2() {
    yield* gen1()
    yield* [1, 2, 3]
    return 4

}

for (const element of gen2()) {
    console.log(element)
}