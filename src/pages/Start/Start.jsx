import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Start.scss';

export function Start() {

  const history = useHistory();

  useEffect(() => {
    setTimeout(function(){ history.push('/welcome') }, 3000);
  })

  return (
    <div className="c-start">
      <div>
        <img className="c-start__img c-start__img--size" src="assets/images/maleta@3x.png" alt="suitcase"/>
        <img className="c-start__img" src="assets/images/maleteo@3x.png" alt="suitcase-logo"/>
      </div>
    </div>
  )
}