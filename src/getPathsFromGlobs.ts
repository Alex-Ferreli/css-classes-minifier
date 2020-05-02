import glob from 'tiny-glob';

export const getPathsFromGlobs = async (globs: string[]): Promise<string[]> => {
  const paths = await Promise.all(globs.map(path => glob(path)));

  return paths.flat(2);
};
