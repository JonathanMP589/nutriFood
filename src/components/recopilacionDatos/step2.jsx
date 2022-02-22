import { InputNumber } from 'primereact/inputnumber';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Controller, useForm } from 'react-hook-form';


export const Step2 = () => {

    const navigate = useNavigate();

    const sexoItems = [
        { label: 'Hombre', value: 'Hombre' },
        { label: 'Mujer', value: 'Mujer' },
    ];

    const goToStep3DataCollection = (e) => {
        console.log(e);
        navigate('/data-collection-step3');
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

            <div className='flex'>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-2 absolute left-0 m-4' />
                <div className=' flex flex-wrap md:justify-content-evenly justify-content-center align-items-center row md:mt-3 mt-7 md:w-11 w-12'>
                    <img className='w-4' src="/assets/Datos_titulo_1.png" alt="Datos" />
                    <Card className=' md:w-6 w-11' style={{ borderRadius: '5%' }} >
                        <h2 className='text-center' style={{ color: "#43b06f" }}>Pregunta 1/2</h2>
                        <form className="flex flex-column p-3 sm:col-12" onSubmit={handleSubmit(goToStep3DataCollection)}>
                            <Controller name='edad' control={control} rules={{ required: 'Los nombres son requeridos' }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid' : 'mb-5 md-5'}
                                        placeholder='Edad' value={field.value} onValueChange={(e) => field.onChange(e.value)} suffix=" años" useGrouping={false} />
                                )} />
                            {getFormErrorMessage("edad")}
                            <Controller name='sexo' control={control} rules={{ required: 'Los nombres son requeridos' }}
                                render={({ field, fieldState }) => (
                                    <Dropdown
                                        optionLabel="label"
                                        className={fieldState.invalid ? 'md-5 p-invalid' : 'mb-5 md-5'}
                                        placeholder='Sexo'
                                        options={sexoItems}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)} />
                                )} />
                            {getFormErrorMessage("sexo")}
                            <Controller name='peso' control={control} rules={{ required: 'Los nombres son requeridos' }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid' : 'mb-5 md-5'}
                                        placeholder='Peso' value={field.value}
                                        mode="decimal"
                                        minFractionDigits={1}
                                        maxFractionDigits={1}
                                        max={600}
                                        onValueChange={(e) => field.onChange(e.value)} suffix=" Kg" />
                                )} />
                            {getFormErrorMessage("peso")}
                            <Controller name='altura' control={control} rules={{ required: 'Los nombres son requeridos' }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid' : 'mb-5 md-5'}
                                        placeholder='Altura'
                                        value={field.value}
                                        minFractionDigits={1}
                                        maxFractionDigits={1}
                                        onValueChange={(e) => field.onChange(e.value)} suffix=" cm" />
                                )} />
                            {getFormErrorMessage("altura")}
                            <div className='justify-content-center '>
                                <Button label="Siguiente" type='submit' style={{ background: "#43b06f" }} className="p-button-rounded md:w-4 w-6 p-button-raised justify-content-center align-items-center" />
                            </div>
                        </form>

                    </Card>
                </div>
            </div>

        </div>
    )
}
