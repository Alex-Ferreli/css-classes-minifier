import { replaceSelectorsInFiles } from '.';

import { PathWithContent } from '../types';

const filesInput: PathWithContent[] = [
  {
    path: '/srv/test.js',
    content: 'className: "testClass testClass2 testClass3 testClass4"',
  },
  {
    path: '/srv/test.css',
    content: '.testClass{color:#fff}.testClass2{color:#000}.testClass3{color:#fff}.testClass4{color:#000}',
  },
];

const filesOutputExpected: PathWithContent[] = [
  {
    path: '/srv/test.js',
    content: 'className: "a b c e"',
  },
  {
    path: '/srv/test.css',
    content: '.a{color:#fff}.b{color:#000}.c{color:#fff}.e{color:#000}',
  },
];

test('with single value', () => {
  const filesOutputResult = replaceSelectorsInFiles(filesInput, ['.testClass', '.testClass2', '.testClass3', '.testClass4']);

  expect(filesOutputResult).toEqual(filesOutputExpected);
});
