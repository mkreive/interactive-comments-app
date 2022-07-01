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
                <input type='text' className='signin__input' placeholder='Username' />
                <input type='text' className='signin__input' placeholder='email@email.com' />
                <button className='btn'>Sign Up</button>
                <button className='btn'>Log In</button>
            </div>
        </header>
    );
};

export default Header;
