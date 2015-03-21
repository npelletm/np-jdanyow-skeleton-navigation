/* */
System.register(["aurelia-templating", "./animator"], function (_export) {
  var Animator, CssAnimator;

  _export("install", install);

  function install(aurelia) {
    Animator.configureDefault(aurelia.container, new CssAnimator());
  }

  return {
    setters: [function (_aureliaTemplating) {
      Animator = _aureliaTemplating.Animator;
    }, function (_animator) {
      CssAnimator = _animator.CssAnimator;
    }],
    execute: function () {
      "use strict";
    }
  };
});
