export const generateCSSRegex = (selector: string) => new RegExp(`\\${selector.replace('\\', '\\\\')}(\\s*[:{])`, 'gm');

export const generateOtherFilesRegex = (selector: string) => new RegExp(`([\\s"'])${selector.substr(1).replace(/\\/g, '')}([\\s"'])`, 'gm');
