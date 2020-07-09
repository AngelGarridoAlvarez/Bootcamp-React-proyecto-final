/* Podemos cambiar el texto del botón:
 <ButtonComponent title = "Texto del botón"/>
*/


import React from 'react';
import Button from '@material-ui/core/Button';
import "../../styles/blocks/material-ui/_material-ui-button.blocks.scss"

export function ButtonComponent(props) {
    return (
        <div>
            <Button className= "b-material-ui-button" variant="contained">{props.title}</Button>
        </div>
    );
}
