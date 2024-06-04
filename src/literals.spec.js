import { sum, toRomanLiteral } from './literals';

describe('Literals', () => {
  it('should add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return I for input 1', () => {
    // ARRANGE
    const input = 1;

    // ACT
    const result = toRomanLiteral(input);

    // ASSERT
    expect(result).toStrictEqual('I');
  });

  it('should return II for input 2', () => {
    // ARRANGE
    const input = 2;

    // ACT
    const result = toRomanLiteral(input);

    // ASSERT
    expect(result).toStrictEqual('II');
  });

  it('should return IV for input 4', () => {
    // ARRANGE
    const input = 4;

    // ACT
    const result = toRomanLiteral(input);

    // ASSERT
    expect(result).toStrictEqual('IV');
  });

  it('should return V for input 5', () => {
    // ARRANGE
    const input = 5;

    // ACT
    const result = toRomanLiteral(input);

    // ASSERT
    expect(result).toStrictEqual('V');
  });

  it('should return VI for input 6', () => {
    // ARRANGE
    const input = 6;

    // ACT
    const result = toRomanLiteral(input);

    // ASSERT
    expect(result).toStrictEqual('VI');
  });

  it('should return IX for input 9', () => {
    // ARRANGE
    const input = 9;

    // ACT
    const result = toRomanLiteral(input);

    // ASSERT
    expect(result).toStrictEqual('IX');
  });
});
