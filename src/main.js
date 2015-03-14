export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('aurelia-knockout');

  aurelia.start().then(a => a.setRoot('ko-test', document.body));
}
