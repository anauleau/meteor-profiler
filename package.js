Package.describe({
  summary: "Tells you which queries and subscriptions are slow."
});

Package.on_use(function (api) {
  api.use('d3', ['client']);
  api.add_files(['dashboard.js'], ['client']);
  api.add_files(['profiler.js'], ['server']);
});

Package.on_test(function (api) {
  // api.use('tinytest');
  // api.use('profiler');
  // api.add_files('deps_tests.js', 'client');
});