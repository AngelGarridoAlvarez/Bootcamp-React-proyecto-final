import React from 'react';
import { useForm } from "react-hook-form";
import { ButtonComponent } from '../../shared/components/Button/ButtonComponent';

export function LoginForm({ fnSendData }) {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => fnSendData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Dirección de correo electrónico</label>
      <div>
        <input name="email" ref={register({ required: true })} autoComplete="on" />
      </div>
      <label htmlFor="password">Contraseña</label>
      <div>
        <input name="password" ref={register({ required: true })} autoComplete="on" />
      </div>
      <div>
        <ButtonComponent type={"submit"} title={"Inicia sesión"} />
      </div>
    </form>
  )
}