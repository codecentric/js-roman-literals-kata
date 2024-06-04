export const sum = (a, b) => {
  return a + b;
};

export const toRomanLiteral = (input) => {
  let result = '';
  const modulo10 = input % 10;
  if (input >= 10) {
    result = 'X';
  }

  return result + restAfter10(modulo10);
};

const restAfter10 = (input) => {
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
  for (let index = 0; index < input; index++) {
    result += 'I';
  }
  return result;
};
