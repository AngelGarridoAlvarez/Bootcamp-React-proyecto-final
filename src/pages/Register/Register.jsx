import React from 'react';
import { TabComponent } from '../../modules/TabComponent/TabComponent';
import { SocialLoginComponent } from '../../modules/SocialLoginComponent/SocialLoginComponent';
import { Container } from '@material-ui/core';
import { environment } from '../../shared/environment/environment';
import { RegisterForm } from '../../modules/RegisterForm/RegisterForm';
import { useHistory } from 'react-router';
import axios from "axios";

export function Register() {

  const tabs = [
    { label: 'Iniciar sesión', link: '/login', selected: true },
    { label: 'Regístrate', link: '/register' }
  ];

  const history = useHistory();

  const sendData = data => {
    axios.post(environment.url + '/register', {
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
      dateOfBirth: data.dateOfBirth,
      marketing: data.marketing
    }, {
      headers: {
        'Content-Type':'application/json',
      }
    }).then(function(resp) {
      console.log(resp);
      history.push('/login');
    }).catch(function(err) {
      console.log(err);
      history.push('/register');
    })
  }

  return (
    <Container maxWidth="lg">
      <TabComponent tabs={tabs} />
      <h1>Únete a Maleteo y disfruta de sus ventajas</h1>
      <SocialLoginComponent />
      <RegisterForm fnSendData={sendData} />
    </Container>
  )
}