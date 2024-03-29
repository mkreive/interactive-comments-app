import React, { useContext, useState } from 'react';
import '../index.scss';
import UserContext from '../store/user-context';
import Reply from './Reply';

const Comment = function (props) {
    // states
    const [replyComment, setReplyComment] = useState(false);

    // data
    const comment = props.comment;
    const [voted, setVoted] = useState(false);
    const [score, setScore] = useState(comment.score);

    const replies = props.replies;
    const context = useContext(UserContext);
    const comments = context.comments;
    const usernames = [];

    // functions
    (function () {
        comments.forEach((comment) => {
            usernames.push({ id: comment.id, display: comment.username });
        });
    })();

    const getReplies = function (commentId) {
        const replies = comments.filter((comment) => comment.parentId === commentId);
        return replies;
    };

    // handlers
    const onReplyHandler = function () {
        setReplyComment(true);
    };

    const onSubmitReplyHandler = function () {
        setReplyComment(false);
    };
    const onDeleteCommentHandler = function () {
        context.deleteComment(comment.id);
    };

    const upvoteHandler = function () {
        if (!voted) {
            context.voteComment(comment, 'up');
            setScore(score + 1);
            setVoted(true);
        }
    };
    const downvoteHandler = function () {
        if (!voted) {
            context.voteComment(comment, 'down');
            setScore(score - 1);
            setVoted(true);
        }
    };

    return (
        <div>
            <div className='card'>
                <div className='comment'>
                    <div className='comment__votes'>
                        <span className='comment__votes__btn' onClick={upvoteHandler}>
                            {comment.username !== context.user.username &&
                                `${'+'}
                            `}
                        </span>
                        <span className='comment__votes__btn-number'>{score}</span>
                        <span className='comment__votes__btn' onClick={downvoteHandler}>
                            {comment.username !== context.user.username &&
                                `${'-'}
                            `}
                        </span>
                    </div>
                    <article className='comment__main'>
                        <header className='comment__main__header'>
                            <img className='images__photo' src={`${comment.avatar}`} alt='user-photo' />
                            <h3 className='header-small'>{comment.username}</h3>
                            {comment.username === context.user.username && (
                                <span className='header-small-colored'>you</span>
                            )}
                            {comment.speciality && <span className='header-small-colored'>{comment.speciality}</span>}
                            <span className='header-small-gray'>{comment.createdAt}</span>

                            {comment.username === context.user.username ? (
                                <div className='header-delete' onClick={onDeleteCommentHandler}>
                                    Delete
                                </div>
                            ) : (
                                <div className='header-reply' onClick={onReplyHandler}>
                                    Reply
                                </div>
                            )}
                        </header>
                        <div className='text'>{comment.content}</div>
                    </article>
                </div>
            </div>
            {replyComment && (
                <Reply
                    usernames={usernames}
                    parentId={comment.id}
                    topic={comment.topic}
                    onReply={onSubmitReplyHandler}
                />
            )}
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
