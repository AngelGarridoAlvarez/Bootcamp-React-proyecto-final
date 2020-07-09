
import React from 'react';
import Button from '@material-ui/core/Button';
import "../../styles/blocks/material-ui/_material-ui-button.blocks.scss"

export function ButtonComponent(props) {
    return (
        <div>
            <Button className= "b-material-ui-button" variant="contained">{props.numer} {props.title}</Button>
        </div>
    );
}

