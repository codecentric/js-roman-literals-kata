export const sum = (a, b) => {
  return a + b;
};

export const toRomanLiteral = (input) => {
  let result = '';
  const modulu10 = input % 10;

  const modulo5 = input % 5;
  if (input >= 4) {
    result = 'V';
  }
  if (modulo5 === 4) {
    return 'I' + result;
  }

  for (let index = 0; index < modulo5; index++) {
    result += 'I';
  }
  return result;
};
