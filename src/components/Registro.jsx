import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';

export const Registro = () => {

    const navigate = useNavigate();

    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const goToWelcome = () => {
        navigate('/welcome');
    };


    return (
        <div className='h-screen w-screen' style={
            {
                backgroundImage: 'url("/assets/Registro_Wallpaper.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'

            }
        }>
            <div className='col-12 px-3'>
                <Card className='fadeinleft animation-duration-1000 m-5 text-center shadow-8 opacity-80 md:col-5 sm:col-12' style={{ borderRadius: '5%' }}>
                    <div className='flex'>
                        <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-6 m-auto sm:col-12' />
                    </div>

                    <form className="flex flex-column p-3 sm:col-12">
                        <InputText className='mb-3' placeholder='Nombre(s)' value={nombres} onChange={(e) => setNombres(e.target.value)} />
                        <InputText className='mb-3' placeholder='Apellidos' value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                        <InputText className='mb-3' placeholder='Ingresa tu correo electrónico' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <Password feedback={false} className='mb-3 w-12' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
                        <Password feedback={false} className='mb-3 w-12' placeholder='Confirma Contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} toggleMask />
                    </form>
                    <Button label="Registrarte" onClick={goToWelcome} className="p-button-rounded p-button-success p-button-raised" />

                </Card>
            </div>

        </div>
    )
}
