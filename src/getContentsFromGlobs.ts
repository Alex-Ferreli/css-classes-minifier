import { getPathsFromGlobs } from './getPathsFromGlobs';
import { getFileContentFromDisk } from './getFileContentFromDisk';

import { PathWithContent } from './types';

export const getContentsFromGlobs = async (globs: string[]): Promise<PathWithContent[]> => {
  const pathsFilesToReplace = await getPathsFromGlobs(globs);

  return getFileContentFromDisk(pathsFilesToReplace);
};
