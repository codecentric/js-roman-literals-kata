export const sum = (a, b) => {
  return a + b;
};

export const toRomanLiteral = (input) => {
  const modulo5 = input % 5
  let result = ""
  for (let index = 0; index < modulo5; index++) {
    result += "I"
  }
  return result;
};
