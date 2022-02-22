import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PerfilUsuario = () => {

    const navigate = useNavigate();

  return (
    <div className='h-screen w-screen' style={
        {
            backgroundImage: 'url("/assets/Perfil_wallpaper.png")',
            height: '100vh',
            width: '100%',
            overflow: "hidden",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }>
       <div className='p-3'>
            <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='left-0 w-2' />
            <div className='mt-3 flex relative w-full h-100 left-0 bg-no-repeat bg-cover'
                style={{ backgroundImage: 'url("/assets/Perfil_franja.png")' }}
            >
                <img src="/assets/Perfil_foto.png" alt="Franja" className='my-2 mx-5' style={{width: "15%"}} />
                <h2 className=' text-yellow-500'>!HOLA!</h2>
                {/* <h1 className='block text-100'>Andrea Sánchez</h1> */}        
                <img src="/assets/Boton_subir-foto.png" alt="Franja" className='absolute' style={{width: "3%", height: "15%", left: "3%", bottom: "5%"}} />
                <img src="/assets/Boton_borrar.png" alt="Franja" className='absolute' style={{width: "3%", height: "15%", left: "13%", bottom: "5%"}} />

            </div>
            
            
            <h1 className='text-blue-900'>Tus logros</h1>
            <div className='justify-content-evenly flex-wrap'>
                <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
            </div>

       </div>
    </div>
  );
};
