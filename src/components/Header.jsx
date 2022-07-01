import React from 'react';
import '../index.scss';

const Header = function () {
    return (
        <header className='header'>
            <div className='header__logo'></div>
            <img
                className='header__logo-logo'
                src='https://res.cloudinary.com/kreiva/image/upload/v1655102872/DevJobsApp/creative_cdv7ub.svg'
                alt='logo'
            />
            <h2 className='header__logo-name'>talk~y</h2>
            <nav className='header__nav'>
                <ul>
                    <li>About</li>
                    <li>Topics</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
