import underscore from 'underscore';

export function colorDistance(color1, color2) {
  let redDistance = color1.red() - color2.red();
  let blueDistance = color1.blue() - color2.blue();
  let greenDistance = color1.green() - color2.green();

  return Math.sqrt(redDistance * redDistance + blueDistance * blueDistance + greenDistance * greenDistance);
}

export function getClosestColor(color, colorArray){
  let sortedColors = underscore.sortBy(colorArray, function(testColor){
    return colorDistance(testColor, color);
  })
  return sortedColors[0];
}
