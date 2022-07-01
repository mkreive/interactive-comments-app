import React from 'react';
import '../index.scss';

const Header = function () {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img
                    className='header__logo-logo'
                    src='https://res.cloudinary.com/kreiva/image/upload/v1655102872/DevJobsApp/creative_cdv7ub.svg'
                    alt='logo'
                />
                <h2 className='header__logo-name'>talk~y</h2>
            </div>
            <nav className='header__nav'>
                <ul className='navigation'>
                    <li className='navigation__item'>About</li>
                    <li className='navigation__item'>Topics</li>
                    <li className='navigation__item'>Contacts</li>
                </ul>
            </nav>
            <div className='signin'>
                <div className='signin__inputs'>
                    <input type='text' className='input' placeholder='Username' />
                    <input type='text' className='input' placeholder='email@email.com' />
                </div>
                <div className='signin__btns'>
                    <button className='btn'>Sign Up</button>
                    <button className='btn'>Log In</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
