import React from 'react';
import '../index.scss';
import Reply from './Reply';
import Comment from './Comment';

const Main = function () {
    return (
        <main className='main'>
            <header className='main__header'>
                <h1 className='header-huge'>Topics</h1>
                <div className='topics'>
                    <div className='topics__btn'>Family</div>
                    <div className='topics__btn'>Life</div>
                    <div className='topics__btn'>Hobbies</div>
                    <div className='topics__btn'>Travel</div>
                    <div className='topics__btn'>Health</div>
                    <div className='topics__btn'>food</div>
                    <div className='topics__btn'>Tech</div>
                    <div className='topics__btn selected'>animals</div>
                </div>
            </header>
            <div className='main__body'>
                <Comment></Comment>
                <Reply></Reply>
            </div>
        </main>
    );
};

export default Main;
