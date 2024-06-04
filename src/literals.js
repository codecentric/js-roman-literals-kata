export const sum = (a, b) => {
  return a + b;
};

export const toRomanLiteral = (input) => {
  let result = '';
  const modulo10 = input % 10;

  const div10 = Math.floor(input / 10)
  for (const index = 0; index < div10; index++) {
    result += "X"
  }

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
