import color from 'color';

function generateColor(hue){
  var Color = require("color")
  var newColor = Color.hsl(hue,100,50);
  return newColor;
}

function generateColors(){
  var result = [];
  for(var i =0; i<100; i++){
    result.push(generateColor(i*3.6));
  }
  return result;
}

export default generateColors;
