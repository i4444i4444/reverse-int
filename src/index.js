function reverse(n) {
  return parseInt(Math.abs(n).toString().split('').reverse().join(''), 10);
}

module.exports = reverse;
