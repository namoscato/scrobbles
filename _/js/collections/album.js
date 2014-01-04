define([
  'backbone',
  'models/track'
], function(Backbone, Track) {
  'use strict';
  
  var Album = Backbone.Collection.extend({
    
    model: Track
    
  });
  
  return Album;
  
});