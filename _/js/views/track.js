define([
  'jquery',
  'underscore',
  'backbone',
  'lib/jquery.timeago'
], function ($, _, Backbone) {
  'use strict';

  var TrackView = Backbone.View.extend({

    tagName:  'li',

    template: _.template($('#track-template').html()),

    initialize: function(data) {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

  return TrackView;
  
});
