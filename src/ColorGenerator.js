import color from 'color';

function generateRandomColor(){
  var Color = require("color")
  var hue = Math.random()*360;
  var newColor = Color.hsl(hue,100,50);
  return newColor;
}

function generateColors(){
  var result = [];
  for(var i =0; i<100; i++){
    result.push(generateRandomColor());
  }
  return result;
}

export default generateColors;
