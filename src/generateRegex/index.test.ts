import { generateCSSRegex, generateOtherFilesRegex } from '.';

test('Generate CSS Regex (basic)', () => {
  const regex = generateCSSRegex('.test');

  expect(regex).toEqual(/\.test(\s*[:{])/gm);
});

test('Generate CSS Regex (with :)', () => {
  const regex = generateCSSRegex('.sm\\:test');

  expect(regex).toEqual(/\.sm\\:test(\s*[:{])/gm);
});

test('Generate JS Regex (basic)', () => {
  const regex = generateOtherFilesRegex('.test');

  expect(regex).toEqual(/([\s"'])test([\s"'])/gm);
});

test('Generate JS Regex (with :)', () => {
  const regex = generateOtherFilesRegex('.sm\\:test');

  expect(regex).toEqual(/([\s"'])sm:test([\s"'])/gm);
});
