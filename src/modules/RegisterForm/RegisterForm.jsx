import React from 'react';
import { useForm } from "react-hook-form";
import { ButtonComponent } from '../../shared/components/Button/ButtonComponent';

export function RegisterForm({ fnSendData }) {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => fnSendData(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Dirección de correo electrónico</label>
      <div>
        <input name="email" type="email" ref={register({ required: true })} autoComplete="on" defaultValue={'carlosrodriguez@gmail.com'} />
      </div>
      <label htmlFor="name">Nombre</label>
      <div>
        <input name="name" type="text" ref={register({ required: true })} autoComplete="on" defaultValue={'Carlos'} />
      </div>
      <label htmlFor="surname">Apellidos</label>
      <div>
        <input name="surname" type="text" ref={register({ required: true })} autoComplete="on" defaultValue={'Rodriguez'} />
      </div>  
      <label htmlFor="password">Contraseña</label>
      <div>
        <input name="password" type="password" ref={register({ required: true })} autoComplete="on" defaultValue={'***************'} />
      </div>
      <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
      <div>
        <input name="dateOfBirth" type="date" ref={register({ required: true })} autoComplete="on" />
      </div>
      <div>
        <input name="marketing" type="checkbox" ref={register} autoComplete="on" />
        <label htmlFor="marketing">Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y otros correos electrónicos de Maleteo</label>
      </div>
      <ButtonComponent type="submit" title={'Registrarse'}/>
    </form>
  )
}