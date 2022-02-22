import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { useContext, useRef } from 'react';
import { types } from '../types/Types';
import { AuthContext } from '../auth/AuthContext';
import { Controller, useForm } from 'react-hook-form';
import LoginService from '../service/LoginService';

export const Registro = () => {

    const navigate = useNavigate();
    const toast = useRef(null);
    const { dispatch } = useContext(AuthContext);

    const goToWelcome = () => {
        navigate('/welcome');
    };

    const loginService = new LoginService();

    const registrarUsuario = (e) => {
        if (e.password === e.confirmPassword) {
            let data = new URLSearchParams();
            data.append('txt_nombre', e.nombres);
            data.append('txt_apellido', e.apellidos);
            data.append('txt_email', e.correo);
            data.append('txt_password', e.password);
            loginService.registroLogin(data).then(response => {
                if (response.data[0]?.usuario_registrado === "1") {
                    toast.current.show({
                        severity: 'success',
                        summary: 'Exito',
                        detail: response.data[0].mensaje
                    });
                    const action = {
                        type: types.login,
                        payload: {
                            nombre: e.nombres,
                            apellido: e.apellidos,
                            email: e.correo,
                        }
                    }
                    dispatch(action);
                    goToWelcome();
                }
            }).catch(error => {
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
            });
        } else {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Las contraseñas no coinciden'
            });
            setError("confirmPassword", {
                type: "required",
                message: "Las contraseñas no coinciden",
            });
        }
    }

    const { control, formState: { errors }, setError, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className='p-error mb-2'>{errors[name].message}</small>
    };


    return (
        <>
            <Toast ref={toast} />
            <div className='h-screen w-screen' style={
                {
                    backgroundImage: 'url("/assets/Registro_Wallpaper.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'

                }
            }>
                <div className='col-12'>
                    <Card className='fadeinleft animation-duration-1000 m-4 text-center shadow-8 opacity-80 md:col-5 sm:col-12' style={{ borderRadius: '5%' }}>
                        <div className='flex'>
                            <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-6 m-auto sm:col-12' />
                        </div>

                        <form className="flex flex-column p-3 sm:col-12" onSubmit={handleSubmit(registrarUsuario)} >
                            <Controller name='nombres' control={control} rules={{ required: 'Los nombres son requeridos' }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        className={fieldState.invalid ? 'p-invalid' : 'mb-2'}
                                        placeholder='Nombre(s)'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            {getFormErrorMessage("nombres")}
                            <Controller name='apellidos' control={control} rules={{ required: 'Los apellidos son requeridos' }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        className={fieldState.invalid ? 'p-invalid' : 'mb-3'}
                                        placeholder='Apellidos'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            {getFormErrorMessage("apellidos")}
                            <Controller name='correo' control={control} rules={{ required: 'el correo es requerido' }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        className={fieldState.invalid ? 'p-invalid' : 'mb-3'}
                                        placeholder='Ingresa tu correo electrónico'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            {getFormErrorMessage("correo")}
                            <Controller name='password' control={control} rules={{ required: 'La contraseña es requerida' }}
                                render={({ field, fieldState }) => (
                                    <Password

                                        className={fieldState.invalid ? ' w-12 p-invalid' : 'mb-3 w-12'}
                                        placeholder='Contraseña'
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.value)} toggleMask />
                                )} />
                            {getFormErrorMessage("password")}
                            <Controller name='confirmPassword' control={control} rules={{ required: 'La contraseña debe coincidir' }}
                                render={({ field, fieldState }) => (
                                    <Password
                                        className={fieldState.invalid ? ' w-12 p-invalid' : 'mb-3 w-12'}
                                        placeholder='Confirma Contraseña'
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.value)} toggleMask />
                                )} />
                            {getFormErrorMessage("confirmPassword")}
                            <div className='justify-content-center'>
                                <Button label="Registrarte" type='submit' style={{ background: "#43b06f" }} className="p-button-rounded md:w-4 w-6 p-button-raised" />
                            </div>
                        </form>

                    </Card>
                </div>

            </div>
        </>
    )
}
