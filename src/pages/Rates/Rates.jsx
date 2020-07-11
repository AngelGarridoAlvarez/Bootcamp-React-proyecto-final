import React from 'react';
import "../Rates/Rates.scss"
import SelectAutocompleteComponent from "../../shared/components/SelectAutocompleteComponent/SelectAutocompleteComponent";
import SimpleCardComponent from "../../shared/components/SimpleCardComponent/SimpleCardComponent";
import BottomNavBarComponent from "../../shared/components/BottomNavbarComponent/BottomNavbarComponent";

export function Rates() {

    const options = ['Europa', 'Norteamérica', 'Sudamérica', 'Asia', 'Oceanía', 'Africa'];


    return (
        <div>
            <SelectAutocompleteComponent options={options}/>
            <SimpleCardComponent text1="24 Horas" text2="6€" text3="Por equipaje"/>
            <SimpleCardComponent text1="Día adicional" text2="4€" text3="Por equipaje"/>
            <BottomNavBarComponent/>
        </div>

    )

}
