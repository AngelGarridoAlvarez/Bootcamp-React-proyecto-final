import React from 'react';
import SearchInput from "../../shared/components/SearchInput/SearchInput";
import GoBackIcon from '../../shared/components/GoBackIcon/GoBackIcon';
import NavBar from '../../shared/components/NavBar/NavBar';
import { Container } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';



export function Location() {

  return (
    <>
      <Container maxWidth="lg">
        <GoBackIcon />
        <SearchInput icon={<LocationOnIcon/>}/>
        <SearchInput />
        <img src="/assets/images/brujula@3x.png" alt="compass" /><span>Utilizar mi ubicación actual</span>
        <NavBar />
      </Container>
    </>
  )
}