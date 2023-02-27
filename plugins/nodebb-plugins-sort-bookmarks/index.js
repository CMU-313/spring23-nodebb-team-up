'use strict';

// Referenced NodeJS documentation from https://nodejs.org/api/modules.html#requiremain
const Topics = module.children.require('./src/topics');
const bookmarks = module.children.require('./src/bookmarks');

const sort = async function (req) {
    const topicsList = await Topics.getTopicData(req.data.tids);
    for (const topic of topicsList) {
        topic.bookmarkCount = bookmarks.count(`topic:${topic.tid}:bookmarks`);
    }
    topicsList.sort((a, b) => b.bookmarkCount - a.bookmarkCount);
    console.log(topicsList);
    return topicsList;
};

// Referenced Plugin documentatino from https://docs.nodebb.org/development/plugins/

const Plugin = {
    displaySortedTopics: async function (data) {
        if (data.req.query.sort === 'bookmarks') {
            data.results = await sort(data.req);
        }
        return data;
    },
};

module.exports = Plugin;
