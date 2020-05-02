export type RequiredOption = {
  files: string[];
  css: string[];
}

export type OptionalOptions = {
  prefix?: string;
  suffix?: string;
  whitelist?: string[];
};

export type Options = RequiredOption & OptionalOptions;

export type ClassWithRegexs = {
  regexCss: RegExp;
  regexOthers: RegExp;
  replaceTo: string;
}

export type PathWithContent = {
  path: string;
  content: string;
}
