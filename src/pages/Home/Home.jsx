import React from 'react';
import BottomNav from "../../shared/components/NavBar/NavBar";
import SearchInput from "../../shared/components/SearchInput/SearchInput";
import DepositInput from "../../shared/components/DateTime/DateTime";
import Grid from '@material-ui/core/Grid';
import { ButtonComponent } from "../../shared/components/Button/ButtonComponent";
import { CasesNumber } from "../../shared/components/CasesNumber/CasesNumber";
import { DemoCarousel } from "../../shared/components/Carousel/Carousel";
import { Container } from '@material-ui/core';
import GoBackIcon from "../../shared/components/GoBackIcon/GoBackIcon";
import SearchIcon from '@material-ui/icons/Search';
import NextIcon from "../../shared/components/NextIcon/NextIcon";

import "./Home.scss"

export function Home() {

    return (
        <Container maxWidth="lg">
            <GoBackIcon/>
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <h2 className="Search">Encuentra tu guardián</h2>
            </Grid>
            <Grid item xs={12}>
                <SearchInput icon={<SearchIcon/>}/>
            </Grid>
            <Grid item xs={6}>
                <DepositInput text="Depósito" />
            </Grid>
            <Grid item xs={6}>
                <DepositInput text="Retirada" />
            </Grid>
            <Grid item xs={6}>
                <CasesNumber />
            </Grid>
            <Grid item xs={6}>
                <ButtonComponent title={"Buscar"} />
            </Grid>
            <Grid item xs={12}>
                <DemoCarousel/>
            </Grid>
            <NextIcon newRoute="/Login"/>


            <BottomNav/>
        </Grid>
        </Container>
    )
}
