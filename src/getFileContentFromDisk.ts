import { promises } from 'fs';

import { PathWithContent } from './types';

const getSingleFileContentFromDisk = async (path: string): Promise<PathWithContent> => {
  const content = await promises.readFile(path, 'utf-8');

  return { path, content };
};

export const getFileContentFromDisk = async (paths: string[]): Promise<PathWithContent[]> => (
  Promise.all(paths.map(getSingleFileContentFromDisk))
);
