import React from 'react';
import { useForm } from "react-hook-form";


export function RegisterForm({ fnSendData }) {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => fnSendData(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Dirección de correo electrónico
        <input name="email" type="email" ref={register({ required: true })} autoComplete="on" />
      </label>
      <label htmlFor="name">
        Nombre
        <input name="name" type="text" ref={register({ required: true })} autoComplete="on" />
      </label>
      <label htmlFor="surname">
        Apellidos
        <input name="surname" type="text" ref={register({ required: true })} autoComplete="on" />
      </label>
      <label htmlFor="password">
        Contraseña
        <input name="password" type="password" ref={register({ required: true })} autoComplete="on" />
      </label>
      <label htmlFor="dateOfBirth">
        Fecha de nacimiento
        <input name="dateOfBirth" type="date" ref={register({ required: true })} autoComplete="on" />
      </label>
      <label htmlFor="marketing">
        Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y otros correos electrónicos de Maleteo
        <input name="marketing" type="checkbox" ref={register} autoComplete="on" />
      </label>
      <input type="submit" />
    </form>
  )
}