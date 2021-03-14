module.exports = function reverse (n) {
  let reversed_n = parseInt(n.toString().split('').reverse().join(''));
  return reversed_n;
}
