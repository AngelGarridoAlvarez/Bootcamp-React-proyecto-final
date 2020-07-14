/* Podemos cambiar el texto del botón:
 <OrangeButtonComponent title="Texto del botón"/>
*/

import React from 'react';
import Button from '@material-ui/core/Button';
import "./ButtonComponent.scss"


export function ButtonComponent(props) {

	return (
		<Button onClick={props.onClick} className={`b-material-ui-button ${props.className}`} variant="contained">{props.title}</Button>
	);
}

