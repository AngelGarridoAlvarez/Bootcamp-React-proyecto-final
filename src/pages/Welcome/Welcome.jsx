import React from 'react';
import { CardComponent } from "../../modules/Card/CardComponent";
import '../../styles/start&welcome.scss';

export function Welcome() {

  const cardItems = [
    {
      image: 'assets/images/cadena@3x.png',
      alt: 'prisoner-shackle-image',
      title: 'Prepárate para liberarte de tu equipaje',
      text: 'Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya están aprovechando las ventajas.',
      textButton: 'Continuar',
      link: '',
      route: '/welcome2'
    }
  ]

  return(
        <CardComponent items={cardItems}></CardComponent>
  )
}