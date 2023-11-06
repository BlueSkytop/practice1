import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";

const CommentForm = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(prev => [...prev,data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input style={{width:'20%', height:'30px'}} type={'text'} placeholder={'name'} {...register('name')}/>
            <input style={{width:'20%', height:'30px'}} type={'text'} placeholder={'email'} {...register('email')}/>
            <input style={{width:'20%', height:'30px'}} type={'text'} placeholder={'body'} {...register('body')}/>
            <button style={{width:'20%', height:'35px', background:'lightblue', color:'darkblue'}}><b>Save</b></button>
        </form>
    );
};

export {CommentForm};