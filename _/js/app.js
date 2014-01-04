'use strict';

require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  }
});

require([
  'backbone',
  'views/app'
], function(Backbone, AppView) {

  new AppView();
  
});