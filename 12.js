const myArray = new Array(2);

myArray[1] = 1;
myArray[3] = 3;
console.log('////', myArray)
console.log('Length:', myArray.length);

console.log('Element:');
for (const element of myArray) {
    console.log('\t', element);
}