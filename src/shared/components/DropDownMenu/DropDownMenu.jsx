import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


/* Donde pongamos el componente SelectAutoCompleteComponent tendremos que hacer algo similar a esto para que nos funcione


export function Rates() {

  const options = ['Europa', 'Norteamérica', 'Sudamérica', 'Asia', 'Oceanía', 'Africa', 'Albacete'];

  return (
      <DropDownMenu options={options}/>
  )
}

 */


export default function DropDownMenu(props) {
    const [value, setValue] = React.useState(props.options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
           {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>*/}
            <br />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
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