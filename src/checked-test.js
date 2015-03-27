import {getColors} from './colors';

export class Test {
  constructor() {
    this.colors = getColors();

    this.selectedColors = [this.colors[82], this.colors[3]];
    this.selectedColor = this.colors[82];

    this.selectedColorNames = [this.colors[82].name, this.colors[3].name];
    this.selectedColorName = this.colors[82].name;
  }

  randomizeSelection() {
    var i = this.random(1, this.colors.length),
        items = [];
    while(i--) {
      items[i] = this.colors[this.random(0, this.colors.length - 1)];
    }

    this.selectedColor = items[5];
    this.selectedColorName = this.selectedColor.name;

    if (this.selectedColorNames === null) {
      this.selectedColorNames = [];
    }
    if (this.selectedColors === null) {
      this.selectedColors = [];
    }
    while(this.selectedColorNames.length) {
      this.selectedColorNames.pop();
    }
    while(this.selectedColors.length) {
      this.selectedColors.pop();
    }
    i = items.length;
    while(i--) {
      this.selectedColorNames.push(items[i].name);
      this.selectedColors.push(items[i]);
    }
  }

  randomizeOptions() {
    var colors = this.colors,
        i = colors.length;
    while(i--) {
      colors[i].sort = this.random(0, colors.length - 1);
    }
    colors.sort((a, b) => a.sort - b.sort);

    i = colors.length;
    while(i--) {
      delete colors[i].sort;
    }
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export class StringifyValueConverter {
  toView(value) {
    if (value === null)
      return 'null';
    if (value === undefined)
      return 'undefined';
    return JSON.stringify(value, null, 2);
  }
}

export class InvertColorValueConverter {
  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  toView(hex) {
    var rgb = this.hexToRgb(hex);
    return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186 ? '#000000' : '#ffffff';
  }
}
