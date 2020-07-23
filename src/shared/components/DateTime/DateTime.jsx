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

    let curr = new Date();
    curr.setDate(curr.getDate() + 0);
    let date = curr.toISOString().substr(0,16);
    return (
        <form className={classes.container} noValidate>
            <TextField id="dateRequired"
                       type="datetime-local"
                       name="dateRequired"
                       inputProps={{min:date, defaultValue: date}}
                       label={props.text}
            />
        </form>
    );
}
