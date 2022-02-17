import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export const Home = () => {

    const [isViewModal, setIsViewModal] = useState(true);

    const renderFooter = () => <Button className="text-center" label="Entendido" onClick={() => setIsViewModal(false)} autoFocus className="p-button-rounded p-button-success p-button-raised" />
        
    const renderHeader = () => <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-3 absolute ' style={{right: '37%'}} />
            
    return (
        <div className=' relative h-screen w-screen p-5' style={
            {
                backgroundImage: 'url("/assets/Home_wallpaper.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
            }>
            
            <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='left-0 w-2' />
            <img src="/assets/Perfil_foto.png" alt="Logo de iniciar sesión" className='absolute w-1' style={{right: '3%'}} />
            <p>Selecciona un eBook</p>

            <div className='flex flex-wrap justify-content-evenly'>
                <img src="/assets/Ebook_medicos.png" className='w-3'  alt="" />
                <img src="/assets/Ebook_pacientes.png" className='w-3'  alt="" />
            </div>
            <div className='flex flex-wrap justify-content-evenly'>
                <img src="/assets/Boton_medico.png"  className='w-2'/>
                <img src="/assets/Boton_paciente.png" className='w-2'/>
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
