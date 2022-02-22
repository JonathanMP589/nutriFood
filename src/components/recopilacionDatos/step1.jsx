import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Step1 = () => {

    const navigate = useNavigate();

    const goToStep2DataCollection = () => {
        navigate('/data-collection-step2');
    };


    return (
        <div className='h-screen w-screen'
            style={
                {
                    backgroundImage: 'url("/assets/Datos_wallpaper.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
        >
            <div className='md:col-3 mx-3 text-center p-5 sm:col-12 font-medium text-left'>
                <h1 className='m-0 p-3 font-normal text-center'>Recuerda que</h1>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-12 m-auto' />
                <p>Es una webapp de nutrición y su prioridad es tu salud.</p>

                <p>Antes de iniciar te invitamos a responder 2 preguntas.</p>
                <Button label="Avanzar" onClick={() => goToStep2DataCollection()} style={{ background: "#43b06f" }} className="p-button-rounded w-6 p-button-raised m-5" />

            </div>
            <img src="/assets/Datos_doctor.png" className='w-4 absolute bottom-0' style={{ right: "15%" }} alt="Doctor Datos" />

        </div>
    )
};