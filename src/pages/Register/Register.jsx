import React from 'react';
import { TabComponent } from '../../modules/TabComponent/TabComponent';
import { SocialLoginComponent } from '../../modules/SocialLoginComponent/SocialLoginComponent';
import { Container } from '@material-ui/core';

export function Register() {
  const tabs = [
    { label: 'Iniciar sesión', link: '/login', selected: true  },
    { label: 'Regístrate', link: '/register'}
  ] 

  return (
    <Container maxWidth="lg">
      <TabComponent tabs={tabs} />
      <h1>Únete a Maleteo y disfruta de sus ventajas</h1>
      <SocialLoginComponent />
    </Container>
  )
}