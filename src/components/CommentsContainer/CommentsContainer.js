import React, {useEffect, useState} from 'react';
import {CommentForm} from "./CommentForm";
import {Coments} from "./Coments";
import {commentService} from "../../services/commentService";

const CommentsContainer = () => {
    const  [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            <hr/>
            <hr/>
            <CommentForm setComments={setComments}/>
            <hr/>

            <Coments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};