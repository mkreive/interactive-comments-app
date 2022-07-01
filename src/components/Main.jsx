import React from 'react';
import '../index.scss';

const Main = function () {
    return (
        <main className='main'>
            <header className='main__header'>
                <h1 className='header-huge'>Topics</h1>
                <div className='topics'>
                    <div className='topics__btn'>Family</div>
                    <div className='topics__btn'>Family</div>
                    <div className='topics__btn'>Family</div>
                    <div className='topics__btn'>Family</div>
                    <div className='topics__btn'>Family</div>
                    <div className='topics__btn'>Family</div>
                </div>
            </header>
            <div className='main__body'></div>
        </main>
    );
};

export default Main;
