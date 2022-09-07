import React, { useContext, useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import UserContext from '../store/user-context';
import '../index.scss';

const Reply = function (props) {
    const usernames = props.usernames;
    const context = useContext(UserContext);
    const user = context.user;

    const [reply, setReply] = useState('');

    const writingReplyHandler = function (e) {
        const replyText = e.target.value;
        setReply(replyText);
    };
    const addReplyHandler = function () {
        console.log(usernames);
    };

    const renderSuggestionsHandler = function () {
        console.log('render sugestionus');
    };
    console.log(context);

    return (
        <div className='card'>
            <div className='reply'>
                <img className='images__photo--reply' src={user.image} alt='user photo' />
                <MentionsInput className='text--area' value={reply} onChange={writingReplyHandler}>
                    <Mention trigger='@' data={context}>
                        renderSuggestions={renderSuggestionsHandler}
                    </Mention>
                </MentionsInput>
                <button className='btn btn--blue' onClick={addReplyHandler}>
                    Reply
                </button>
            </div>
        </div>
    );
};

export default Reply;
