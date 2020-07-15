import "./CasesNumber.scss"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '85vh',
    },
    input: {
        marginLeft: theme.spacing(1),
        margin: theme.spacing(2),
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
                <BusinessCenterIcon/>
            </IconButton>
        </Paper>
    );
}