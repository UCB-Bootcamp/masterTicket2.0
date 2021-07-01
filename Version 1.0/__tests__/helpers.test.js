const { pluralize_people } = require('../utils/helpers');

test('pluralize_people() returns correct pluralization of "person"', () => {
    expect(pluralize_people(1)).toBe('person');
    expect(pluralize_people(0)).toBe('people');
});