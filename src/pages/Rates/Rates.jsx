import React from 'react';
import "../Rates/Rates.scss"
import SelectAutocompleteComponent from "../../shared/components/SelectAutocompleteComponent/SelectAutocompleteComponent";
import SimpleCardComponent from "../../shared/components/SimpleCardComponent/SimpleCardComponent";
import BottomNavBarComponent from "../../shared/components/BottomNavbarComponent/BottomNav";

export function Rates() {

    const options = ['Europa', 'Norteamérica', 'Sudamérica', 'Asia', 'Oceanía', 'Africa'];


    return (
        <div>
            <SelectAutocompleteComponent className = "rateSelect" options={options}/>
            <SimpleCardComponent className="ratesCards card1" text1="24 Horas" text2="6€" text3="Por equipaje"/>
            <SimpleCardComponent className="ratesCards card2" text1="Día adicional" text2="4€" text3="Por equipaje"/>
            <BottomNavBarComponent/>
        </div>

    )

}
