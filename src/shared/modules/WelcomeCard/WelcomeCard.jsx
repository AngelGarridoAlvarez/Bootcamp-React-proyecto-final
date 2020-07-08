import React from 'react';
import { WelcomeCardItems } from "../WelcomeCardItems/WelcomeCardItems";

export function WelcomeCard(props) {
  
  return(
    <>
      {props.items.map((item, index) =>
        <WelcomeCardItems key={index} image={item.image} alt={item.alt} title={item.title} text={item.text} textButton={item.textButton} link={item.link}></WelcomeCardItems>
      )}
    </>
  )
}