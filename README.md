# ES6-generators-example

> You can setup a flexible system using ES6 generators for Node even today

[![NPM][es6-generators-example-icon]][es6-generators-example-url]

[![Build status][es6-generators-example-ci-image]][es6-generators-example-ci-url]
[![dependencies][es6-generators-example-dependencies-image]][es6-generators-example-dependencies-url]
[![devdependencies][es6-generators-example-devdependencies-image]][es6-generators-example-devdependencies-url]

[![endorse][endorse-image]][endorse-url]

## Background

EcmaScript6 (called Harmony) has an excellent feature - generators. They offer a very
[intuitive way](http://bahmutov.calepin.co/a-taste-of-nodejs-generators.html)
of dealing with asynchronous code (usually in conjunction with promise library like
[Q](https://npmjs.org/package/q)). Once I wrapped my mind around using them, I
wanted to simplify my projects (typically using promises) using generators.

After looking around, I found that generators are
[supported pretty much by every tool I use](http://bahmutov.calepin.co/partial-ecmascript6-harmony-support-on-node-today.html). The only thing stopping me is a requirement to share
my module with others, who are still running stable Nodejs 0.10.x without
generator support.

## Solution

I write all my code as usual, but using EcmaScript6 in folder `es6`.
I run the code using node v0.11 with `--harmony` command line option, by using
an alias `harm=node --harmony`. I am also using
[grunt-regenerator](https://github.com/sindresorhus/grunt-regenerator) to convert
every file from ES6 to EcmaScript5 (using [regenerator](http://facebook.github.io/regenerator/)).

```js
// Gruntfile.js
regenerator: {
    all: {
        files: [{
            expand: true,
            cwd: 'es6/',
            src: ['**/*.js'],
            dest: 'es5/'
        }]
    }
}
```

The generated EcmaScript5 code is committed to the repo too.

### runtime

I point at a simple [pick-ecmascript.js](pick-ecmascript.js) file from *package.json*
that select which code to run: ES6 or ES5. The script looks at the node version
and command line arguments to figure out which version to start.
If ES5 is selected, the script also loads a small supporting function by
needed to run the converted code (provided by the regenerator)

```js
function isHarmony() {
  if (process.versions.node.split('.')[1] < 11) {
    return false;
  }
  return process.execArgv.some(function (arg) {
    return arg == '--harmony';
  });
}

if (isHarmony()) {
  console.log('Harmony!');
  require('./es6');
} else {
  console.log('ES5 :(');
  require('./node_modules/grunt-regenerator/node_modules/regenerator/runtime/dev.js');
  require('./es5');
}
```

## Small print

Author: Gleb Bahmutov &copy; 2013

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[es6-generators-example-icon]: https://nodei.co/npm/es6-generators-example.png?downloads=true
[es6-generators-example-url]: https://npmjs.org/package/es6-generators-example
[es6-generators-example-ci-image]: https://travis-ci.org/bahmutov/es6-generators-example.png?branch=master
[es6-generators-example-ci-url]: https://travis-ci.org/bahmutov/es6-generators-example
[es6-generators-example-dependencies-image]: https://david-dm.org/bahmutov/es6-generators-example.png
[es6-generators-example-dependencies-url]: https://david-dm.org/bahmutov/es6-generators-example
[es6-generators-example-devdependencies-image]: https://david-dm.org/bahmutov/es6-generators-example/dev-status.png
[es6-generators-example-devdependencies-url]: https://david-dm.org/bahmutov/es6-generators-example#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
