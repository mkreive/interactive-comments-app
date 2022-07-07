import React, { useState, useContext } from 'react';
import { validateInput, validatePassword } from '../helperFunctions';
import UserContext from '../store/user-context';
import '../index.scss';

const Header = function () {
    const userCtx = useContext(UserContext);

    // states
    const [usernameInput, setUsernameInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [loggedUser, setLoggedUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // handlers
    const usernameInputHandler = function (event) {
        setUsernameInput(event.target.value);
    };
    const passwordInputHandler = function (event) {
        setPasswordInput(event.target.value);
    };
    const submitHandler = function (event) {
        event.preventDefault();
        const username = usernameInput;
        const password = passwordInput;

        if (validateInput(usernameInput) && validatePassword(passwordInput)) {
            userCtx.login(username, password);
            setLoggedUser(userCtx.user);
        } else {
            setErrorMessage('Username or password is invalid');
        }
    };

    const logoutHandler = function () {
        console.log(userCtx.user);
    };

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
            {!loggedUser && (
                <div className='signin'>
                    <form onSubmit={submitHandler}>
                        <div className='signin__inputs'>
                            <input
                                type='text'
                                className='input'
                                placeholder='Username'
                                onChange={usernameInputHandler}
                            />
                            {errorMessage && <div className='error'>{errorMessage}</div>}
                            <input
                                type='password'
                                className='input'
                                placeholder='password'
                                onChange={passwordInputHandler}
                            />
                            {errorMessage && <div className='error'>{errorMessage}</div>}
                        </div>
                        <div className='signin__btns'>
                            <button className='btn' type='submit'>
                                Log In
                            </button>
                            <button className='btn' type='submit'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {loggedUser && (
                <div className='user-card'>
                    <div className='user-card__header'>
                        <img className='user-card__avatar' src={loggedUser.image} alt='avatar' />
                        <div className='user-card__name'>Hello, {loggedUser.name}</div>
                    </div>
                    <div className='signin__btns'>
                        <button className='btn' onClick={logoutHandler}>
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
