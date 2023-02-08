// Referenced @ziyanwang1's TypeScript translation
// from P1: https://github.com/CMU-313/NodeBB/pull/91

import _ = require('lodash');

import meta = require('../meta');
import db = require('../database');
import plugins = require('../plugins');
import user = require('../user');
import topics = require('../topics');
import categories = require ('../categories');
import groups = require('../groups');
import utils = require('../utils');

export type PostObject = {
    pid: number;
    tid: number;
    content: string;
    uid: string;
    timestamp: number;
    isMain?: boolean;
    create?: (data: PostObject) => Promise<PostObject>;
    toPid?: number;
    ip?: number;
    handle?: number;
    cid?: number;
    uploads?: any;
    external_tags?: number[];
  };

type TopicObject = {
    cid: number;
    pinned: number;
  };

type Result = {
    post: PostObject;
}

function getTags(content: string): number[] {
    const taglist: number[] = [];
    let tempnum = 0;
    let i = 0;
    while (i < content.length) {
        // found $ tag
        if (content.charAt(i) === '$') {
            let j = i + 1;
            // find length of tag number
            while (j < content.length && content.charAt(j) !== '$') {
                j = j + 1;
            }
            // tag didn't end with an $ symbol or tag was $$ (no reference #)
            if (content.charAt(j) != '$' || j - i < 2) { 
                throw new Error('[[error:invalid-tag-format]]');
            }
            // parse tag # to integer type
            tempnum = Number(content.substring(i+1, j));
            // Add to array of tags
            taglist.push(tempnum);
            i = j;
        }
        i = i + 1;
    }
    return taglist;
}

module.exports = function (Posts:PostObject) {
    Posts.create = async function (data:PostObject) {
        // This is an internal method, consider using Topics.reply instead
        const { uid } = data;
        const { tid } = data;
        const content = data.content.toString();
        const timestamp = data.timestamp || Date.now();
        const isMain = data.isMain || false;

        const tags = getTags(content);


        if (!uid && parseInt(uid, 10) !== 0) {
            throw new Error('[[error:invalid-uid]]');
        }

        if (data.toPid && !utils.isNumber(data.toPid)) {
            throw new Error('[[error:invalid-pid]]');
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const pid:number = await db.incrObjectField('global', 'nextPid') as number;
        let postData:PostObject = {
            pid: pid,
            uid: uid,
            tid: tid,
            content: content,
            timestamp: timestamp,
            external_tags: tags,
        };

        if (data.toPid) {
            postData.toPid = data.toPid;
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (data.ip && meta.config.trackIpPerPost) {
            postData.ip = data.ip;
        }
        if (data.handle && !parseInt(uid, 10)) {
            postData.handle = data.handle;
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        let result:Result = await plugins.hooks.fire('filter:post.create', { post: postData, data: data }) as Result;
        postData = result.post;
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await db.setObject(`post:${postData.pid}`, postData);

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const topicData:TopicObject = await topics.getTopicFields(tid, ['cid', 'pinned']) as TopicObject;
        postData.cid = topicData.cid;

        async function addReplyTo(postData:PostObject, timestamp:number) {
            if (!postData.toPid) {
                return;
            }
            await Promise.all([
                // The next line calls a function in a module that has not been updated to TS yet
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                db.sortedSetAdd(`pid:${postData.toPid}:replies`, timestamp, postData.pid) as PostObject,
                // The next line calls a function in a module that has not been updated to TS yet
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                db.incrObjectField(`post:${postData.toPid}`, 'replies') as PostObject,
            ]);
        }

        await Promise.all([
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.sortedSetAdd('posts:pid', timestamp, postData.pid),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.incrObjectField('global', 'postCount'),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            user.onNewPostMade(postData),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            topics.onNewPostMade(postData),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            categories.onNewPostMade(topicData.cid, topicData.pinned, postData),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            groups.onNewPostMade(postData),
            addReplyTo(postData, timestamp),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            Posts.uploads.sync(postData.pid),
        ]);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        result = await plugins.hooks.fire('filter:post.get', { post: postData, uid: data.uid }) as Result;
        result.post.isMain = isMain;
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        plugins.hooks.fire('action:post.save', { post: _.clone(result.post) }) as Promise<void>;
        return result.post;
    };
};
