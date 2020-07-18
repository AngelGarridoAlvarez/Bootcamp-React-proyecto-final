import React from 'react';
import SearchInput from "../../shared/components/SearchInput/SearchInput";
import NavBar from '../../shared/components/NavBar/NavBar';
import GoBackIcon from '../../shared/components/GoBackIcon/GoBackIcon';

export function Location() {

  return (
    <>
      <GoBackIcon />
      <SearchInput />
      <NavBar />
    </>
  )
}