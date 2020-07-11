import React from 'react';
import SelectAutocompleteComponent from "../../shared/components/SelectAutocompleteComponent";

export function Rates() {

  const options = ['Europa', 'Norteamérica', 'Sudamérica', 'Asia', 'Oceanía', 'Africa', 'Albacete'];

  return (
      <SelectAutocompleteComponent options={options}/>
  )
}
