import bootstrap from 'bootstrap';

export class Test {
  constructor() {
    this.colors = getColors();

    this.selectedColorName = 'blue';
    this.selectedColorNames = ['aliceblue', 'blue'];
    this.selectedColorNames2 = ['aliceblue', 'blue'];

    this.selectedColor = this.colors[4];
    this.selectedColors = [this.colors[1], this.colors[4]];
    this.selectedColors2 = [this.colors[1], this.colors[4]];

    this.hack = 0;
  }

  randomize() {
    var i = this.random(1, 20),
        items = [];
    while(i--) {
      items[i] = this.colors[this.random(0, this.colors.length - 1)];
    }

    // property assignment.
    this.selectedColorName = items[0].name;
    this.selectedColorNames = items.map(c => c.name);

    this.selectedColor = items[0];
    this.selectedColors = items;

    // property mutation.
    if (this.selectedColorNames2 === null) {
      this.selectedColorNames2 = [];
    }
    if (this.selectedColors2 === null) {
      this.selectedColors2 = [];
    }
    while(this.selectedColorNames2.length) {
      this.selectedColorNames2.pop();
    }
    while(this.selectedColors2.length) {
      this.selectedColors2.pop();
    }
    i = items.length;
    while(i--) {
      this.selectedColorNames2.push(items[i].name);
      this.selectedColors2.push(items[i]);
    }
    // make sure the interpolation bindings related to the push/pop examples refresh.
    this.hack++;
  }

  assignNull() {
    this.selectedColorName = null;
    this.selectedColorNames = null;
    this.selectedColorNames2 = null;

    this.selectedColor = null;
    this.selectedColors = null;
    this.selectedColors2 = null;
  }

  assignEmpty() {
    this.selectedColorName = '';
    this.selectedColorNames = [];
    this.selectedColorNames2 = [];

    this.selectedColor = null;
    this.selectedColors = [];
    this.selectedColors2 = [];
  }

  assignGarbage() {
    this.selectedColorName = 'Garbage';
    this.selectedColorNames = ['Donald Draper', 'Frank Underwood'];
    this.selectedColorNames2 = ['Aurelia', 'Angular', 'Backbone', 'Durandal', 'Ember', 'Knockout'];

    this.selectedColor = { garbabe: 'asdfasdf', foo: true };
    this.selectedColors = [{ name: 'Donald Draper' }, { name: 'Frank Underwood' }];
    this.selectedColors2 = [['Aurelia', 'Angular', 'Backbone', 'Durandal', 'Ember', 'Knockout'], ['Aurelia', 'Angular', 'Backbone', 'Durandal', 'Ember', 'Knockout']];
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

function getColors() {
  var colors = [], propertyName;
  for(propertyName in colorsObject) {
    if (colorsObject.hasOwnProperty(propertyName)) {
      colors.push({ hex: colorsObject[propertyName], name: propertyName });
    }
  }
  return colors;
}

var colorsObject = {
  "aqua": "#00ffff",
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "black": "#000000",
  "blue": "#0000ff",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgreen": "#006400",
  "darkturquoise": "#00ced1",
  "deepskyblue": "#00bfff",
  "green": "#008000",
  "lime": "#00ff00",
  "mediumblue": "#0000cd",
  "mediumspringgreen": "#00fa9a",
  "navy": "#000080",
  "springgreen": "#00ff7f",
  "teal": "#008080",
  "midnightblue": "#191970",
  "dodgerblue": "#1e90ff",
  "lightseagreen": "#20b2aa",
  "forestgreen": "#228b22",
  "seagreen": "#2e8b57",
  "darkslategray": "#2f4f4f",
  "darkslategrey": "#2f4f4f",
  "limegreen": "#32cd32",
  "mediumseagreen": "#3cb371",
  "turquoise": "#40e0d0",
  "royalblue": "#4169e1",
  "steelblue": "#4682b4",
  "darkslateblue": "#483d8b",
  "mediumturquoise": "#48d1cc",
  "indigo": "#4b0082",
  "darkolivegreen": "#556b2f",
  "cadetblue": "#5f9ea0",
  "cornflowerblue": "#6495ed",
  "mediumaquamarine": "#66cdaa",
  "dimgray": "#696969",
  "dimgrey": "#696969",
  "slateblue": "#6a5acd",
  "olivedrab": "#6b8e23",
  "slategray": "#708090",
  "slategrey": "#708090",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "mediumslateblue": "#7b68ee",
  "lawngreen": "#7cfc00",
  "aquamarine": "#7fffd4",
  "chartreuse": "#7fff00",
  "gray": "#808080",
  "grey": "#808080",
  "maroon": "#800000",
  "olive": "#808000",
  "purple": "#800080",
  "lightskyblue": "#87cefa",
  "skyblue": "#87ceeb",
  "blueviolet": "#8a2be2",
  "darkmagenta": "#8b008b",
  "darkred": "#8b0000",
  "saddlebrown": "#8b4513",
  "darkseagreen": "#8fbc8f",
  "lightgreen": "#90ee90",
  "mediumpurple": "#9370db",
  "darkviolet": "#9400d3",
  "palegreen": "#98fb98",
  "darkorchid": "#9932cc",
  "yellowgreen": "#9acd32",
  "sienna": "#a0522d",
  "brown": "#a52a2a",
  "darkgray": "#a9a9a9",
  "darkgrey": "#a9a9a9",
  "greenyellow": "#adff2f",
  "lightblue": "#add8e6",
  "paleturquoise": "#afeeee",
  "lightsteelblue": "#b0c4de",
  "powderblue": "#b0e0e6",
  "firebrick": "#b22222",
  "darkgoldenrod": "#b8860b",
  "mediumorchid": "#ba55d3",
  "rosybrown": "#bc8f8f",
  "darkkhaki": "#bdb76b",
  "silver": "#c0c0c0",
  "mediumvioletred": "#c71585",
  "indianred": "#cd5c5c",
  "peru": "#cd853f",
  "chocolate": "#d2691e",
  "tan": "#d2b48c",
  "lightgray": "#d3d3d3",
  "lightgrey": "#d3d3d3",
  "thistle": "#d8bfd8",
  "goldenrod": "#daa520",
  "orchid": "#da70d6",
  "palevioletred": "#db7093",
  "crimson": "#dc143c",
  "gainsboro": "#dcdcdc",
  "plum": "#dda0dd",
  "burlywood": "#deb887",
  "lightcyan": "#e0ffff",
  "lavender": "#e6e6fa",
  "darksalmon": "#e9967a",
  "palegoldenrod": "#eee8aa",
  "violet": "#ee82ee",
  "azure": "#f0ffff",
  "honeydew": "#f0fff0",
  "khaki": "#f0e68c",
  "lightcoral": "#f08080",
  "sandybrown": "#f4a460",
  "beige": "#f5f5dc",
  "mintcream": "#f5fffa",
  "wheat": "#f5deb3",
  "whitesmoke": "#f5f5f5",
  "ghostwhite": "#f8f8ff",
  "lightgoldenrodyellow": "#fafad2",
  "linen": "#faf0e6",
  "salmon": "#fa8072",
  "oldlace": "#fdf5e6",
  "bisque": "#ffe4c4",
  "blanchedalmond": "#ffebcd",
  "coral": "#ff7f50",
  "cornsilk": "#fff8dc",
  "darkorange": "#ff8c00",
  "deeppink": "#ff1493",
  "floralwhite": "#fffaf0",
  "fuchsia": "#ff00ff",
  "gold": "#ffd700",
  "hotpink": "#ff69b4",
  "ivory": "#fffff0",
  "lavenderblush": "#fff0f5",
  "lemonchiffon": "#fffacd",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightyellow": "#ffffe0",
  "magenta": "#ff00ff",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "pink": "#ffc0cb",
  "red": "#ff0000",
  "seashell": "#fff5ee",
  "snow": "#fffafa",
  "tomato": "#ff6347",
  "white": "#ffffff",
  "yellow": "#ffff00",
  "rebeccapurple": "#663399"
};
