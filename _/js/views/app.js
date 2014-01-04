define([
  'jquery',
  'underscore',
  'backbone',
  'lib/lastfm/lastfm.api',
  'collections/playlist',
  'views/album'
], function ($, _, Backbone, LastFM, Playlist, AlbumView) {
  'use strict';

  var AppView = Backbone.View.extend({
    
    el: '#playlist',

    width: 0,
    
    initialize: function() {
      
      this.listenTo(Playlist, 'add', this.addAlbum);

      this.getTracks(Math.ceil(window.innerWidth / 200), 1);
    },

    getTracks: function(limit, page) {

      var app = this;

      LastFM.user.getRecentTracks({
        user: 'namoscato',
        limit: limit,
        page: page
      }, {

        success: function(data){
          var tracks = data.recenttracks.track;
          var count = 1;
          _.each(tracks, function(track) {
            
            var data = {
              mbid: track.album['mbid'],
              name: track.album['#text'],
              artist: track.artist['#text'],
              cover: track.image[3]['#text'],
              track: {
                mbid: track.mbid,
                title: track.name,
                time: typeof track.date == 'undefined' ? 'now playing' : $.timeago(new Date(track.date.uts * 1000))
              }
            };

            Playlist.add(data);

            if (++count == limit && app.width < window.innerWidth) {
              app.getTracks(limit, page + 1);
            }
          });

        }, error: function(code, message){
          console.log(code);
        }
      });
    },
    
    addAlbum: function(data) {
      
      var view = new AlbumView({ model: data });

      if (this.width == 0) {
        this.width = 260;
      } else {
        this.width += 200;
      }
      this.$el.width(this.width).append(view.render().$el);
    }

  });

  return AppView;
});