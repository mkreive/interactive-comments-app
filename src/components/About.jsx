import React from 'react';
import '../index.scss';

const About = function () {
    return (
        <div className='topic'>
            <header className='topic__header'>
                <h1 className='header-huge'>About</h1>
            </header>
            <div className='text card '>
                Hello! <br />
                Welcome to our project! We are here to help you find solutions, answers or advices about any issue you
                have! <br />
                For every topic we have a specialist who knows his field and will guide you in finding answers to any
                questions you have.
            </div>
        </div>
    );
};

export default About;
