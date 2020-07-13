import React from 'react';
import { useForm } from "react-hook-form";


export function LoginForm() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Dirección de correo electrónico
        <input name="email" ref={register({ required: true })} />
      </label>
      <label htmlFor="password">
        Contraseña
        <input name="password" ref={register({ required: true })} />
      </label>
      <input type="submit" />
    </form>
  )
}