import { uniqueIdGeneratorFactory } from './uniqueIdGeneratorFactory';
import { generateCSSRegex, generateOtherFilesRegex } from './generateRegex';

import { ClassWithRegexs, OptionalOptions } from './types';

const uniqueIdGenerator = uniqueIdGeneratorFactory();

export const generateRegexAndUniqueId = (className: string, { prefix = '', suffix = '' }: OptionalOptions = {}): ClassWithRegexs => ({
  regexCss: generateCSSRegex(className),
  regexOthers: generateOtherFilesRegex(className),
  replaceTo: `${prefix}${uniqueIdGenerator(className)}${suffix}`,
});
