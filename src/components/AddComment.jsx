import React, { useContext } from 'react';
import '../index.scss';
import UserContext from '../store/user-context';

const AddComment = function () {
    // states

    // data
    const context = useContext(UserContext);
    const user = context.user;
    const today = new Date().toLocaleDateString();

    // handlers
    const addCommentHandler = function () {};

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
                        <h3 className='header-small'>{user.username}</h3>
                        {<span className='header-small-colored'>you</span>}
                        <span className='header-small-gray'>{today}</span>
                        <div className='header-reply' onClick={addCommentHandler}>
                            Post
                        </div>
                    </header>
                </article>
            </div>

            <textarea name='comment' id='123' rows='3' className='text--area '></textarea>
        </div>
    );
};

export default AddComment;
