var UI = require('ui');
var Vector2 = require('vector2');
var draw = drawing();

var blockSize = 5;
var leftRightMode = false;

var main = new UI.Window({
    fullscreen: true,
});

main.on('click', 'up', function(e) {
  if (leftRightMode) {
    draw.draw('left', blockSize, main);
  } else {
    draw.draw('above', blockSize, main);
  }
});

main.on('click', 'down', function(e) {
  if (leftRightMode) {
    draw.draw('right', blockSize, main);
  } else {
    draw.draw('below', blockSize, main);
  }
});

main.on('click', 'select', function(e) {
  leftRightMode = !leftRightMode;
});

var init = function() {
  main.show();
};

init();
