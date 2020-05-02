import { listSelectorClasses } from '.';

const cssContent = `
.test1 {}

.test2, .test3 {}

.test4:hover, test5 {}

.sm\\:test6 {}
`;

test('Parse CSS file', () => {
  const listSelectors = listSelectorClasses([cssContent]);

  expect(listSelectors).toEqual(['.test1', '.test2', '.test3', '.test4', '.sm\\:test6']);
});

test('Parse CSS file (with whitelist)', () => {
  const listSelectors = listSelectorClasses([cssContent], ['test2']);

  expect(listSelectors).toEqual(['.test1', '.test3', '.test4', '.sm\\:test6']);
});
