define([
  'jquery',
  'underscore',
  'backbone',
  'views/track',
  'views/app'
], function ($, _, Backbone, TrackView) {
  'use strict';

  var AlbumView = Backbone.View.extend({

    tagName:  'li',

    template: _.template($('#album-template').html()),

    initialize: function() {
      // initially render album with one track
      this.$el.html(this.template(this.model.toJSON()));
      this.addTrack(this.model.get('tracks').first());

      // listen to addition of tracks
      this.listenTo(this.model.get('tracks'), 'add', this.addTrack);
    },

    addTrack: function(data) {
      this.trigger('appendTrack', this.model.get('tracks').length);
      var view = new TrackView({ model: data });
      this.$('.tracks').append(view.render().el);
    }

  });

  return AlbumView;
  
});
