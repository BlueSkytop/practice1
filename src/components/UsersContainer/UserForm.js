import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = async (user)=> {
    const {data} = await userService.create(user)
        setUsers(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit (save)}>
            <input style={{width:'20%', height:'30px'}} type="text" placeholder={'name'} {...register('name')}/>
            <input style={{width:'20%', height:'30px'}} type="text" placeholder={'username'} {...register('username')}/>
            <input style={{width:'20%', height:'30px'}} type="text" placeholder={'email'} {...register('email')}/>
            <button style={{width:'20%', height:'35px', background:'lightgray', color:'blue'}}>Save</button>
        </form>
    );
};

export {UserForm};