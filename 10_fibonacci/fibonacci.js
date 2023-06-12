const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else if (typeof n === "string" && Number(n) <= 1) {
    return Number(n);
  } else if (typeof n === "string") {
    return fibonacci(Number(n) - 1) + fibonacci(Number(n) - 2);
  } else if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
