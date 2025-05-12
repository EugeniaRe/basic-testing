import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const values = [1, 2];
    const expectedResult = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: null,
          next: null,
        },
      },
    };
    const result = generateLinkedList(values);

    expect(result).toStrictEqual(expectedResult);
  });

  test('should generate linked list from values 2', () => {
    const values = ['a', 'b'];
    const result = generateLinkedList(values);
    expect(result).toMatchSnapshot();
  });
});
