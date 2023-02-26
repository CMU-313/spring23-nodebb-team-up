'use strict';

var async = require('async');
var Topics = require.main.require('./src/topics');

var Plugin = {sortByBookmarks :
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
};

module.exports = Plugin;