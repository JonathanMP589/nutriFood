import { InputNumber } from 'primereact/inputnumber';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Controller, useForm } from 'react-hook-form';
import { types } from '../../types/Types';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';


export const Step2 = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const sexoItems = [
        { label: 'Hombre', value: 'Hombre' },
        { label: 'Mujer', value: 'Mujer' },
    ];

    const goToStep3DataCollection = (e) => {
        const action = {
            type: types.register,
            payload: {
                ...e
            }
        }
        dispatch(action);
        navigate('/data-collection-step3');
    };

    const { control, formState: { errors }, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        console.log(errors);
        return errors[name] && <small className='p-error mb-1'>{errors[name].message}</small>
    };

    return (
        <div className='h-screen w-screen '
            style={
                {
                    backgroundImage: 'url("/assets/Datos_wallpaper.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

            <div className='flex'>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-2 absolute left-0 m-4' />
                <div className=' flex flex-wrap md:justify-content-evenly justify-content-center align-items-center row md:w-11 w-12 h-screen'>
                    <img className='w-4' src="/assets/Datos_titulo_1.png" alt="Datos" />
                    <div className='w-7 h-full' style={{
                        background: 'url("/assets/Datos_mano.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <form className="flex flex-column p-3 sm:col-2 absolute" style={{ right: "36%" }} onSubmit={handleSubmit(goToStep3DataCollection)}>
                            <h2 className='text-center mt-5' style={{ color: "#43b06f" }}>Pregunta 1/2</h2>
                            <Controller name='edad' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid mb-2' : 'mb-2 md-5'}
                                        placeholder='Edad' value={field.value} onValueChange={(e) => field.onChange(e.value)} suffix=" años" useGrouping={false} />
                                )} />
                            {getFormErrorMessage("edad")}
                            <Controller name='sexo' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <Dropdown
                                        optionLabel="label"
                                        className={fieldState.invalid ? 'md-5 p-invalid mb-2' : 'mb-2 md-5'}
                                        placeholder='Sexo'
                                        options={sexoItems}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)} />
                                )} />
                            {getFormErrorMessage("sexo")}
                            <Controller name='peso' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid mb-2' : 'mb-2 md-5'}
                                        placeholder='Peso' value={field.value}
                                        mode="decimal"
                                        minFractionDigits={1}
                                        maxFractionDigits={1}
                                        max={600}
                                        onValueChange={(e) => field.onChange(e.value)} suffix=" Kg" />
                                )} />
                            {getFormErrorMessage("peso")}
                            <Controller name='altura' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid mb-2' : 'mb-2 md-5'}
                                        placeholder='Altura'
                                        value={field.value}
                                        minFractionDigits={1}
                                        maxFractionDigits={1}
                                        onValueChange={(e) => field.onChange(e.value)} suffix=" cm" />
                                )} />
                            {getFormErrorMessage("altura")}
                            <div className='flex justify-content-center align-items-center'>
                                <Button label="Siguiente" type='submit' style={{ background: "#43b06f" }} className="p-button-rounded md:w-6 w-4 p-button-raised justify-content-center align-items-center" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
