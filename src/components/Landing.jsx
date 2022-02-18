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
        <div style={
            {
                height: '100vh',
                width: '100%',
                overflow: "hidden",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: 'url("/assets/Landing_Page_Wallpaper.png")',
            }
        }>
            <div className="flex flex-column">
                <div className="flex justify-content-end">
                    <Button label="Iniciar sesión" onClick={() => goToLogin()} className="m-2 p-button-text p-button-rounded p-button-secondary p-button-raised text-white " />
                </div>
                <div className="flex justify-content-center mt-4">
                    <img src="/assets/Logotipo.png" alt="Logo de iniciar sesión" />
                </div>
                <div className="flex flex-column align-items-center justify-content-center text-white">
                    <h2 className="text-center">¡Aprende sobre las frutas y verduras y cómo </h2>
                    <h2 className="text-center"> escogerlas para comer bien y vivir genial!</h2>
                </div>
                <div className="flex flex-row align-items-center justify-content-center">
                    <Button label="Accede gratis" onClick={() => goToRegister()} className="mr-8 p-button-rounded p-button-success p-button-raised" />
                    <Button label="Ver videos" style={{ background: "orange" }} className="p-button-rounded  p-button-raised" />
                </div>
            </div>
        </div>
    )
}
