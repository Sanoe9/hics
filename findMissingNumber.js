// Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

const findMissingNumber = (arrayOfIntegers, upperBound, lowerBound) => {
    // BRUTE FORCE SOLUTION
    
    arrayOfIntegers.sort((a, b) => a - b);
    
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        const integer = arrayOfIntegers[i];
        if (lowerBound !== integer) {
            return lowerBound;
        } 
        lowerBound++;
    }
};
console.log(findMissingNumber(arrayOfIntegers, upperBound, lowerBound)); // 8