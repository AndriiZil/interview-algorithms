function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

function palindrome2(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

module.exports = {
  palindrome,
  palindrome2
}
