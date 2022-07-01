import React from 'react';
import '../index.scss';

const Comment = function () {
    return (
        <div className='card'>
            <div className='comment'>
                <div className='comment__votes'>
                    <span className='comment__votes-add'>+</span>
                    <span className='comment__votes-number'>12</span>
                    <span className='comment__voter-minus'>-</span>
                </div>
                <article className='comment__main'>
                    <header className='comment__main__header'>
                        <img
                            className='images__photo'
                            src='https://res.cloudinary.com/kreiva/image/upload/v1656680047/Interactive%20comments%20app/image-amyrobson_r3w5jz.png'
                            alt='user-photo'
                        />
                        <h3 className='header-small'>ammyrobson</h3>
                        <span className='header-small-gray'>1 month ago</span>
                        <div className='reply'>Reply</div>
                    </header>
                    <div>
                        Hi! I love dogs! All my life I had one or even few at home. But now I live with my partner and
                        he's alergic to dogs. He loves them too though. Maybe there is some breeds or ways to have a pet
                        without agregating allergy... Would like to hear your experiences?
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Comment;
