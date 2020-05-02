import { generateRegexAndUniqueId } from '../generateRegexAndUniqueId';
import { replaceClasses } from '../replaceClasses';

import { PathWithContent, OptionalOptions } from '../types';

export const replaceSelectorsInFiles = (files: PathWithContent[], selectors: string[], options?: OptionalOptions): PathWithContent[] => {
  const regexClass = selectors.map(selector => generateRegexAndUniqueId(selector, options));

  return files.map(({ path, content }) => ({ path, content: replaceClasses(path, content, regexClass) }));
};
