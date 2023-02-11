// import db from '../database';
// import { TopicObject } from '../types';
// import topics from ".";

'use strict';

const _ = require('lodash');
const plugins = require('../plugins');
// const db = require('../database');
// const topics = require('.');

module.exports = function (Topics) {
    const topicTools = {};
    Topics.tools = topicTools;

    topicTools.resolve = async function (tid, uid) {
        return await toggleResolve(tid, uid, true);
    };

    topicTools.unresolve = async function (tid, uid) {
        return await toggleResolve(tid, uid, false);
    };

    async function toggleResolve(tid, uid, resolve) {
        // retrieve topic data & check exists
        const topicData = await Topics.getTopicFields(tid, ['tid', 'uid', 'cid']);
        if (!topicData || !topicData.cid) {
            throw new Error('[[error:no-topic]]');
        }
        // privilege check: pretty sure not necessary for resolve
        // const isAdminOrMod = await privileges.categories.isAdminOrMod(topicData.cid, uid);
        // if (!isAdminOrMod) {
        //     throw new Error('[[error:no-privileges]]');
        // }
        await Topics.setTopicField(tid, 'resolved', resolve ? 1 : 0);
        topicData.events = await Topics.events.log(tid, { type: resolve ? 'resolve' : 'unresolve', uid });
        topicData.resolved = resolve;

        plugins.hooks.fire('action:topic.resolve', { topic: _.clone(topicData), uid: uid });
        return topicData;
    }
};
