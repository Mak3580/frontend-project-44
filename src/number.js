const getRendom = (max) => Math.floor(Math.random() * max);

const parity = (val) => !(val % 2);

const math = ([a, b, sign]) => {
  if (sign === '+') return a + b;
  if (sign === '-') return a - b;
  if (sign === '*') return a * b;
  return false;
};

const gcd = (a, b) => {
  if (a === 0 || b === 0) return 0;
  if (a < b) return gcd(b, a);
  if (a === b) return a;
  return gcd(b, a - b);
};

const buildProgress = (firstInt, step) => {
  const result = [firstInt];
  for (let i = 0; i < 9; i += 1) {
    result.push(result[i] + step);
  }
  return result;
};

const checkPrime = (val) => {
  for (let i = 2; i < val; i += 1) {
    if (val % i === 0) return false;
  }
  return true;
};

export {
  getRendom,
  parity,
  math,
  gcd,
  buildProgress,
  checkPrime,
};
