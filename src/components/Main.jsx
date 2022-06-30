import React from 'react';
import '../index.scss';

const Main = function () {
    return (
        <main className='main'>
            <header className='main__header'>
                <h1>Topics</h1>
                <div>Family</div>
                <div>Happiness</div>
                <div>Animals</div>
                <div>Job</div>
                <div>Hobbies</div>
                <div>Life</div>
            </header>
            <div className='main__body'></div>
        </main>
    );
};

export default Main;
