import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';
import "./GoBackIcon.scss"

export default function GoBackIcon() {

	const history = useHistory();
	const goBack = () => {
		history.goBack();
	}

	return (
		<ArrowBackIosIcon className="GoBackIcon" onClick={goBack} />
	)
}