import React, { useContext } from 'react';
import '../index.scss';
import UserContext from '../store/user-context';

const Comment = function (props) {
    const comment = props.comment;
    const replies = props.replies;

    const context = useContext(UserContext);
    const comments = context.comments;

    const getReplies = function (commentId) {
        const replies = comments.filter((comment) => comment.parentId === commentId);
        return replies;
    };

    return (
        <div>
            <div className='card'>
                <div className='comment'>
                    <div className='comment__votes'>
                        <span className='comment__votes__btn'>+</span>
                        <span className='comment__votes__btn-number'>{comment.score}</span>
                        <span className='comment__votes__btn'>-</span>
                    </div>
                    <article className='comment__main'>
                        <header className='comment__main__header'>
                            <img className='images__photo' src={`${comment.avatar}`} alt='user-photo' />
                            <h3 className='header-small-colored'>{comment.username}</h3>
                            <span className='header-small-gray'>{comment.createdAt}</span>
                            <div className='header-reply'>Reply</div>
                        </header>
                        <div className='text'>{comment.content}</div>
                    </article>
                </div>
            </div>
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
