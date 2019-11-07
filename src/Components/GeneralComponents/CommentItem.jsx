import React from 'react';

const CommentItem = ({avatar, text}) => (
    <section className = 'CommentItem'>
        <SavadAvatar avatar = {avatar}/>
        <section className = 'commentText'>
            {text}
        </section>
    </section>
);

const SavadAvatar = ({avatar}) => 
    <section 
        className = 'SavadAvatar'
        style = {{backgroundColor: `${avatar}`}}
    />

export default CommentItem;