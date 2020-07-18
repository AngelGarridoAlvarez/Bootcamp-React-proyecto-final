import React from 'react';
import SearchInput from "../../shared/components/SearchInput/SearchInput";
import NavBar from '../../shared/components/NavBar/NavBar';
import GoBackIcon from '../../shared/components/GoBackIcon/GoBackIcon';
import { Container } from '@material-ui/core';

export function Location() {

  return (
    <>
      <Container maxWidth="lg">
        <GoBackIcon />
        <SearchInput />
        <img src="/assets/images/brujula@3x.png" alt="compass" /><span>Utilizar mi ubicación actual</span>
        <NavBar />
      </Container>
    </>
  )
}