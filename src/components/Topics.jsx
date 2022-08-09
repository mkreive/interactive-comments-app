import React, { useContext } from 'react';
import '../index.scss';
import dataTopics from '../dataTopics.json';
import Comment from './Comment';
import UserContext from '../store/user-context';

const Topics = function () {
    // data
    const topics = dataTopics.topics;
    const context = useContext(UserContext);
    const comments = context.comments;

    const topicSelectHandler = function (event) {
        const selectedTopic = event.target.innerText;
        context.filterComments(selectedTopic);
    };
    const parentComments = comments.filter((comment) => comment.parentId === null);

    const getReplies = function (commentId) {
        const replies = comments.filter((comment) => comment.parentId === commentId);
        return replies;
    };

    return (
        <main className='topic'>
            <header className='topic__header'>
                <h1 className='header-huge'>Topics</h1>
                <div className='topics'>
                    {topics.map((topic) => (
                        <div key={topic.id} className='topics__btn' onClick={topicSelectHandler}>
                            {topic.name}
                        </div>
                    ))}
                </div>
            </header>
            {parentComments.map((comment) => (
                <Comment key={comment.id} comment={comment} replies={getReplies(comment.id)}></Comment>
            ))}
        </main>
    );
};

export default Topics;