import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div style={{margin:'0 0 30px 0'}}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};