import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const Step3 = () => {

    const [enfermedad, setEnfermedad] = useState();

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div className='h-screen w-screen relative text-center'
            style={
                {
                    backgroundImage: 'url("/assets/Datos_wallpaper.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

            <div className='col-12 px-3'>
                <Card className='absolute m-5 text-center md:col-6 sm:col-12' style={{ borderRadius: '5%', right: '5%' }}>
                    <h2 className='text-green-500'>Pregunta 2/2</h2>
                    <form className="flex flex-column p-3">
                        <InputText className='mb-5 md-5' placeholder='¿Padeces de algunas de estas enfermedades?' value={enfermedad} onChange={(e) => setEnfermedad(e.target.value)} />
                    </form>
                    <Button label="Finalizar" onClick={goToHome} className="p-button-rounded p-button-success p-button-raised" />

                </Card>
            </div>
            <img className='md:absolute w-4 md:left-0 sm:col-12 sm:absolute' src="/assets/Datos_titulo_2.png" alt="Datos" style={{ top: '20%' }} />

        </div>
    )
};