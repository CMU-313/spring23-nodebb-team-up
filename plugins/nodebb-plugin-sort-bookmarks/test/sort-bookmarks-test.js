'use strict';

const assert = require('assert');
const Plugin = require('../index');
const Topics = require('../../../src/topics');

describe(' test Plugin', function () {
    describe('Plugin.displaySortedTopics', function () {
        //create sample TopicData output to test sort method 
        const req = {
            data: {tids: [1, 2, 3]},
            uid: 1
        };
        const results = {
            topics: [
            { tid: 1, bookmarks: 3 },
            { tid: 2, bookmarks: 1 },
            { tid: 3, bookmarks: 2 },
            ],
        };
        Topics.getTopicData = async function () {
            return results;
        };

  
      it('should sort topics by the number of bookmarks', async function () {
          const data = await Plugin.displaySortedTopics({req});
          assert.equal(data.results, results);
          assert.equal(data.results.topics, [
            { tid: 1, bookmarkCount: 3 },
            { tid: 3, bookmarkCount: 2 },
            { tid: 2, bookmarkCount: 1 },
          ]);
        });
    });
  });
  