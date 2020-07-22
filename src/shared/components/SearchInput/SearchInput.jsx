import "./SearchInput.scss"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchInput.scss"

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

export default function SearchInput(props) {

	const classes = useStyles();
	const history = useHistory();

	const searchLocation = () => {
		history.push('/location');
	}

	return (
		<Paper component="form" className={props.className}>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase
				className={classes.input}
				placeholder="¿Dónde te encuentras? Jerez de la Frontera"
				inputProps={{ 'aria-label': 'search google maps' }}
				onClick={searchLocation}
			/>
		</Paper>
	);
}