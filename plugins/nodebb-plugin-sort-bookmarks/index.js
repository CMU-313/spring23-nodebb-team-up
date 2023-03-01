'use strict';

// Referenced NodeJS documentation from https://nodejs.org/api/modules.html#requiremain
const Topics = module.children.require('./src/topics');

const sort = async function (req) {
    const topicsList = await Topics.getTopicData(req.data.tids);
    topicsList.sort((a, b) => b.bookmarks - a.bookmarks);
    return topicsList;
};

// Referenced Plugin documentation from https://docs.nodebb.org/development/plugins/
const Plugin = {
    displaySortedTopics: async function (data) {
        data.results = await sort(data.req);
        return data;
    },
};

module.exports = Plugin;
