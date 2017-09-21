import {observable, extendObservable} from 'mobx';
import ColorGenerator from '../ColorGenerator';
import Color from 'color';
import underscore from 'underscore';
import {getClosestColor} from '../colorComparison';

class Colors {
  constructor() {
    extendObservable(this, {
        selectedColor: null,
    });
    this.allColors = observable(ColorGenerator());
    this.filteredColors = observable(this.allColors.slice());
    this.colorGroups = observable(this.generateColorGroups());
  }

  generateColorGroups(){
    let array = ['red', 'orange', 'yellow', '#00FF00', 'blue', 'purple', '#A0522D', 'grey'];
    return array.map((colorName) => {
      let outputName = colorName;
      if(colorName === array[3]){
        outputName = 'green';
      }
      else if(colorName === array[6]){
        outputName = 'brown';
      }
      return {
        name: outputName,
        value: Color(colorName),
      }
    })
  }

  filter(colorGroup) {
    const nextColors = underscore.filter(this.allColors.slice(), (color) => {
      return getClosestColor(color, this.colorGroups.map((colorOption)=>{return colorOption.value})).toString() === colorGroup.toString();
    });
    this.filteredColors.replace(nextColors);
  }

  search(query) {
    query = query.toLowerCase();
    const nextColors = underscore.filter(this.allColors.slice(), (color) => {
      return color.hex().toLowerCase().indexOf(query) !== -1;
    });
    this.filteredColors.replace(nextColors);
  }

  resetFilters() {
    this.filteredColors.replace(this.allColors.slice());
  }
}

export default Colors;
