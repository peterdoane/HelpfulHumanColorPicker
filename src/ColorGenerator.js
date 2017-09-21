import color from 'color';
var Color = require("color")

function generateColor(hue, saturation) {
  var newColor = Color.hsl(hue, saturation, 50);
  // var Color = require("color")
  return newColor;
}

function generateColors() {
  var result = [];
  for (var i = 0; i < 25; i++) {
    for (var s = 1; s < 6; s++) {
      result.push(generateColor(i * 14.4, s * 20 - 10))
    };
  }
  return result;
}

export default generateColors;
