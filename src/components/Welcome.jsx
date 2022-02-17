import { Button } from 'primereact/button'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {

    const navigate = useNavigate();

    const goToStep1DataCollection = () => {
        navigate('/data-collection-step1');
    };

    return (
        <div className='h-screen w-screen relative' style={
        {
            backgroundImage: 'url("/assets/Bienvenida_wallpaper.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
         }>
            <img src="/assets/Bienvenida_doctora.png" className='w-3 absolute bottom-0 z-0' style={{left: "10%"}} alt="Doctora Bienvenida" />
            <div className='p-5 col-12 text-center text-white absolute' >
                <h2>Bienvenido a</h2>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='' />
                <p className='text-center m-auto md:w-5 sm:w-12' >
                    La webapp que te enseñará... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda, necessitatibus odit deleniti nisi quae voluptates omnis, optio facere culpa reiciendis est eos adipisci. Eius tempora veritatis voluptas voluptatem! Corporis?
                </p>
            </div>
            <Button label="Comenzar" onClick={goToStep1DataCollection} className="absolute bottom-0 right-0 p-button-rounded p-button-success p-button-raised m-5" />

        </div>
    )
}
