import React from 'react';
import {Comment} from "./Comment";

const Coments = ({comments}) => {
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Coments};