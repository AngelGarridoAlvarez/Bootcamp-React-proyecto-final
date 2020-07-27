import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Start.scss';

export function Start() {

  const history = useHistory();

  useEffect(() => {
    let timer = setTimeout(() => history.push('/welcome'), 1500);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <div className="c-start">
      <img className="c-start__img c-start__img--size" src="assets/images/maleta@3x.png" alt="suitcase" />
      <img className="c-start__img" src="assets/images/maleteo@3x.png" alt="suitcase-logo" />
    </div>
  )
}