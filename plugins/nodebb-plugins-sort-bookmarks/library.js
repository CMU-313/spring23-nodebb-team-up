'use strict';

const Topics = require.main.require('./src/topics');

const Plugin = {
    sortByBookmarks: function (result, next) {
        const tids = result.topics.map(function (topic) {
            return topic.tid;
        });
        Topics.getTopicsByTids(tids, next);
    },
    function(topics, next) {
        topics.sort(function (a, b) {
            return b.bookmarks - a.bookmarks;
        });
        next(null, { topics: topics });
    },
};

module.exports = Plugin;
