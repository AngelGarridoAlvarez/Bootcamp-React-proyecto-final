import React from 'react';
import { TabComponent } from '../../modules/TabComponent/TabComponent';

export function Login() {

  const tabs = [
    { label: 'Iniciar sesión', link: '/login', selected: true },
    { label: 'Regístrate', link: '/register' }
  ] 

  return (
    <TabComponent tabs={tabs}/>
  )
}