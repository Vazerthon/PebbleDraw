var UI = require('ui');
var Vector2 = require('vector2');

var x = 0;
var y = 0;
var blockSize = 1;
var minX = 0;
var minY = 0;
var maxX = 144 - blockSize;
var maxY = 168 - blockSize;
var above = 'above';
var below = 'below';
var left = 'left';
var right = 'right';
var leftRightMode = false;

var main = new UI.Window({
    fullscreen: true,
});

var draw = function(position){
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
  
  main.add(block);
};

main.on('click', 'up', function(e) {
  if (leftRightMode) {
    draw(left);
  } else {
    draw(above);
  }
});

main.on('click', 'down', function(e) {
  if (leftRightMode) {
    draw(right);
  } else {
    draw(below);
  }
});

main.on('click', 'select', function(e) {
  leftRightMode = !leftRightMode;
});

var init = function() {
  main.show();
};

init();