import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { useMediaQuery } from 'react-responsive'

export const PerfilUsuario = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 801px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 432px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const { user } = useContext(AuthContext);
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
                    <div className='flex flex-column w-4 justify-content-center align-items-center' >
                        <img src="/assets/Perfil_foto.png" alt="" className='w-7' />
                        <div className='flex flex-row justify-content-center align-items-center absolute'
                            style={isBigScreen ? { bottom: '1%' } : isDesktopOrLaptop ? { bottom: '2%' } : isMobile ? { bottom: '30%' } : isTabletOrMobile ? { bottom: '5%' } : isPortrait ? { bottom: '4%' } : { bottom: '30%' }}>
                            <img src="/assets/Boton_subir-foto.png" alt="Franja" className='md:w-6 sm:w-2 w-2 md:mr-5 sm:mr-4 mr-2' />
                            <img src="/assets/Boton_borrar.png" alt="Franja" className='md:w-6 sm:w-2 w-2 md:ml-5 sm:ml-4 ml-2' />
                        </div>
                    </div>
                    <div className='flex flex-column'>
                        <h2 className='text-yellow-500'>!HOLA!</h2>
                        <h1 className='block text-100'>{user.nombre + '\n' + user.apellido}</h1>
                    </div>

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
