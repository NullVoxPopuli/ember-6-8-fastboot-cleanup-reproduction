'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
  'ember-cli-babel': {
     // turn off the old transform
     // (for this to work when using Embroider you need https://github.com/embroider-build/embroider/pull/1673)
     disableDecoratorTransforms: true,
   },
   babel: {
     plugins: [
       // add the new transform.
       require.resolve('decorator-transforms'),
     ],
   },
  });

  const {
    Webpack
  } = require("@embroider/webpack");

  return require("@embroider/compat").compatBuild(app, Webpack, {
    staticEmberSource: true,
    
    // staticAddonTestSupportTrees: true,
    // staticAddonTrees: true,
    // staticHelpers: true,
    // staticModifiers: true,
    // staticComponents: true,
    // splitAtRoutes: ['route.name'], // can also be a RegExp
    packagerOptions: {
       webpackConfig: { 
        devtool: 'source-map'
       }
    },
    // 
    extraPublicTrees: []
  });
};
