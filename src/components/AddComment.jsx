import React, { useContext } from 'react';
import '../index.scss';
import UserContext from '../store/user-context';

const AddComment = function () {
    const context = useContext(UserContext);

    return (
        <div className='card'>
            <div className='reply'>
                <img className='images__photo--reply' src={context.user.image} alt='user photo' />
                <textarea name='comment' id='123' rows='3' className='text--area'></textarea>
                <button className='btn btn--blue'>Comment</button>
            </div>
        </div>
    );
};

export default AddComment;
