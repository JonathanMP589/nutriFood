import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export const Home = () => {

    const [isViewModal, setIsViewModal] = useState(true);

    const renderFooter = () => <Button label="Entendido" onClick={() => setIsViewModal(false)} autoFocus className="p-button-rounded text-center p-button-success p-button-raised" />

    const renderHeader = () => <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-3 absolute ' style={{ right: '37%' }} />

    return (
        <div className='h-screen w-screen' style={
            {
                backgroundImage: 'url("/assets/Home_wallpaper.png")',
                height: '100vh',
                width: '100%',
                overflow: "hidden",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }
        }>
            <div className="p-5">
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='left-0 w-2' />
                <img src="/assets/Perfil_foto.png" alt="Logo de iniciar sesión" className='absolute ' style={{ right: '3%', width: "5%" }} />
                <p>Selecciona un eBook</p>

                <div className='flex flex-wrap justify-content-evenly'>
                    <img src="/assets/Ebook_medicos.png" className='scalein animation-duration-1000 w-2 cursor-pointer ' alt="" />
                    <img src="/assets/Ebook_pacientes.png" className='scalein animation-duration-1000 w-2 cursor-pointer ' alt="" />
                </div>
                <div className='flex flex-wrap justify-content-evenly'>
                    <img src="/assets/Boton_medico.png" alt='' className='scalein animation-duration-1000 w-2 cursor-pointer' />
                    <img src="/assets/Boton_paciente.png" alt='' className='scalein animation-duration-1000 w-2 cursor-pointer ' />
                </div>
            </div>
            {/* MODAL DE INFORMACIÓN */}
            <Dialog header={renderHeader} visible={isViewModal} onHide={() => setIsViewModal(false)} className="text-justify" breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter}>
                <p>Sabemos que te gusta cuidar de tu salud y en especial el de tu alimentación.</p>

                <p>Estamos consientes de que puedes ser un experto en el tema de las frutas y verduras o que apenas estás conociendo sobre ellas. Es por ello que hemos diseñado 2 ebooks:</p>
                <p className='text-green-500 px-5'>Uno de especialistas de la salud</p>
                <p className='text-green-500 px-5'>Y otra para pacientes</p>
                <p>En ambos conocerás la importancia del consumo de las frutas y verduras...</p>
            </Dialog>
        </div>
    )
}
