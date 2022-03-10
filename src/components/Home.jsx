import React, { useState, useContext } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const Home = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [isViewModal, setIsViewModal] = useState(true);
    const [profilePic] = useState(user?.imgUsu || null);


    const renderFooter = () => <Button label="Entendido" onClick={() => setIsViewModal(false)} autoFocus style={{ background: "#43b06f" }} className="p-button-rounded md:w-4 w-6 p-button-raised" />
    const renderHeader = () => <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-3 absolute ' style={{ right: '37%' }} />

    const goToUserProfile = () => {
        navigate('/user-profile');
    }

    const profilePicStyle = {
        width: "80px",
        height: "80px",
        borderRadius: "140px",
        cursor: "pointer",
        objectFit: "cover",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "5",
        right: '3%',
    };

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
            <div className="p-3">
                <div className='w-12 flex flex-wrap justify-content-between '>
                    <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-2' />
                    <img onClick={() => goToUserProfile()} src={profilePic === null ? "/assets/Perfil_foto.png" : profilePic}
                        alt="Logo de iniciar sesión"
                        className={profilePic === null ? 'absolute cursor-pointer z-5' : ''}
                        style={profilePic !== null ? profilePicStyle : { right: '3%', width: "5%" }} />
                </div>
                <p>Selecciona un eBook</p>
                <div className='absolute flex justify-content-evenly h-screen w-screen top-0 left-0'>
                    <div className='w-6 flex flex-column justify-content-center align-items-center'>
                        <img src="/assets/Ebook_medicos.png" className=' w-6 cursor-pointer ' alt="" />
                        <img src="/assets/Boton_medico.png" alt='' className='w-6 cursor-pointer' />
                    </div>
                    <div className='w-6 flex flex-column justify-content-center align-items-center'>
                        <img src="/assets/Ebook_pacientes.png" className='w-6 cursor-pointer ' alt="" />
                        <img src="/assets/Boton_paciente.png" alt='' className='w-6 cursor-pointer ' />
                    </div>
                </div>
            </div>
            {/* MODAL DE INFORMACIÓN */}
            <Dialog header={renderHeader} visible={isViewModal} onHide={() => setIsViewModal(false)} className="text-justify" breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter}>
                <p>Sabemos que te gusta cuidar de tu salud y en especial el de tu alimentación.</p>

                <p>Estamos consientes de que puedes ser un experto en el tema de las frutas y verduras o que apenas estás conociendo sobre ellas. Es por ello que hemos diseñado 2 ebooks:</p>
                <p className='px-5' style={{ color: "#43b06f" }}>Uno de especialistas de la salud</p>
                <p className='px-5' style={{ color: "#43b06f" }}>Y otra para pacientes</p>
                <p>En ambos conocerás la importancia del consumo de las frutas y verduras...</p>
            </Dialog>
        </div>
    )
}
