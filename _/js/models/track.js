define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  'use strict';
  
  var TrackModel = Backbone.Model.extend({
    
    defaults: {
      mbid: '',
      title: 'Untitled'
    }
    
  });
  
  return TrackModel;
  
});