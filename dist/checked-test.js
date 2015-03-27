System.register(["./colors"], function (_export) {
  var getColors, _prototypeProperties, _classCallCheck, Test, StringifyValueConverter, InvertColorValueConverter;

  return {
    setters: [function (_colors) {
      getColors = _colors.getColors;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Test = _export("Test", (function () {
        function Test() {
          _classCallCheck(this, Test);

          this.colors = getColors();

          this.selectedColors = [this.colors[82], this.colors[3]];
          this.selectedColor = this.colors[82];

          this.selectedColorNames = [this.colors[82].name, this.colors[3].name];
          this.selectedColorName = this.colors[82].name;
        }

        _prototypeProperties(Test, null, {
          randomizeSelection: {
            value: function randomizeSelection() {
              var i = this.random(1, this.colors.length),
                  items = [];
              while (i--) {
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
              while (this.selectedColorNames.length) {
                this.selectedColorNames.pop();
              }
              while (this.selectedColors.length) {
                this.selectedColors.pop();
              }
              i = items.length;
              while (i--) {
                this.selectedColorNames.push(items[i].name);
                this.selectedColors.push(items[i]);
              }
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
      InvertColorValueConverter = _export("InvertColorValueConverter", (function () {
        function InvertColorValueConverter() {
          _classCallCheck(this, InvertColorValueConverter);
        }

        _prototypeProperties(InvertColorValueConverter, null, {
          hexToRgb: {
            value: function hexToRgb(hex) {
              var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
              return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
              } : null;
            },
            writable: true,
            configurable: true
          },
          toView: {
            value: function toView(hex) {
              var rgb = this.hexToRgb(hex);
              return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186 ? "#000000" : "#ffffff";
            },
            writable: true,
            configurable: true
          }
        });

        return InvertColorValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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aUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixpQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLGlCQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7ZUFDN0IsR0FBRyxJQUFJLENBQUM7YUFDVjs7OztBQUVELGdCQUFNO21CQUFBLGdCQUFDLEdBQUcsRUFBRTtBQUNWLGtCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLHFCQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO2FBQ3BGOzs7Ozs7ZUFiVSx5QkFBeUIiLCJmaWxlIjoiY2hlY2tlZC10ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=