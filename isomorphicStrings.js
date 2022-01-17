// Check if a given string is a isomorphic


const isIsomorphic = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let obj = {};
    
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        if (obj[char] === undefined) {
            obj[char] = str2[i];
        } else {
            if (obj[char] !== str2[i]) {
                return false;
            }
        }
    }
    
    return true;
}

console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false