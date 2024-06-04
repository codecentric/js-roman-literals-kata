export const sum = (a, b) => {
  return a + b;
};

export const toRomanLiteral = (input) => {
  let result = '';
  const modulo100 = input % 100;
  if (input >= 100) {
    result = 'C';
  }

  return result + lessThan100(modulo100);
};

const lessThan100 = (input) => {
  if (input === 40) {
    return 'XL';
  }
  if (input === 90) {
    return 'XC';
  }
  let result = '';

  if (input >= 50) {
    result = 'L';
  }
  for (let index = 0; index < input % 50; index += 10) {
    result += 'X';
  }
  const modulo10 = input % 10;
  return result + lessThan10(modulo10);
};

const lessThan10 = (input) => {
  if (input === 4) {
    return 'IV';
  }
  if (input === 9) {
    return 'IX';
  }
  let result = '';

  if (input >= 5) {
    result = 'V';
  }
  for (let index = 0; index < input % 5; index++) {
    result += 'I';
  }
  return result;
};
