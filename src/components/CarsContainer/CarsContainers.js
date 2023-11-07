import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainers = () => {
    const [cars,setCars] = useState([]);
    const [flag, setFlag] = useState(null)

    const trigger = () => {
        setFlag(prev => !prev)
    }

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [flag])
    return (
        <div>
            <CarForm trigger={trigger}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainers};