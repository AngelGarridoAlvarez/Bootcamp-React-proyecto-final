import React from 'react';

export function WelcomeCardItems(props) {
  return(
    <div>
      <img src={props.image} alt={props.alt}/>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button>{props.textButton}</button>
      <a href="">{props.link}</a>
    </div>
  )
}