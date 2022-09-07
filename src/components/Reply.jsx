import React, { useContext, useState } from 'react';
import UserContext from '../store/user-context';
import '../index.scss';

const Reply = function (props) {
    const respondToUsername = props.username;
    const context = useContext(UserContext);
    const user = context.user;

    const [reply, setReply] = useState('');

    const writingReplyHandler = function (e) {
        const replyText = e.target.value;
        setReply(replyText);
    };
    const addReplyHandler = function () {
        console.log(reply);
        console.log(respondToUsername);
    };

    return (
        <div className='card'>
            <div className='reply'>
                <img className='images__photo--reply' src={user.image} alt='user photo' />
                <textarea
                    name='reply'
                    id='reply'
                    rows='5'
                    className='text--area'
                    value={`${respondToUsername}: ${reply}`}
                    onChange={writingReplyHandler}
                ></textarea>
                <button className='btn btn--blue' onClick={addReplyHandler}>
                    Reply
                </button>
            </div>
        </div>
    );
};

export default Reply;
