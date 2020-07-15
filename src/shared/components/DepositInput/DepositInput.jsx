import "./DepositInput.scss"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import EventNoteIcon from '@material-ui/icons/EventNote';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '42vh',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 0,
        color: 'orange',
    },

}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton type="date" className={classes.iconButton} aria-label="date">
                <EventNoteIcon/>
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Depósito"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
}