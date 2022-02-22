import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Controller, useForm } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import LoginService from '../../service/LoginService';
import { Toast } from 'primereact/toast';
import { types } from '../../types/Types';

export const Step3 = () => {
    const { user, dispatch } = useContext(AuthContext);
    const toast = useRef(null);
    const loginService = new LoginService();
    const navigate = useNavigate();

    const enfermedadesItems = [
        { label: 'Ninguna', value: 'Ninguna' },
        { label: 'Diabetes', value: 'Diabetes' },
        { label: 'Hepatitis A', value: 'Hepatitis A' },
        { label: 'Colesterol', value: 'Colesterol' },
        { label: 'Cetonas', value: 'Cetonas' },
    ];

    const goToStep3DataCollection = (e) => {
        const data = new URLSearchParams();
        data.append('txt_email', user.email)
        data.append('txt_sexo', user.sexo)
        data.append('txt_edad', user.edad)
        data.append('txt_peso', user.peso)
        data.append('txt_altura', user.altura)
        data.append('str_enfermedades', JSON.stringify(e.enfermedades))
        loginService.actualizarLogin(data).then(response => {
            if (response.data[0]?.exito === "1") {
                const action = {
                    type: types.register,
                    payload: {
                        enfermedades: JSON.stringify(e.enfermedades),
                    }
                }
                dispatch(action);
                navigate('/Home');
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: "algo salio mal"
                });
            }
        }).catch(error => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
        });

    };

    const { control, formState: { errors }, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className='p-error mb-3'>{errors[name].message}</small>
    };

    return (
        <div className='h-screen w-screen '
            style={
                {
                    backgroundImage: 'url("/assets/Datos_wallpaper.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
            <Toast ref={toast} />

            <div className='flex'>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-2 absolute left-0 m-4' />
                <div className=' flex flex-wrap md:justify-content-evenly justify-content-center align-items-center row md:mt-8 mt-7 md:w-11 w-12'>
                    <img className='w-4' src="/assets/Datos_titulo_1.png" alt="Datos" />
                    <Card className=' md:w-6 w-11' style={{ borderRadius: '5%' }} >
                        <h2 className='text-center' style={{ color: "#43b06f" }}>Pregunta 2/2</h2>
                        <form className="flex flex-column p-3 sm:col-12" onSubmit={handleSubmit(goToStep3DataCollection)}>
                            <Controller name='enfermedades' control={control} rules={{ required: 'Las enfermedades son requeridas' }}
                                render={({ field, fieldState }) => (
                                    <MultiSelect
                                        optionLabel="label"
                                        className={fieldState.invalid ? 'md-5 p-invalid' : 'mb-5 md-5'}
                                        placeholder='¿Padeces alguna de estas enfermedades?'
                                        options={enfermedadesItems}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)} />
                                )} />
                            {getFormErrorMessage("enfermedades")}
                            <div className='flex justify-content-center align-items-center'>
                                <Button label="Finalizar" type='submit' style={{ background: "#43b06f" }} className="p-button-rounded md:w-4 w-6 p-button-raised" />
                            </div>
                        </form>
                    </Card>
                </div>
            </div>

        </div>
    )
}