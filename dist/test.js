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
        }

        _prototypeProperties(Test, null, {
          randomize: {
            value: function randomize() {
              var i = this.random(0, 20),
                  items = [];
              while (i--) {
                items[i] = this.colors[this.random(0, this.colors.length)];
              }

              // property assignment.
              this.selectedColorName = items[0].name;
              this.selectedColorNames = items.map(function (c) {
                return c.name;
              });

              this.selectedColor = items[0];
              this.selectedColors = items;

              // property mutation.
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
//# sourceMappingURL=data:application/json;base64,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QUFrQixTQUFTO0FBQzNCLG9CQUFjLFNBQVM7QUFDdkIsbUJBQWEsU0FBUztBQUN0Qix1QkFBaUIsU0FBUztBQUMxQixzQkFBZ0IsU0FBUztBQUN6QixtQkFBYSxTQUFTO0FBQ3RCLG1CQUFhLFNBQVM7QUFDdEIsZ0JBQVUsU0FBUztBQUNuQix5QkFBbUIsU0FBUztBQUM1QixtQkFBYSxTQUFTO0FBQ3RCLGNBQVEsU0FBUztBQUNqQixtQkFBYSxTQUFTO0FBQ3RCLGFBQU8sU0FBUztBQUNoQixtQkFBYSxTQUFTO0FBQ3RCLG1CQUFhLFNBQVM7QUFDdEIsaUJBQVcsU0FBUztBQUNwQixtQkFBYSxTQUFTO0FBQ3RCLGdCQUFVLFNBQVM7QUFDbkIsdUJBQWlCLFNBQVM7QUFDMUIsaUJBQVcsU0FBUztBQUNwQixtQkFBYSxTQUFTO0FBQ3RCLGNBQVEsU0FBUztBQUNqQixtQkFBYSxTQUFTO0FBQ3RCLG1CQUFhLFNBQVM7QUFDdEIsa0JBQVksU0FBUztBQUNyQixvQkFBYyxTQUFTO0FBQ3ZCLHVCQUFpQixTQUFTO0FBQzFCLGdCQUFVLFNBQVM7QUFDbkIsZUFBUyxTQUFTO0FBQ2xCLGtCQUFZLFNBQVM7QUFDckIsZUFBUyxTQUFTO0FBQ2xCLG9CQUFjLFNBQVM7QUFDdkIsb0JBQWMsU0FBUztBQUN2QixlQUFTLFNBQVM7QUFDbEIsbUJBQWEsU0FBUztBQUN0QixlQUFTLFNBQVM7QUFDbEIsb0JBQWMsU0FBUztBQUN2QixvQkFBYyxTQUFTO0FBQ3ZCLDhCQUF3QixTQUFTO0FBQ2pDLGVBQVMsU0FBUztBQUNsQixnQkFBVSxTQUFTO0FBQ25CLGlCQUFXLFNBQVM7QUFDcEIsZ0JBQVUsU0FBUztBQUNuQix3QkFBa0IsU0FBUztBQUMzQixlQUFTLFNBQVM7QUFDbEIsa0JBQVksU0FBUztBQUNyQixvQkFBYyxTQUFTO0FBQ3ZCLGtCQUFZLFNBQVM7QUFDckIscUJBQWUsU0FBUztBQUN4QixpQkFBVyxTQUFTO0FBQ3BCLGNBQVEsU0FBUztBQUNqQixpQkFBVyxTQUFTO0FBQ3BCLGVBQVMsU0FBUztBQUNsQix1QkFBaUIsU0FBUztBQUMxQixzQkFBZ0IsU0FBUztBQUN6QixtQkFBYSxTQUFTO0FBQ3RCLHFCQUFlLFNBQVM7QUFDeEIscUJBQWUsU0FBUztBQUN4QixpQkFBVyxTQUFTO0FBQ3BCLG1CQUFhLFNBQVM7QUFDdEIsa0JBQVksU0FBUztBQUNyQixxQkFBZSxTQUFTO0FBQ3hCLGdCQUFVLFNBQVM7QUFDbkIsbUJBQWEsU0FBUztBQUN0QixvQkFBYyxTQUFTO0FBQ3ZCLG1CQUFhLFNBQVM7QUFDdEIsY0FBUSxTQUFTO0FBQ2pCLGFBQU8sU0FBUztBQUNoQixrQkFBWSxTQUFTO0FBQ3JCLGNBQVEsU0FBUztBQUNqQixnQkFBVSxTQUFTO0FBQ25CLGVBQVMsU0FBUztBQUNsQixnQkFBVSxTQUFTO0FBQ25CLHVCQUFpQixTQUFTO09BQzNCIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==