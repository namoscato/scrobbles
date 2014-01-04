define([
  'backbone',
  'models/album'
], function(Backbone, Album) {
  'use strict';
  
  var Playlist = Backbone.Collection.extend({
    
    model: Album,

    add: function(data) {

      var prevAlbum = this.last();

      if (prevAlbum != undefined && prevAlbum.equals(data)) {
        // add track to previous album
        prevAlbum.get('tracks').add(data.track);
      } else {
        // create new album
        Backbone.Collection.prototype.add.call(this, data);
      }
      
    }
    
  });
  
  return new Playlist();
});