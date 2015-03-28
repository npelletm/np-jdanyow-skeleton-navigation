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
          this.radioBooleanTest = false;
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

              this.radioBooleanTest = null;
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

              this.selectedColor = items[0];
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

              var r = this.random(0, 2);
              switch (r) {
                case 0:
                  this.radioBooleanTest = null;
                  break;
                case 1:
                  this.radioBooleanTest = false;
                  break;
                case 2:
                  this.radioBooleanTest = true;
                  break;
              }

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

// function argsArrayToObject(args) {
//   var i = 1, options = {};
//   while(i < args.length) {
//     options[args[i]] = args[i + 1];
//     i += 2;
//   }
//   return options;
// }
//
// export class TestValueConverter {
//   toView(...args) {
//     var value = args[0];
//     args = argsArrayToObject(args);
//
//     console.log(JSON.stringify(args, null, 4));
//   }
// }
//# sourceMappingURL=data:application/json;base64,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aUJBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztlQUMxRDthQUNGOzs7O0FBRUQsZ0JBQU07bUJBQUEsZ0JBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNmLHFCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBLEFBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUMxRDs7Ozs7O2VBckdVLElBQUk7O0FBd0dKLDZCQUF1QjtpQkFBdkIsdUJBQXVCO2dDQUF2Qix1QkFBdUI7Ozs2QkFBdkIsdUJBQXVCO0FBQ2xDLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLGtCQUFJLEtBQUssS0FBSyxJQUFJO0FBQ2hCLHVCQUFPLE1BQU0sQ0FBQztlQUFBLEFBQ2hCLElBQUksS0FBSyxLQUFLLFNBQVM7QUFDckIsdUJBQU8sV0FBVyxDQUFDO2VBQUEsQUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkM7Ozs7OztlQVBVLHVCQUF1Qjs7QUFVdkIsK0JBQXlCO2lCQUF6Qix5QkFBeUI7Z0NBQXpCLHlCQUF5Qjs7OzZCQUF6Qix5QkFBeUI7QUFDcEMsa0JBQVE7bUJBQUEsa0JBQUMsR0FBRyxFQUFFO0FBQ1osa0JBQUksTUFBTSxHQUFHLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRSxxQkFBTyxNQUFNLEdBQUc7QUFDWixpQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLGlCQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDMUIsaUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztlQUM3QixHQUFHLElBQUksQ0FBQzthQUNWOzs7O0FBRUQsZ0JBQU07bUJBQUEsZ0JBQUMsR0FBRyxFQUFFO0FBQ1Ysa0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IscUJBQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDcEY7Ozs7OztlQWJVLHlCQUF5QiIsImZpbGUiOiJjaGVja2VkLXRlc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==