'use strict';

// Referenced NodeJS documentation from https://nodejs.org/api/modules.html#requiremain
const Topics = require('../../src/topics');

const sort = async function (req) {
    const topicsList = await Topics.getTopicDataByTids(req.data.tids, req.uid);
    if (topicsList.length === 0) {
        return {};
    }
    topicsList.sort((a, b) => b.bookmarks - a.bookmarks);
    return topicsList;
};

// Referenced Plugin documentation from https://docs.nodebb.org/development/plugins/
const Plugin = {
    displaySortedTopics: async function (data) {
        if (data.length === 0) {
            return {};
        }
        data.results = await sort(data.req);
        return data;
    },
};

module.exports = Plugin;
