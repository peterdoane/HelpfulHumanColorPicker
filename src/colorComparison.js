import underscore from 'underscore';
import colordiff from 'color-diff';
import Color from 'color';

export function colorDistance(color1, color2) {
  let redDistance = color1.red() - color2.red();
  let blueDistance = color1.blue() - color2.blue();
  let greenDistance = color1.green() - color2.green();

  return Math.sqrt(redDistance * redDistance + blueDistance * blueDistance + greenDistance * greenDistance);
}

export function getClosestColor(color, colorArray) {
  if(color.saturationl() > 25){
    colorArray = underscore.filter(colorArray, function(colorGroupValue){
      return colorGroupValue.saturationl() > 0;
    })
  }
  // let sortedColors = underscore.sortBy(colorArray, function(testColor){
  //   return colorDistance(testColor, color);
  // })
  let testColor = prepareForDiff(color);
  let testColorArray = colorArray.map(prepareForDiff);
  let closestColor = colordiff.closest(testColor, testColorArray);
  return Color({r:closestColor.R, g:closestColor.G, b:closestColor.B})
}

function prepareForDiff(color) {
  let invertColor = color.rgb().object();
  return {R: invertColor.r, G: invertColor.g, B: invertColor.b}
}
