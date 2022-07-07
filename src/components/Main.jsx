import React, { useContext } from 'react';
import '../index.scss';
// import Reply from './Reply';
// import Comment from './Comment';
import UserContext from '../store/user-context';

const Main = function () {
    const context = useContext(UserContext);

    const topicSelectHandler = function (event) {
        console.log(event.target.innerText);
        console.log(context.comments);
    };

    return (
        <main className='main'>
            <header className='main__header'>
                <h1 className='header-huge'>Topics</h1>
                <div className='topics'>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        Hobbies
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        Travel
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        Health
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        food
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        Tech
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        animals
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        family
                    </div>
                    <div className='topics__btn' onClick={topicSelectHandler}>
                        life
                    </div>
                </div>
            </header>
            {/* {comments &&
                comments.map((comment) => (
                    <div key={comment.id} className='main__body'>
                        {comment.content}
                    </div>
                ))} */}
        </main>
    );
};

export default Main;
