Package.describe({
  name: 'neonaleon:gss',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'GSS for Meteor. Visit http://gridstylesheets.org/ for more information.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/neonaleon/meteor-gss.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('lib/client/gss.js', 'client');
  api.addFiles('lib/client/activate-gss.js', 'client');
});

Package.registerBuildPlugin({
  name: 'gss',
  sources: [
    'plugin.js'
  ]
});
