import { promises } from 'fs';

import { getContentsFromGlobs } from './getContentsFromGlobs';
import { listSelectorClasses } from './listSelectorClasses';
import { replaceSelectorsInFiles } from './replaceSelectorsInFiles';

import { Options } from './types';

export const cssClassesMinifier = async ({ files, css, ...options }: Options) => {
  const filesToReplace = await getContentsFromGlobs(files);
  const cssOfSelector = await getContentsFromGlobs(css);

  const listSelectors = listSelectorClasses(cssOfSelector.map(c => c.content), options.whitelist);

  await Promise.all(replaceSelectorsInFiles(filesToReplace, listSelectors, options).map(({ path, content }) => promises.writeFile(path, content, { encoding: 'utf-8' })));
};
