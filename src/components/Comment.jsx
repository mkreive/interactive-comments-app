import React, { useContext, useState } from 'react';
import '../index.scss';
import UserContext from '../store/user-context';
import Reply from './Reply';

const Comment = function (props) {
    // states
    const [replyComment, setReplyComment] = useState(false);

    // data
    const commentId = props.commentId;
    const selectedTopic = props.topic;
    const comment = props.comment;
    const replies = props.replies;
    const context = useContext(UserContext);
    const comments = context.comments;

    console.log(commentId);
    console.log(selectedTopic);

    // functions
    const getReplies = function (commentId) {
        const replies = comments.filter((comment) => comment.parentId === commentId);
        return replies;
    };

    // handlers
    const onReplyHandler = function () {
        setReplyComment(true);
    };

    const upvoteHandler = function () {
        console.log(comment.score);
    };
    const downvoteHandler = function () {
        console.log('-');
    };

    return (
        <div>
            <div className='card'>
                <div className='comment'>
                    <div className='comment__votes'>
                        <span className='comment__votes__btn' onClick={upvoteHandler}>
                            +
                        </span>
                        <span className='comment__votes__btn-number'>{comment.score}</span>
                        <span className='comment__votes__btn' onClick={downvoteHandler}>
                            -
                        </span>
                    </div>
                    <article className='comment__main'>
                        <header className='comment__main__header'>
                            <img className='images__photo' src={`${comment.avatar}`} alt='user-photo' />
                            <h3 className='header-small'>{comment.username}</h3>
                            {comment.username === context.user.username && (
                                <span className='header-small-colored'>you</span>
                            )}
                            <span className='header-small-gray'>{comment.createdAt}</span>
                            <div className='header-reply' onClick={onReplyHandler}>
                                Reply
                            </div>
                        </header>
                        <div className='text'>{comment.content}</div>
                    </article>
                </div>
            </div>
            {replyComment && <Reply />}
            {replies.length > 0 && (
                <div className='replies'>
                    {replies.map((reply) => (
                        <Comment key={reply.id} comment={reply} replies={getReplies(reply.id)}></Comment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
