import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../services/validators/carValidator";
import {carService} from "../../services/carService";

const CarForm = ({trigger}) => {
    const {reset, register, handleSubmit,
        formState: {errors, isValid, }, setValue} = useForm({
        mode:'all',
        resolver:joiResolver(carValidator)
    });

    const save = async (car)=> {
        await carService.create(car)
        trigger()
        reset()

    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'brand'} {...register('brand')}/>
                <input type={'text'} placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type={'text'} placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={!isValid}>Save</button>
            </form>
            {errors.brand&& <div>brand: {errors.brand.message}</div>}
            {errors.price&& <div>brand: {errors.price.message}</div>}
            {errors.year&& <div>brand: {errors.year.message}</div>}
        </div>
    );
};

export {CarForm};