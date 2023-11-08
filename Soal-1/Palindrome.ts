export const Palindrome = (str: string): boolean => {
    str = str.toLowerCase();
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return str === reverseStr;
};

console.log(Palindrome('Kasur ini rusak'));
console.log(Palindrome('Ibu Ratna antar ubi'));
console.log(Palindrome('tuna'));