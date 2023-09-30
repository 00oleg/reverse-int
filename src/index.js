module.exports = function reverse (n) {
  return Number((n < 0 ? n * -1 : n).toString().split('').reverse().join(''));
}
