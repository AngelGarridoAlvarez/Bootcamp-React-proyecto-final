/* Podemos cambiar el texto del botón:
 <ButtonComponent title = "Texto del botón"/>
*/

import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "../../styles/blocks/material-ui/_material-ui-button.blocks.scss"

export function ButtonComponent(props) {

    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/welcome2')} className= "b-material-ui-button" variant="contained">{props.title}</Button>
        </div>
    );
}

