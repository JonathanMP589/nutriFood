import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { Controller, useForm } from "react-hook-form";
import LoginService from '../service/LoginService';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { useContext, useRef } from 'react';
import { types } from '../types/Types';
import { AuthContext } from '../auth/AuthContext';

export const Login = () => {
    const toast = useRef(null);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const goToSHome = () => {
        navigate('/home');
    };

    const goToRegistro = () => {
        navigate('/registro');
    };

    const loginService = new LoginService();

    const sesion = (e) => {
        let data = new URLSearchParams();
        data.append('txt_email_usu', e.correo);
        data.append('txt_password', e.password);
        loginService.login(data).then(response => {
            console.log(response.data[0].iniciar_sesion);
            if (response.data[0].iniciar_sesion === "1") {
                const action = {
                    type: types.login,
                    payload: {
                        name: "nombre"
                    }
                }
                dispatch(action);
                goToSHome();
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Usuario o contraseña incorrectos'
                });
            }
        }).catch(error => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
        });
        //goToSHome();
    };
    const { control, formState: { errors }, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className='p-error mb-5'>{errors[name].message}</small>
    };

    return (
        <>
            <Toast ref={toast} />
            <div className='h-screen w-screen' style={
                {
                    backgroundImage: 'url("/assets/Iniciar_sesion_wallpaper.png")',
                    height: '100vh',
                    width: '100%',
                    overflow: "hidden",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                }
            }>
                <div className='col-12 px-3'>
                    <Card className='fadeinleft animation-duration-1000 m-5 text-center shadow-8 opacity-80 md:col-5 sm:col-12' style={{ borderRadius: '5%' }}>
                        <div className='flex'>
                            <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-6 m-auto opacity-100 sm:col-12' />
                        </div>

                        <form className="flex flex-column p-3 sm:col-12" onSubmit={handleSubmit(sesion)}>
                            <Controller name='correo' control={control} rules={{ required: 'El correo es requerido' }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        className={fieldState.invalid ? 'opacity-100 md-5 p-invalid' : 'mb-5 md-5 opacity-100'}
                                        placeholder='Ingresa tu correo electrónico'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            {getFormErrorMessage("correo")}

                            <Controller name='password' control={control} rules={{ required: "El password es requerido" }}
                                render={({ field, fieldState }) => (
                                    <Password className={fieldState.invalid ? 'p-password p-invalid md-5 opacity-100' : 'p-password mb-5 md-5 opacity-100'}
                                        toggleMask
                                        feedback={false}
                                        placeholder='Contraseña'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            {getFormErrorMessage("password")}
                            <p className='text-right font-italic opacity-100'>¿Olvidaste tu contraseña?</p>
                            <div className='flex justify-content-center align-items-center'>
                                <Button label="Iniciar sesión" type="submit" style={{ background: "#43b06f" }} className=" p-button-rounded col-6 p-button-raised opacity-100" />
                            </div>
                        </form>
                    </Card>
                    <div className='md:col-6 sm:col-12 opacity-100'>
                        <h3 className='text-white text-center font-semibold' onClick={() => goToRegistro()}>¿No tienes una cuenta? Registrate</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
