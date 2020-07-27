import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function DropDownMenu(props) {
    const [value, setValue] = React.useState(props.options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <br />
            <Autocomplete
                value={value}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(_event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={props.options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Selecciona" variant="outlined" />}
            />
        </div>
    );
}