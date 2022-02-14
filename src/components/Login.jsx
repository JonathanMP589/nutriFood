import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import LoginService from '../service/LoginService';

export const Login = () => {
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
    }
    return (
        <div class="flex flex-column align-items-start justify-content-start">
            <div class="card">
                <div class="card-container justify-content-center">
                    <form class="flex flex-column">
                        <h2>Nutrifood</h2>
                        <InputText className='mb-5 md-5' placeholder='Ingresa tu correo electrónico' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <InputText placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </form>
                    <p >¿Olvidaste tu contraseña?</p>
                    <Button label="Iniciar sesión" onClick={() => login()} className="p-button-rounded p-button-success p-button-raised" />
                </div>
            </div>
        </div>
    )
}
