# css-class-minifier

[![npm version](https://badge.fury.io/js/css-class-minifier.svg)](https://badge.fury.io/js/css-class-minifier)

## Why
Utility tool to rename css classes with a generated shorter name.

A simple tool to minify CSS classes in CSS and other (JS, HTML, etc.) files.

## Example API
```js
import cssClassesMinifier from 'css-classes-minifier';

(async () => {
  console.log('Starting minifying...');

  await cssClassesMinifier({ files: ['files/scripts*.js', 'files/styles*.css'], css: ['files/styles*.css'] });

  console.log('Minification completed!');
})();
```

## Example API
```bash
css-classes-minifier -f "files/scripts*.js,files/styles*.css" -c "files/styles*.css"
```

## Parameters
Options can be provided as third argument of main function:
|API name|CLI param|type|required|default|description|
|---|---|---|---|---|---|
|files|-f or --files|array of glob|x||glob that contains classes to replace
|css|-c or --css|array of glob|x||glob that contains selectors to replace
|prefix|-p or --prefix|string||empty string|prefix string to use in replaced class
|suffix|-s or --suffix|string||empty string|suffix string to use in replaced class
|whitelist|-w or --whitelist|array of string||[]|array of classes to exclude from replace

## NOTES
This tool search classes selectors in "files" parameter glob using a regex to find the exact class name.

For example this classes (text-red-600 and text-green-600) will NOT be recognized:
```jsx
<div className={`text-${ error ? 'red' : 'green' }-600`}></div>
```

While in this example classes will be recognized:
```jsx
<div className={error ? 'text-red-600' : 'text-green-600' }></div>
```

Writing templates without concatenating classes permit to know at build time classes effectivly used. [PurgeCSS](https://github.com/FullHuman/purgecss) remove classes from CSS searching in template files in the same way. This permit to reduce amount of classes in final CSS files, reducing bundle size.