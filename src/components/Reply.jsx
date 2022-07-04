import React from 'react';
import '../index.scss';

const Reply = function () {
    return (
        <div className='card'>
            <div className='reply'>
                <img
                    className='images__photo--reply'
                    src='https://res.cloudinary.com/kreiva/image/upload/v1656680047/Interactive%20comments%20app/image-juliusomo_lefxnc.webp'
                    alt='user photo'
                />
                <textarea name='comment' id='123' rows='5' className='text--area'></textarea>
                <button className='btn btn--blue'>Reply</button>
            </div>
        </div>
    );
};

export default Reply;
