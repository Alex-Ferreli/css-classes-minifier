/* eslint-disable no-param-reassign */
import { ClassWithRegexs } from './types';

export const replaceClasses = (file: string, content: string, regexClass: ClassWithRegexs[]) => {
  regexClass.forEach(({ regexCss, regexOthers, replaceTo }) => {
    if (file.endsWith('css')) {
      content = content.replace(regexCss, `.${replaceTo}$1`);
    } else {
      content = content.replace(regexOthers, `$1${replaceTo}$2`);
    }
  });

  return content;
};
