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

          this.checkedBooleanTest = { a: false, b: true, c: false, d: true };
          this.radioBooleanTest = { a: false, b: false, c: false, d: false };
        }

        _prototypeProperties(Test, null, {
          deselectAll: {
            value: function deselectAll() {
              this.selectedColors = [];
              this.selectedColor = null;
              this.selectedColorNames = [];
              this.selectedColorName = null;

              this.checkedBooleanTest.a = false;
              this.checkedBooleanTest.b = false;
              this.checkedBooleanTest.c = false;
              this.checkedBooleanTest.d = false;

              this.radioBooleanTest.a = false;
              this.radioBooleanTest.b = false;
              this.radioBooleanTest.c = false;
              this.radioBooleanTest.d = false;
            },
            writable: true,
            configurable: true
          },
          randomizeSelection: {
            value: function randomizeSelection() {
              var _this = this;

              var iterations = arguments[0] === undefined ? 7 : arguments[0];

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

              this.checkedBooleanTest.a = this.random(0, 1) === 1;
              this.checkedBooleanTest.b = this.random(0, 1) === 1;
              this.checkedBooleanTest.c = this.random(0, 1) === 1;
              this.checkedBooleanTest.d = this.random(0, 1) === 1;

              var r = this.random(0, 3);
              this.radioBooleanTest.a = r === 0;
              this.radioBooleanTest.b = r === 1;
              this.radioBooleanTest.c = r === 2;
              this.radioBooleanTest.d = r === 3;

              if (iterations > 0) {
                iterations--;
                setTimeout(function () {
                  return _this.randomizeSelection(iterations);
                }, 100);
              }
            },
            writable: true,
            configurable: true
          },
          randomizeOptions: {
            value: function randomizeOptions() {
              var _this = this;

              var iterations = arguments[0] === undefined ? 7 : arguments[0];

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

              if (iterations > 0) {
                iterations--;
                setTimeout(function () {
                  return _this.randomizeOptions(iterations);
                }, 100);
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
//# sourceMappingURL=data:application/json;base64,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QUFPLE1BQU0sR0FBRztBQUNaLGlCQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDMUIsaUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixpQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2VBQzdCLEdBQUcsSUFBSSxDQUFDO2FBQ1Y7Ozs7QUFFRCxnQkFBTTttQkFBQSxnQkFBQyxHQUFHLEVBQUU7QUFDVixrQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixxQkFBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUNwRjs7Ozs7O2VBYlUseUJBQXlCIiwiZmlsZSI6ImNoZWNrZWQtdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9