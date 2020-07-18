import React from 'react';
import { TabComponent } from '../../modules/TabComponent/TabComponent';
import { SocialLoginComponent } from '../../modules/SocialLoginComponent/SocialLoginComponent';
import { Container } from '@material-ui/core';
import { LoginForm } from '../../modules/LoginForm/LoginForm';
import { environment } from '../../shared/environment/environment';
import { useHistory } from 'react-router';
import axios from "axios";

export function Login() {

  const tabs = [
    { label: 'Iniciar sesión', link: '/login', selected: true },
    { label: 'Regístrate', link: '/register' }
  ];

  const history = useHistory();

  const sendData = data => {
    axios.post(environment.url + '/login', {
      email: data.email,
      password: data.password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(function (resp) {
      console.log(resp);
      const token = resp.data.token;
      if (resp.status === 200) {
        localStorage.setItem("userToken", token);
        history.push('/home');
      }
    }).catch(function (err) {
      console.log(err);
      history.push('/login');
    })
  }

  return (
    <Container maxWidth="lg">
      <TabComponent tabs={tabs} />
      <h1>Inicia sesión ahora</h1>
      <SocialLoginComponent />
      <LoginForm fnSendData={sendData} />
    </Container>
  )
}