import "./Home.scss"
import React from 'react';
import BottomNav from "../../shared/components/NavBar/NavBar";
import SearchInput from "../../shared/components/SearchInput/SearchInput";
import DepositInput from "../../shared/components/DepositInput/DepositInput";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export function Home() {


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2 className="Search">Encuentra tu guardian</h2>
            </Grid>
            <Grid item xs={12}>
                <SearchInput/>
            </Grid>
            <Grid item xs={6}>
                <DepositInput/>
            </Grid>
            <Grid item xs={6}>
                <DepositInput/>
            </Grid>
            <Grid item xs={6}>
                <DepositInput/>
            </Grid>
            <Grid item xs={6}>
                <DepositInput/>
            </Grid>
            <BottomNav/>
        </Grid>


    )

}
