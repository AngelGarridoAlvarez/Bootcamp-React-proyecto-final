import React from 'react';
import SearchInput from "../../shared/components/SearchInput/SearchInput";
import GoBackIcon from '../../shared/components/GoBackIcon/GoBackIcon';
import NavBar from '../../shared/components/NavBar/NavBar';
import { Container } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { useHistory } from "react-router-dom";
import "./Location.scss"

export function Location() {

  const history = useHistory();
  const goMap = () => {
    history.push("/map");
  }

  return (
    <>
      <Container maxWidth="lg" className="container">
        <GoBackIcon />
        <SearchInput className="SearchInput" icon={<LocationOnIcon />} />
        <span onClick={goMap}> <ExploreOutlinedIcon className="compassIcon" fontSize="large" /> Utilizar mi ubicación actual</span>
      </Container>
      <NavBar />
    </>
  )
}