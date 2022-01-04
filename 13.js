let arr = [1, 2];

arr.customProp = true;

for (let key in arr) {
    console.log(arr[key]);
}