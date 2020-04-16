
import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'

const Hora = () => {
    let [hora, setHora] = useState(new Date().toLocaleTimeString());
    const delay = 1000;

    useEffect(() => {
        const id = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
        }, delay);
        return () => clearInterval(id);
    }, []);

    return (
        <Fragment>
            <div>ComponentHora en: { hora }, Actualizado en: {delay}ms</div>
        </Fragment>
    );
 }

 export default  Hora;