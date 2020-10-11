import CategoryService from './category.service';

const categoryService = new CategoryService();

describe('GET - category service', () => {
  test('Testing method index', () => {
    const expected = 'Hi service';
    const result = categoryService.index();

    expect(result).toStrictEqual(expected);
  });
});
