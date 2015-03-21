System.register(["aurelia-binding", "knockout"], function (_export) {
  var ObjectObservationAdapter, calcSplices, ko, _createClass, _classCallCheck, KnockoutObservationAdapter, ObservableObserver, ObservableArrayObserver;

  _export("install", install);

  function install(aurelia) {
    aurelia.withInstance(ObjectObservationAdapter, new KnockoutObservationAdapter());
  }

  return {
    setters: [function (_aureliaBinding) {
      ObjectObservationAdapter = _aureliaBinding.ObjectObservationAdapter;
      calcSplices = _aureliaBinding.calcSplices;
    }, function (_knockout) {
      ko = _knockout["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      KnockoutObservationAdapter = _export("KnockoutObservationAdapter", (function () {
        function KnockoutObservationAdapter() {
          _classCallCheck(this, KnockoutObservationAdapter);
        }

        _createClass(KnockoutObservationAdapter, {
          getPropertyObserver: {
            value: function getPropertyObserver(object, propertyName, descriptor) {
              var observable = object[propertyName];
              if (!ko.isObservable(observable)) {
                return null;
              }return new ObservableObserver(observable);
            }
          },
          getArrayObserver: {
            value: function getArrayObserver(object, taskQueue) {
              if (!ko.isObservable(object) || !(typeof observable.push === "function")) {
                return null;
              }return new ObservableArrayObserver(object, taskQueue);
            }
          }
        });

        return KnockoutObservationAdapter;
      })());
      ObservableObserver = _export("ObservableObserver", (function () {
        function ObservableObserver(observable) {
          _classCallCheck(this, ObservableObserver);

          this.observable = observable;
        }

        _createClass(ObservableObserver, {
          getValue: {
            value: function getValue() {
              return this.observable();
            }
          },
          setValue: {
            value: function setValue(newValue) {
              this.observable(newValue);
            }
          },
          subscribe: {
            value: function subscribe(callback) {
              var _this = this;

              var callbacks = this.callbacks;
              if (!callbacks) {
                this.callbacks = callbacks = [];
                this.oldValue = this.observable();
                this.subscription = this.observable.subscribe(function (newValue) {
                  var i = _this.callbacks.length;
                  while (i--) {
                    callbacks[i](newValue, _this.oldValue);
                  }
                  _this.oldValue = newValue;
                }, this);
              }

              callbacks.push(callback);

              return function () {
                callbacks.splice(callbacks.indexOf(callback), 1);
                if (callbacks.length > 0) return;
                _this.subscription.dispose();
                _this.callbacks = callbacks = null;
              };
            }
          }
        });

        return ObservableObserver;
      })());
      ObservableArrayObserver = _export("ObservableArrayObserver", (function () {
        function ObservableArrayObserver(observable, taskQueue) {
          _classCallCheck(this, ObservableArrayObserver);

          this.observable = observable;
          this.taskQueue = taskQueue;
        }

        _createClass(ObservableArrayObserver, {
          subscribe: {
            value: function subscribe(callback) {
              var _this = this;

              var callbacks = this.callbacks;
              if (!callbacks) {
                this.callbacks = callbacks = [];
                this.oldValue = this.observable();
                this.subscription1 = this.observable.subscribe(function (newValue) {
                  var i = _this.callbacks.length,
                      splices = calcSplices(newValue, 0, newValue.length - 1, _this.oldValue, 0, _this.oldValue.length);
                  while (i--) {
                    callbacks[i](splices);
                  }
                  _this.oldValue = newValue;
                }, this);
              }

              callbacks.push(callback);

              return function () {
                callbacks.splice(callbacks.indexOf(callback), 1);
                if (callbacks.length > 0) return;
                _this.subscription1.dispose();
                _this.callbacks = callbacks = null;
              };
            }
          },
          getObserver: {
            value: function getObserver(propertyName) {
              if (propertyName == "length") {
                return null; // TODO //this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.array));
              } else {
                throw new Error("You cannot observe the " + propertyName + " property of an array.");
              }
            }
          }
        });

        return ObservableArrayObserver;
      })());
    }
  };
});