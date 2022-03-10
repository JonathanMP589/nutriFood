import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { useMediaQuery } from 'react-responsive'
import { Toast } from 'primereact/toast';
import LoginService from '../service/LoginService';
import { types } from '../types/Types';

export const PerfilUsuario = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 801px)'
    })
    const loginService = new LoginService();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 432px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const hiddenFileInput = useRef(null);
    const toast = useRef(null);
    const clickedAddFile = () => {
        hiddenFileInput.current.click();
    };
    const [profilePic, setProfilePic] = useState(user?.imgUsu || null);

    const fileChanged = (e) => {
        const fileUploaded = e.target.files[0];
        if (!fileUploaded) {
            return;
        }
        if (fileUploaded.size >= 10000000) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor seleccione una imagen menor a 10MB'
            });
            return;
        }
        setProfilePic(URL.createObjectURL(fileUploaded));
        getBase64(fileUploaded)
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            saveImg(reader.result);
        };
        reader.onerror = function (error) {
        };
    }

    const saveImg = (e) => {
        const data = new URLSearchParams();
        data.append('txt_email', user.email)
        data.append('txt_sexo', user.sexo)
        data.append('txt_edad', user.edad)
        data.append('txt_peso', user.peso)
        data.append('txt_altura', user.altura)
        data.append('str_enfermedades', user.enfermedades)
        data.append('img_usu', e)
        loginService.actualizarLogin(data).then(response => {
            if (response.data[0]?.exitotrado === "1") {
                const action = {
                    type: types.register,
                    payload: {
                        imgUsu: e,
                    }
                }
                dispatch(action);
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito',
                    detail: "Se actualizo correctamente"
                });
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: "algo salio mal intente de nuevo"
                });
            }
        }).catch(error => {
            console.log(error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
        });

    };

    const borrarfoto = () => {
        setProfilePic(null);
        const action = {
            type: types.register,
            payload: {
                imgUsu: null,
            }
        }
        dispatch(action);
    }

    const profilePicStyle = {
        width: "225px",
        height: "225px",
        borderRadius: "140px",
        cursor: "pointer",
        objectFit: "cover",
        backgroundColor: "white",
        position: "relative",
    };

    return (
        <div style={
            {
                backgroundImage: 'url("/assets/Perfil_wallpaper.png")',
                overflow: "hidden",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }
        }>
            <Toast ref={toast} />
            <div className='p-3'>
                <img src="/assets/iniciar_sesion_logo.png" onClick={() => navigate("/Home")} alt="Logo de iniciar sesión" className='left-0 w-2 cursor-pointer' />
                <div className='mt-3 flex relative w-full h-100 left-0 bg-no-repeat bg-cover'
                    style={{ backgroundImage: 'url("/assets/Perfil_franja.png")' }}
                >
                    <div className='flex flex-column w-4 justify-content-center align-items-center' >
                        <img src={profilePic === null ? "/assets/Perfil_foto.png" : profilePic} alt="" className={profilePic === null ? 'w-7' : ''} style={profilePic !== null ? profilePicStyle : { borderColor: 'white' }} />
                        <div className='flex flex-row justify-content-center align-items-center absolute'
                            style={isBigScreen ? { bottom: '1%' } : isDesktopOrLaptop ? { bottom: '2%' } : isMobile ? { bottom: '30%' } : isTabletOrMobile ? { bottom: '5%' } : isPortrait ? { bottom: '4%' } : { bottom: '30%' }}>
                            <img src="/assets/Boton_subir-foto.png" onClick={() => clickedAddFile()} alt="Franja" className='md:w-6 sm:w-2 w-2 md:mr-5 sm:mr-4 mr-2 cursor-pointer' />
                            <img src="/assets/Boton_borrar.png" onClick={() => borrarfoto()} alt="Franja" className='md:w-6 sm:w-2 w-2 md:ml-5 sm:ml-4 ml-2 cursor-pointer' />
                        </div>
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            accept=".jpg,.png,.jpeg"
                            onChange={fileChanged}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className='flex flex-column'>
                        <h2 className='text-yellow-500'>!HOLA!</h2>
                        <h1 className='block text-100'>{user.nombre + '\n' + user.apellido}</h1>
                    </div>

                </div>


                <h1 className='text-blue-900'>Tus logros</h1>
                <div className='justify-content-evenly flex-wrap'>
                    <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                    <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                    <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                    <img src="/assets/Logro_bloqueado.png" alt="Franja" className='mt-3 md:w-2 sm:w-2' />
                </div>

            </div>
        </div>
    );
};
