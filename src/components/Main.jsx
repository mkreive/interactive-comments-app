import React, { useContext } from 'react';
import '../index.scss';
// import Reply from './Reply';
import Comment from './Comment';
import UserContext from '../store/user-context';

const Main = function () {
    const context = useContext(UserContext);
    const comments = context.comments;

    const topicSelectHandler = function (event) {
        const selectedTopic = event.target.innerText;
        context.filterComments(selectedTopic);
    };
    const parentComments = comments.filter((comment) => comment.parentId === null);

    // const renderComments = function (comments, id) {
    //     comments
    //         .filter((comment) => comment.parentId === id)
    //         .map((comment) => {
    //             return (
    //                 <div key={comment.id}>
    //                     <Comment key={comment.id} comment={comment}></Comment>
    //                     {renderComments(comments, comment.id)}
    //                 </div>
    //             );
    //         });
    // };

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
            {parentComments.map((comment) => (
                <Comment key={comment.id} comment={comment}></Comment>
            ))}
        </main>
    );
};

export default Main;
