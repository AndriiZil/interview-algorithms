const string = 'Hello who are there?';

function vowels1(str) {
    let count = 0;
    const checker = 'aeiou'; // ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

function vowels2(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowels1(string));

console.log(vowels2(string));

module.exports = {
    vowels1, vowels2
};