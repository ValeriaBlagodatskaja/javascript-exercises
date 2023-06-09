const palindromes = function (str) {
  const removeChar = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const checkPalindrome = removeChar.split("").reverse().join("");
  if (removeChar === checkPalindrome) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
