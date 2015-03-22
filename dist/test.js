System.register(["bootstrap"], function (_export) {
  var bootstrap, _prototypeProperties, _classCallCheck, Test, StringifyValueConverter, colorsObject;

  function getColors() {
    var colors = [],
        propertyName;
    for (propertyName in colorsObject) {
      if (colorsObject.hasOwnProperty(propertyName)) {
        colors.push({ hex: colorsObject[propertyName], name: propertyName });
      }
    }
    return colors;
  }

  return {
    setters: [function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Test = _export("Test", (function () {
        function Test() {
          _classCallCheck(this, Test);

          this.colors = getColors();

          this.selectedColorName = "blue";
          this.selectedColorNames = ["aliceblue", "blue"];
          this.selectedColorNames2 = ["aliceblue", "blue"];

          this.selectedColor = this.colors[4];
          this.selectedColors = [this.colors[1], this.colors[4]];
          this.selectedColors2 = [this.colors[1], this.colors[4]];

          this.hack = 0;
        }

        _prototypeProperties(Test, null, {
          randomize: {
            value: function randomize() {
              var i = this.random(1, 20),
                  items = [];
              while (i--) {
                items[i] = this.colors[this.random(0, this.colors.length - 1)];
              }

              // property assignment.
              this.selectedColorName = items[0].name;
              this.selectedColorNames = items.map(function (c) {
                return c.name;
              });

              this.selectedColor = items[0];
              this.selectedColors = items;

              // property mutation.
              if (this.selectedColorNames2 === null) {
                this.selectedColorNames2 = [];
              }
              if (this.selectedColors2 === null) {
                this.selectedColors2 = [];
              }
              while (this.selectedColorNames2.length) {
                this.selectedColorNames2.pop();
              }
              while (this.selectedColors2.length) {
                this.selectedColors2.pop();
              }
              i = items.length;
              while (i--) {
                this.selectedColorNames2.push(items[i].name);
                this.selectedColors2.push(items[i]);
              }
              // make sure the interpolation bindings related to the push/pop examples refresh.
              this.hack++;
            },
            writable: true,
            configurable: true
          },
          assignNull: {
            value: function assignNull() {
              this.selectedColorName = null;
              this.selectedColorNames = null;
              this.selectedColorNames2 = null;

              this.selectedColor = null;
              this.selectedColors = null;
              this.selectedColors2 = null;
            },
            writable: true,
            configurable: true
          },
          assignEmpty: {
            value: function assignEmpty() {
              this.selectedColorName = "";
              this.selectedColorNames = [];
              this.selectedColorNames2 = [];

              this.selectedColor = null;
              this.selectedColors = [];
              this.selectedColors2 = [];
            },
            writable: true,
            configurable: true
          },
          assignGarbage: {
            value: function assignGarbage() {
              this.selectedColorName = "Garbage";
              this.selectedColorNames = ["Donald Draper", "Frank Underwood"];
              this.selectedColorNames2 = ["Aurelia", "Angular", "Backbone", "Durandal", "Ember", "Knockout"];

              this.selectedColor = { garbabe: "asdfasdf", foo: true };
              this.selectedColors = [{ name: "Donald Draper" }, { name: "Frank Underwood" }];
              this.selectedColors2 = [["Aurelia", "Angular", "Backbone", "Durandal", "Ember", "Knockout"], ["Aurelia", "Angular", "Backbone", "Durandal", "Ember", "Knockout"]];
            },
            writable: true,
            configurable: true
          },
          randomizeOptions: {
            value: function randomizeOptions() {
              var colors = this.colors,
                  i = colors.length;
              while (i--) {
                colors[i].sort = this.random(0, colors.length - 1);
              }
              colors.sort(function (a, b) {
                return a.sort - b.sort;
              });

              i = colors.length;
              while (i--) {
                delete colors[i].sort;
              }
            },
            writable: true,
            configurable: true
          },
          random: {
            value: function random(min, max) {
              return Math.floor(Math.random() * (max - min + 1) + min);
            },
            writable: true,
            configurable: true
          }
        });

        return Test;
      })());
      StringifyValueConverter = _export("StringifyValueConverter", (function () {
        function StringifyValueConverter() {
          _classCallCheck(this, StringifyValueConverter);
        }

        _prototypeProperties(StringifyValueConverter, null, {
          toView: {
            value: function toView(value) {
              if (value === null) {
                return "null";
              }if (value === undefined) {
                return "undefined";
              }return JSON.stringify(value, null, 2);
            },
            writable: true,
            configurable: true
          }
        });

        return StringifyValueConverter;
      })());
      colorsObject = {
        aqua: "#00ffff",
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        black: "#000000",
        blue: "#0000ff",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgreen: "#006400",
        darkturquoise: "#00ced1",
        deepskyblue: "#00bfff",
        green: "#008000",
        lime: "#00ff00",
        mediumblue: "#0000cd",
        mediumspringgreen: "#00fa9a",
        navy: "#000080",
        springgreen: "#00ff7f",
        teal: "#008080",
        midnightblue: "#191970",
        dodgerblue: "#1e90ff",
        lightseagreen: "#20b2aa",
        forestgreen: "#228b22",
        seagreen: "#2e8b57",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        limegreen: "#32cd32",
        mediumseagreen: "#3cb371",
        turquoise: "#40e0d0",
        royalblue: "#4169e1",
        steelblue: "#4682b4",
        darkslateblue: "#483d8b",
        mediumturquoise: "#48d1cc",
        indigo: "#4b0082",
        darkolivegreen: "#556b2f",
        cadetblue: "#5f9ea0",
        cornflowerblue: "#6495ed",
        mediumaquamarine: "#66cdaa",
        dimgray: "#696969",
        dimgrey: "#696969",
        slateblue: "#6a5acd",
        olivedrab: "#6b8e23",
        slategray: "#708090",
        slategrey: "#708090",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        mediumslateblue: "#7b68ee",
        lawngreen: "#7cfc00",
        aquamarine: "#7fffd4",
        chartreuse: "#7fff00",
        gray: "#808080",
        grey: "#808080",
        maroon: "#800000",
        olive: "#808000",
        purple: "#800080",
        lightskyblue: "#87cefa",
        skyblue: "#87ceeb",
        blueviolet: "#8a2be2",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        saddlebrown: "#8b4513",
        darkseagreen: "#8fbc8f",
        lightgreen: "#90ee90",
        mediumpurple: "#9370db",
        darkviolet: "#9400d3",
        palegreen: "#98fb98",
        darkorchid: "#9932cc",
        yellowgreen: "#9acd32",
        sienna: "#a0522d",
        brown: "#a52a2a",
        darkgray: "#a9a9a9",
        darkgrey: "#a9a9a9",
        greenyellow: "#adff2f",
        lightblue: "#add8e6",
        paleturquoise: "#afeeee",
        lightsteelblue: "#b0c4de",
        powderblue: "#b0e0e6",
        firebrick: "#b22222",
        darkgoldenrod: "#b8860b",
        mediumorchid: "#ba55d3",
        rosybrown: "#bc8f8f",
        darkkhaki: "#bdb76b",
        silver: "#c0c0c0",
        mediumvioletred: "#c71585",
        indianred: "#cd5c5c",
        peru: "#cd853f",
        chocolate: "#d2691e",
        tan: "#d2b48c",
        lightgray: "#d3d3d3",
        lightgrey: "#d3d3d3",
        thistle: "#d8bfd8",
        goldenrod: "#daa520",
        orchid: "#da70d6",
        palevioletred: "#db7093",
        crimson: "#dc143c",
        gainsboro: "#dcdcdc",
        plum: "#dda0dd",
        burlywood: "#deb887",
        lightcyan: "#e0ffff",
        lavender: "#e6e6fa",
        darksalmon: "#e9967a",
        palegoldenrod: "#eee8aa",
        violet: "#ee82ee",
        azure: "#f0ffff",
        honeydew: "#f0fff0",
        khaki: "#f0e68c",
        lightcoral: "#f08080",
        sandybrown: "#f4a460",
        beige: "#f5f5dc",
        mintcream: "#f5fffa",
        wheat: "#f5deb3",
        whitesmoke: "#f5f5f5",
        ghostwhite: "#f8f8ff",
        lightgoldenrodyellow: "#fafad2",
        linen: "#faf0e6",
        salmon: "#fa8072",
        oldlace: "#fdf5e6",
        bisque: "#ffe4c4",
        blanchedalmond: "#ffebcd",
        coral: "#ff7f50",
        cornsilk: "#fff8dc",
        darkorange: "#ff8c00",
        deeppink: "#ff1493",
        floralwhite: "#fffaf0",
        fuchsia: "#ff00ff",
        gold: "#ffd700",
        hotpink: "#ff69b4",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        lemonchiffon: "#fffacd",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightyellow: "#ffffe0",
        magenta: "#ff00ff",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        orange: "#ffa500",
        orangered: "#ff4500",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        pink: "#ffc0cb",
        red: "#ff0000",
        seashell: "#fff5ee",
        snow: "#fffafa",
        tomato: "#ff6347",
        white: "#ffffff",
        yellow: "#ffff00",
        rebeccapurple: "#663399"
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QWlCLFNBQVM7QUFDMUIsd0JBQWtCLFNBQVM7QUFDM0Isb0JBQWMsU0FBUztBQUN2QixtQkFBYSxTQUFTO0FBQ3RCLHVCQUFpQixTQUFTO0FBQzFCLHNCQUFnQixTQUFTO0FBQ3pCLG1CQUFhLFNBQVM7QUFDdEIsbUJBQWEsU0FBUztBQUN0QixnQkFBVSxTQUFTO0FBQ25CLHlCQUFtQixTQUFTO0FBQzVCLG1CQUFhLFNBQVM7QUFDdEIsY0FBUSxTQUFTO0FBQ2pCLG1CQUFhLFNBQVM7QUFDdEIsYUFBTyxTQUFTO0FBQ2hCLG1CQUFhLFNBQVM7QUFDdEIsbUJBQWEsU0FBUztBQUN0QixpQkFBVyxTQUFTO0FBQ3BCLG1CQUFhLFNBQVM7QUFDdEIsZ0JBQVUsU0FBUztBQUNuQix1QkFBaUIsU0FBUztBQUMxQixpQkFBVyxTQUFTO0FBQ3BCLG1CQUFhLFNBQVM7QUFDdEIsY0FBUSxTQUFTO0FBQ2pCLG1CQUFhLFNBQVM7QUFDdEIsbUJBQWEsU0FBUztBQUN0QixrQkFBWSxTQUFTO0FBQ3JCLG9CQUFjLFNBQVM7QUFDdkIsdUJBQWlCLFNBQVM7QUFDMUIsZ0JBQVUsU0FBUztBQUNuQixlQUFTLFNBQVM7QUFDbEIsa0JBQVksU0FBUztBQUNyQixlQUFTLFNBQVM7QUFDbEIsb0JBQWMsU0FBUztBQUN2QixvQkFBYyxTQUFTO0FBQ3ZCLGVBQVMsU0FBUztBQUNsQixtQkFBYSxTQUFTO0FBQ3RCLGVBQVMsU0FBUztBQUNsQixvQkFBYyxTQUFTO0FBQ3ZCLG9CQUFjLFNBQVM7QUFDdkIsOEJBQXdCLFNBQVM7QUFDakMsZUFBUyxTQUFTO0FBQ2xCLGdCQUFVLFNBQVM7QUFDbkIsaUJBQVcsU0FBUztBQUNwQixnQkFBVSxTQUFTO0FBQ25CLHdCQUFrQixTQUFTO0FBQzNCLGVBQVMsU0FBUztBQUNsQixrQkFBWSxTQUFTO0FBQ3JCLG9CQUFjLFNBQVM7QUFDdkIsa0JBQVksU0FBUztBQUNyQixxQkFBZSxTQUFTO0FBQ3hCLGlCQUFXLFNBQVM7QUFDcEIsY0FBUSxTQUFTO0FBQ2pCLGlCQUFXLFNBQVM7QUFDcEIsZUFBUyxTQUFTO0FBQ2xCLHVCQUFpQixTQUFTO0FBQzFCLHNCQUFnQixTQUFTO0FBQ3pCLG1CQUFhLFNBQVM7QUFDdEIscUJBQWUsU0FBUztBQUN4QixxQkFBZSxTQUFTO0FBQ3hCLGlCQUFXLFNBQVM7QUFDcEIsbUJBQWEsU0FBUztBQUN0QixrQkFBWSxTQUFTO0FBQ3JCLHFCQUFlLFNBQVM7QUFDeEIsZ0JBQVUsU0FBUztBQUNuQixtQkFBYSxTQUFTO0FBQ3RCLG9CQUFjLFNBQVM7QUFDdkIsbUJBQWEsU0FBUztBQUN0QixjQUFRLFNBQVM7QUFDakIsYUFBTyxTQUFTO0FBQ2hCLGtCQUFZLFNBQVM7QUFDckIsY0FBUSxTQUFTO0FBQ2pCLGdCQUFVLFNBQVM7QUFDbkIsZUFBUyxTQUFTO0FBQ2xCLGdCQUFVLFNBQVM7QUFDbkIsdUJBQWlCLFNBQVM7T0FDM0IiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9