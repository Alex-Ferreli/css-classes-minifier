<h1 align="center">Welcome to css-class-minifier 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/css-class-compressor.svg">
</p>

> Utility tool to rename css classes with shorter name.

## Why
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
|API usage name|CLI usage name|type|required|default|description|
|---|---|---|---|---|---|
|files|-f or --files|array of glob|x||glob of files that contains classes to replace
|css|-c or --css|array of glob|x||glob of css that contains selectors to replace
|prefix|-p or --prefix|string||empty string|prefix string to use in replaced class
|suffix|-s or --suffix|string||empty string|suffix string to use in replaced class
|whitelist|-w or --whitelist|array of string||[]|array of classes to exclude from replace

## Author

👤 **Alex Ferreli**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_