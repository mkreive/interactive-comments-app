import React, { useContext, useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import UserContext from '../store/user-context';
import '../index.scss';

const Reply = function (props) {
    const usernames = props.usernames;
    const parentCommentId = props.parentId;
    const topic = props.topic;
    const context = useContext(UserContext);
    const user = context.user;

    const [reply, setReply] = useState('');

    const writingReplyHandler = function (e) {
        const replyText = e.target.value;
        setReply(replyText);
    };
    const addReplyHandler = function () {
        context.replyComment(user, parentCommentId, topic, reply);
        setReply('');
        props.onReply();
    };

    return (
        <div className='card'>
            <div className='reply'>
                <img className='images__photo--reply' src={user.image} alt='user photo' />
                <MentionsInput
                    forceSuggestionsAboveCursor
                    className='text--area'
                    value={reply}
                    onChange={writingReplyHandler}
                >
                    <Mention trigger='@' data={usernames} appendSpaceOnAdd markup='@[__display__]'></Mention>
                </MentionsInput>
                <button className='btn btn--blue' onClick={addReplyHandler}>
                    Reply
                </button>
            </div>
        </div>
    );
};

export default Reply;
