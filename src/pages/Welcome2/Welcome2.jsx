import React from 'react';
import { CardComponent } from "../../modules/Card/CardComponent";
import '../../styles/start&welcome.scss';

export function Welcome2() {

  const cardItems = [
    {
      image: 'assets/images/world@3x.png',
      alt: 'globe-image',
      title: 'El mismo precio en cualquier parte',
      text: 'Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso.',
      textButton: 'Empezar Ya',
      link: 'Consulta los precios',
      route: '/Login'
    }
  ]

  return(
    <CardComponent items={cardItems}/>
  )
}