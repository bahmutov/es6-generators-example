var square = require('./square');
var squares = square(); //it will not call square function instead it will return a generator object
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
