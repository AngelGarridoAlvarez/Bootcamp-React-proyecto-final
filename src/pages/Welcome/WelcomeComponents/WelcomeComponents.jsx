import React from 'react';
import { WelcomeCard } from "../../../shared/modules/WelcomeCard/WelcomeCard";

export function Welcome() {

  const cardItems = [
    {
      image: '',
      alt: 'globe-image',
      title: 'El mismo precio en cualquier parte',
      text: 'Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso.',
      textButton: 'Empezar Ya',
      link: 'Consulta los precios'
    },
    {
      image: '',
      alt: 'prisoner-shackle-image',
      title: 'Prepárate para liberarte de tu equipaje',
      text: 'Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya están aprovechando las ventajas.',
      textButton: 'Continuar',
      link: ''
    }
  ]

  return (
    <WelcomeCard items={cardItems}></WelcomeCard>
  )
}