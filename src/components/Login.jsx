import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';

import LoginService from '../service/LoginService';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const goToSHome = () => {
        navigate('/home');
    };

    const loginService = new LoginService();
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();
    
    const login = () => {
        let data = new URLSearchParams();
        data.append('txt_email_usu', correo);
        data.append('txt_password', password);
        loginService.login(data).then(response => {
            console.log(response.data[0].iniciar_sesion);
        });
        goToSHome();
    };

    return (
        <div className='h-screen w-screen' style={
            {
                backgroundImage: 'url("/assets/Iniciar_sesion_wallpaper.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
                
            }
            }>
            <div className='col-12 px-3'>
                <Card className='m-5 text-center md:col-5 sm:col-12' style={{borderRadius: '5%'}}>
                    <div className='flex'>
                        <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-6 m-auto sm:col-12' />
                    </div>

                    <form className="flex flex-column p-3 sm:col-12">
                        <InputText className='mb-5 md-5' placeholder='Ingresa tu correo electrónico' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <Password feedback={false} className='mb-5 md-5 w-12' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
                    </form>
                        <p className='text-right font-italic '>¿Olvidaste tu contraseña?</p>
                        <Button label="Iniciar sesión" onClick={() => login()} className="p-button-rounded p-button-success p-button-raised" />
                </Card>
                <div className='md:col-6 sm:col-12'>
                    <h3 className='text-white text-center font-semibold'>¿No tienes una cuenta? Registrate</h3>
                </div>
            </div>
        </div>
    )
}
