import { useEffect } from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import Usuario from '../service/Usuario';
export const Landing = () => {
    let navigate = useNavigate();
    const userService = new Usuario();
    useEffect(() => {
        let data = {
            'action': 'fetch_single'
        }
        userService.usuarioGetAll(data)
        //eslint-disable-next-line
    }, []);

    const goToLogin = () => {
        navigate('/login');
    }

    const goToRegister = () => {
        navigate('/registro');
    }

    return (
        <div class="flex flex-column">
            <div class="flex justify-content-end">
                <Button label="Iniciar sesión" onClick={() => goToLogin()} className="p-button-text p-button-rounded p-button-secondary p-button-raised" />
            </div>
            <div class="flex justify-content-center">
                <h1>Nutrifood</h1>
            </div>
            <div class="flex flex-column align-items-center justify-content-center">
                <h2 class="text-center">¡Aprende sobre las frutas y verduras y cómo </h2>
                <h2 class="text-center"> escogerlas para comer bien y vivir genial!</h2>
            </div>
            <div class="flex flex-row align-items-center justify-content-center">
                <Button label="Accede gratis" onClick={() => goToRegister()} className="mr-8 p-button-rounded p-button-success p-button-raised" />
                <Button label="Ver videos" style={{ background: "orange" }} className="p-button-rounded  p-button-raised" />
            </div>
        </div>
    )
}
