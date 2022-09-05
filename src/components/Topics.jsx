import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';
import dataTopics from '../dataTopics.json';
import Comment from './Comment';
import UserContext from '../store/user-context';
import AddComment from './AddComment';

const Topics = function () {
    // states
    const [selected, setSelected] = useState('');
    const [parents, setParents] = useState([]);

    // data
    const topics = dataTopics.topics;
    const context = useContext(UserContext);
    const comments = context.comments;

    // dependancies
    useEffect(() => {
        const parentComments = comments.filter((comment) => comment.parentId);
        setParents(parentComments);
    }, [comments]);

    // handlers
    const topicSelectHandler = function (event) {
        const selectedTopic = event.target.innerText;
        context.filterComments(selectedTopic);
        setSelected(selectedTopic);
    };

    const getReplies = function (commentId) {
        const replies = comments.filter((comment) => comment.parentId === commentId);
        return replies;
    };

    const linkStyle = {
        textDecoration: 'none',
    };

    const addNewCommentHandler = function () {
        console.log('komentas');
        context.filterComments(selected);
    };

    return (
        <main className='topic'>
            <header className='topic__header'>
                <h1 className='header-huge'>Topics</h1>
                <div className='topics'>
                    {topics.map((topic) => (
                        <Link
                            style={linkStyle}
                            to={`/topics/${topic.name}`}
                            key={topic.id}
                            className={selected === topic.name ? `topics__btn active` : `topics__btn`}
                            onClick={topicSelectHandler}
                        >
                            {topic.name}
                        </Link>
                    ))}
                </div>
            </header>
            {comments[0].id &&
                parents.map((comment) => (
                    <Comment
                        key={comment.id}
                        commentId={comment.id}
                        topic={selected}
                        comment={comment}
                        replies={getReplies(comment.id)}
                    ></Comment>
                ))}
            {selected && <AddComment topic={selected} addNewComment={addNewCommentHandler}></AddComment>}
        </main>
    );
};

export default Topics;
