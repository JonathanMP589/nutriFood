import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';


export const Step2 = () => {

    const [edad, setEdad] = useState();
    const [sexo, setSexo] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    const navigate = useNavigate();

    const goToStep3DataCollection = () => {
        navigate('/data-collection-step3');
    };

    return (
        <div className='h-screen w-screen relative text-center'
            style={
                {
                    backgroundImage: 'url("/assets/Datos_wallpaper.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

            <div className='col-12 text-center'>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-2 absolute left-0 m-2' />
                <div className=' md:col-6 sm:col-12' style={{
                    backgroundImage: 'url(/assets/Datos_mano.png")',
                    backgroundSize: 'contain'

                }}>
                    <div className='h-screen w-screen'>
                        <img src="/assets/Datos_mano.png" alt="Mano Datos" className='absolute w-6 m-auto right-40' style={{ right: "20%" }} />
                        <Card className='absolute m-5 text-center md:col-6 sm:col-12' style={{ borderRadius: '5%', right: '5%' }}>
                            <h2 className='text-green-500'>Pregunta 1/2</h2>
                            <form className="flex flex-column p-3 sm:col-12">
                                <InputNumber className='mb-5 md-5' placeholder='Edad' value={edad} onValueChange={(e) => setEdad(e.value)} mode="decimal" useGrouping={false} />
                                <InputText className='mb-5 md-5' placeholder='Sexo' value={sexo} onChange={(e) => setSexo(e.target.value)} />
                                <InputNumber className='mb-5 md-5' placeholder='Peso' value={peso} onValueChange={(e) => setPeso(e.value)} suffix=" Kg" />
                                <InputNumber className='mb-5 md-5' placeholder='Altura' value={altura} onValueChange={(e) => setAltura(e.value)} suffix=" cm" />

                            </form>
                            <Button label="Registrarte" onClick={goToStep3DataCollection} className="p-button-rounded p-button-success p-button-raised" />

                        </Card>
                    </div>
                </div>
                {/* <img className='absolute w-6 bottom-0' src="/assets/Datos_mano.png" alt="Datos_mano" /> */}

                <img className='md:absolute w-4 md:left-0 sm:col-12 sm:absolute' src="/assets/Datos_titulo_1.png" alt="Datos" style={{ top: '20%' }} />
            </div>

        </div>
    )
}
