import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";
import "./DateTime.scss"

const useStyles = makeStyles((theme) => ({
    root:
    {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '42vh',
    },
    input:
    {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton:
    {
        padding: 0,
        color: 'orange',
    },
    container:
    {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField:
    {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));

export default function CustomizedInputBase(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label={props.text}
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}

            />
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