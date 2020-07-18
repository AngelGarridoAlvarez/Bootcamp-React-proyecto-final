import "./DateTime.scss"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";

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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));

export default function CustomizedInputBase(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate>
            <input type="datetime-local" id="meeting-time"
                   name="meeting-time" value="2018-06-12T19:30"
                   min="2018-06-07T00:00" max="2018-06-14T00:00"/>
        </form>

        /*
        <Paper component="form" className={classes.root}>
            <IconButton type="datetime-local" className={classes.iconButton} aria-label="date">
                <EventNoteIcon/>
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Depósito"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
         */
    );
}