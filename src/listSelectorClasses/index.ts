import csstree, { parse } from 'css-tree';

export const listSelectorClasses = (css: string[], whitelistClasses: string[] = []): string[] => {
  const finalListOfClasses: string[] = [];

  const ast = parse(css.join('\n'));

  csstree.walk(ast, node => {
    if (node.type === 'ClassSelector' && !whitelistClasses.includes(node.name)) finalListOfClasses.push(`.${node.name}`);
  });

  return finalListOfClasses;
};
