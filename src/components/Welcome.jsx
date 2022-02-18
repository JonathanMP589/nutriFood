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
            <div className='flex justify-content-center align-items-center h-screen w-sreen'>
                <img src="/assets/Bienvenida_doctora.png" className='w-3 absolute bottom-0 z-0' style={{ left: "10%" }} alt="Doctora Bienvenida" />
                <div className='col-9 text-center text-white' >
                    <h2>Bienvenido a</h2>
                    <img src="/assets/Logotipo.png" alt="Logo de iniciar sesión" className='w-3 sm:w-5 md:w-5' />
                    <p className='text-center m-auto md:w-5 sm:w-3' >
                        La webapp que te enseñará... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda, necessitatibus odit deleniti nisi quae voluptates omnis, optio facere culpa reiciendis est eos adipisci. Eius tempora veritatis voluptas voluptatem! Corporis?
                    </p>
                </div>
                <Button label="Comenzar" onClick={() => goToStep1DataCollection()} className="absolute bottom-0 right-0 p-button-rounded p-button-success p-button-raised m-5" />
            </div>
        </div>
    )
}
