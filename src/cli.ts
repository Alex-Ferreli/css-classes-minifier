#!/usr/bin/env node
import { Command } from 'commander';

import { cssClassesMinifier } from '.';

import { Options } from './types';

const program = new Command();

const getList = (list: string): string[] => list.split(',');

program
  .usage('--css <css> --files <files> [options]')
  .option('-f, --files <files>', 'glob of files containts classes to replace (comma separated)', getList)
  .option('-c, --css <files>', 'glob of css files containts classes to replace (comma separated)', getList)
  .option('-p, --prefix <string>', 'prefix to apply on generated class', '')
  .option('-s, --suffix <string>', 'suffix to apply on generated class', '')
  .option('-w, --whitelist <list>', 'list of classes that should not be removed (comma separated)', getList, []);

program.parse(process.argv);

if (!(program.css && program.files)) program.help();

(async () => {
  // if the config file is present, use it
  // other options specified will override
  const options: Options = {
    files: program.files,
    css: program.css,
    prefix: program.prefix,
    suffix: program.suffix,
    whitelist: program.whitelist,
  };

  await cssClassesMinifier(options);

  console.log('Minified');
})();
