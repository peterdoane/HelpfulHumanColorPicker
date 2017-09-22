import underscore from 'underscore';
import colordiff from 'color-diff';
import Color from 'color';

export function colorDistance(color1, color2) {
  let redDistance = color1.red() - color2.red();
  let blueDistance = color1.blue() - color2.blue();
  let greenDistance = color1.green() - color2.green();

  return Math.sqrt(redDistance * redDistance + blueDistance * blueDistance + greenDistance * greenDistance);
}

function isBrown(color){
  return color.hue() >= 19 && color.hue() <= 45;
}

function isGrey(color){
  return color.hue() >= 173 && color.hue() <= 229;
}

function isRed(color){
  return color.hue() >= 330 && color.hue() <= 350;
}

function isYellow(color){
  return color.hue() >= 52 && color.hue() <= 60;
}

function isOrange(color){
  return color.hue() >= 9 && color.hue() <= 20;
}

export function getClosestColor(color, colorArray) {
  if(color.saturationl() > 25){
    colorArray = underscore.filter(colorArray, function(colorGroupValue){
      return colorGroupValue.saturationl() > 0;
    })
  }
  else if(!isBrown(color)){
    colorArray = underscore.filter(colorArray, function(colorGroupValue){
      return colorGroupValue.toString() != Color('#A0522D').toString();
    })
  }
  else if(!isGrey(color)){
    colorArray = underscore.filter(colorArray, function(colorGroupValue){
      return colorGroupValue.toString() != Color('#BEBEBE').toString();
    })
  }
  else if(!isRed(color)){
    colorArray = underscore.filter(colorArray, function(colorGroupValue){
      return colorGroupValue.toString() != Color('#FF0000').toString();
    })
  }
  else if(!isYellow(color)){
    colorArray = underscore.filter(colorArray, function(colorGroupValue){
      return colorGroupValue.toString() != Color('#EEE600').toString();
    })
  }
  let testColor = prepareForDiff(color);
  let testColorArray = colorArray.map(prepareForDiff);
  let closestColor = colordiff.closest(testColor, testColorArray);
  return Color({r:closestColor.R, g:closestColor.G, b:closestColor.B})
}

function prepareForDiff(color) {
  let invertColor = color.rgb().object();
  return {R: invertColor.r, G: invertColor.g, B: invertColor.b}
}
