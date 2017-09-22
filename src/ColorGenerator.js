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
  var brown = Color('#BF7D40');
  var orange = Color('#A9A9A9');
  var lightgrey = Color('#D3D3D3');
  var red = Color('#F20D0D');
  var yellow = Color('#EEE600');
  var orange = Color('#FF3800');
  var grey = Color('#D3D3D3');
  var purple = Color('#800080');
  result.push(purple, purple.lighten(0.2), purple.lighten(0.3), purple.lighten(0.6),purple.lighten(0.4), purple.lighten(0.5),purple.rotate(5), purple.rotate(-5), purple.darken(.2), purple.darken(.5), purple.darken(.8));
  result.push(brown, brown.lighten(0.2), brown.lighten(0.3), brown.lighten(0.6),brown.lighten(0.4), brown.lighten(0.5),brown.rotate(5), brown.rotate(-5), brown.darken(.2), brown.darken(.5), brown.darken(.8));
  result.push(grey, grey.lighten(0.2), grey.lighten(0.3), grey.lighten(0.6), grey.rotate(5), grey.rotate(-5), grey.darken(.2), grey.darken(.5), grey.darken(.8));
  result.push(orange, orange.lighten(0.2), orange.lighten(0.3), orange.lighten(0.6),orange.lighten(0.4), orange.lighten(0.5),orange.rotate(5), orange.rotate(-5), orange.darken(.2), orange.darken(.5), orange.darken(.8));
  result.push(red, red.lighten(0.2), red.lighten(0.3), red.lighten(0.6), red.rotate(5), red.rotate(-5), red.darken(.2), red.darken(.5), red.darken(.8));
  result.push(yellow, yellow.lighten(0.2), yellow.lighten(0.3), yellow.lighten(0.6),yellow.lighten(0.4), yellow.lighten(0.5),yellow.rotate(5), yellow.rotate(-5), yellow.darken(.2), yellow.darken(.5), brown.darken(.8));
  return result;
}

export default generateColors;
