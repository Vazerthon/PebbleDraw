var drawing = (function () {
  var Vector2 = require('vector2');
  var Vector2 = require('vector2');

  var x = 0;
  var y = 0;
  var minX = 0;
  var minY = 0;
  var maxX = 144;
  var maxY = 168;

  var draw = function(position, blockSize, element) {
    if (position === 'above') {
      y -= blockSize;
    } else if (position === 'below') {
      y += blockSize;
    } else if (position === 'left') {
      x -= blockSize;
    } else if (position === 'right') {
      x += blockSize;
    } else {
      return;
    }

    if (x > maxX) {
      x = maxX;
    }
    if (y > maxY) {
      y = maxY;
    }
    if (x < minX) {
      x = minX;
    }
    if (y < minY) {
      y = minY;
    }
    var block = new UI.Rect({
        position: new Vector2(x,y),
        size: new Vector2(blockSize, blockSize),
        borderColor: 'clear'
      });

    element.add(block);
  };

  return {
    draw: draw
  };
});
