export const sum = (a, b) => {
  return a + b;
};

export const toRomanLiteral = (input) => {
  let result = '';
  const modulo100 = input % 100;
  return result + lessThan100(modulo100);
};

const lessThan100 = (input) => {
  const div10 = Math.floor(input / 10);
  let result = '';
  if (div10 === 4) {
    result = 'XL';
  } else if (div10 === 9) {
    result = 'XC';
  } else {
    if (div10 >= 5) {
      result = 'L';
    }
    for (let index = 0; index < div10 % 5; index++) {
      result += 'X';
    }
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
