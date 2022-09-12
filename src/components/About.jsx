import React from 'react';
import '../index.scss';

const About = function () {
    return (
        <div className='topic'>
            <header className='topic__header'>
                <h1 className='header-huge'>About</h1>
            </header>
            <div className='text card '>
                <div className='text__about header-small-colored'>Hello! </div>
                <div className='text__about'>
                    Welcome to our project! We are here to help you find solutions, answers or advice about any issue
                    you have!
                </div>
                <div className='text__about'>
                    For every topic we have a specialist who knows his field and will guide you in finding answers to
                    any questions you have.
                </div>
                <div className='text__about'>
                    If you wish detailed consultation with our specialist, subscribe to our weekly/monthly or yearly
                    plan, and get one on one private and detailed consultations with best in field specialists.
                </div>
            </div>
        </div>
    );
};

export default About;
