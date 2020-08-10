import "./CasesNumber.scss"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        width: '25vh',
    },
    input: {
        marginLeft: theme.spacing(1),
        margin: theme.spacing(0),
        flex: 1,
    },
    iconButton: {
        padding: 0,
        color: 'orange',
    },

}));

export function CasesNumber() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton type="number" className={classes.iconButton} aria-label="search">
                <BusinessCenterIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Número de bultos"
                inputProps={{ 'max': 10, 'min': 1, 'autocomplete': true }}
                id="standard-number"
                label="Número de bultos"
                type="number"

            />
        </Paper>
    );
}