System.register(["aurelia-templating"], function (_export) {
  var Behavior, BoundViewFactory, ViewSlot, _prototypeProperties, _classCallCheck, If;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      If = _export("If", (function () {
        function If(viewFactory, viewSlot) {
          _classCallCheck(this, If);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
        }

        _prototypeProperties(If, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("if").withProperty("value", "valueChanged", "if");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(newValue) {
              if (!newValue) {
                if (this.view) {
                  this.viewSlot.remove(this.view);
                  this.view.unbind();
                }

                this.showing = false;
                return;
              }

              if (!this.view) {
                this.view = this.viewFactory.create();
              }

              if (!this.showing) {
                this.showing = true;

                if (!this.view.bound) {
                  this.view.bind();
                }

                this.viewSlot.add(this.view);
              }
            },
            writable: true,
            configurable: true
          }
        });

        return If;
      })());
    }
  };
});