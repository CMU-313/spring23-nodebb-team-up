'use strict';

var async = require('async');
var Topics = require.main.require('./src/topics');

var Plugin = {};

Plugin.sortByBookmarks = function(data, callback) {
  async.waterfall([
    async.apply(Topics.getTopicsFromSet, 'topics:tid', 0, -1, 'topics:bookmark_count'),
    function(result, next) {
      var tids = result.topics.map(function(topic) {
        return topic.tid;
      });
      Topics.getTopicsByTids(tids, next);
    },
    function(topics, next) {
      topics.sort(function(a, b) {
        return b.bookmarks - a.bookmarks;
      });
      next(null, {topics: topics});
    }
  ], callback);
};

module.exports = Plugin;