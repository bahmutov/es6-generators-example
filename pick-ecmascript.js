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
