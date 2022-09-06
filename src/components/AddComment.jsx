import React, { useContext, useState } from 'react';
import '../index.scss';
import UserContext from '../store/user-context';

const AddComment = function (props) {
    // states
    const [comment, setComment] = useState('');

    // data
    const selectedTopic = props.topic;
    const context = useContext(UserContext);
    const user = context.user;
    const today = new Date().toLocaleDateString();

    // handlers
    const writingCommentHandler = function (e) {
        setComment(e.target.value);
    };
    const addCommentHandler = function () {
        context.addComment(user, selectedTopic, comment);
        console.log('contextas add komente', context);
        setComment('');
        props.addNewComment();
    };

    return (
        <div className='card'>
            <div className='comment'>
                <article className='comment__main'>
                    <header className='comment__main__header'>
                        <img
                            className='images__photo'
                            src={
                                user.image ||
                                'https://res.cloudinary.com/kreiva/image/upload/v1660117424/Interactive%20comments%20app/anonymous_iqa63x.png'
                            }
                            alt='user-photo'
                        />
                        <h3 className='header-small'>{user.username || 'anonymous'}</h3>
                        {user.username && <span className='header-small-colored'>you</span>}
                        <span className='header-small-gray'>{today}</span>
                    </header>
                </article>
            </div>
            <form action='POST'>
                <textarea
                    name='comment'
                    id='123'
                    rows='1'
                    className='text--area text--comment'
                    value={comment}
                    onChange={writingCommentHandler}
                ></textarea>
                <div className='btn' onClick={addCommentHandler}>
                    Post
                </div>
            </form>
        </div>
    );
};

export default AddComment;
