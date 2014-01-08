wrapGenerator.mark(square);

function square() {
  return wrapGenerator(function square$($ctx) {
    while (1) switch ($ctx.next) {
    case 0:
      $ctx.next = 2;
      return 1;
    case 2:
      $ctx.next = 4;
      return 2;
    case 4:
      $ctx.next = 6;
      return 4;
    case 6:
      $ctx.next = 8;
      return 9;
    case 8:
    case "end":
      return $ctx.stop();
    }
  }, this);
}

module.exports = square;
