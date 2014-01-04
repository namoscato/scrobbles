define([
  'underscore',
  'backbone',
  'collections/album'
], function(_, Backbone, Album) {
  'use strict';
  
  var AlbumModel = Backbone.Model.extend({
    
    defaults: {
      name: 'Untitled',
      artist: 'Unknown',
      year: '',
      cover: 'http://placehold.it/200x200'
    },

    initialize: function(data, options) {
      // create a new album
      this.set('tracks', new Album(data.track));
    },

    equals: function(data) {
      if (data.mbid.length && this.get('mbid') == data.mbid) {
        return true;
      } else if (data.name.length && this.get('name') == data.name) {
        return true;
      } else {
        return false;
      }
    }
    
  });
  
  return AlbumModel;
  
});