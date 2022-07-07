import React from 'react';
import '../index.scss';

const Comment = function (props) {
    const comment = props.comment;

    return (
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
    );
};

export default Comment;
