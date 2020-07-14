import React from 'react';
import "../Rates/Rates.scss"
import DropDownMenu from "../../shared/components/DropDownMenu/DropDownMenu";
import SimpleCardComponent from "../../shared/components/SimpleCard/SimpleCardComponent";
import BottomNav from "../../shared/components/NavBar/NavBar";
import GoBackComponent from "../../shared/components/GoBackIcon/GoBackIcon";

export function Rates() {

    const options = ['Europa', 'Norteamérica', 'Sudamérica', 'Asia', 'Oceanía', 'Africa'];


    return (
        <div>
            <GoBackComponent/>
            <DropDownMenu className = "rateSelect" options={options}/>
            <SimpleCardComponent className="ratesCards card1" text1="24 Horas" text2="6€" text3="Por equipaje"/>
            <SimpleCardComponent className="ratesCards card2" text1="Día adicional" text2="4€" text3="Por equipaje"/>
            <BottomNav/>
        </div>

    )

}
