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
});
