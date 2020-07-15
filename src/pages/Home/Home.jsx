import React from 'react';
import BottomNav from "../../shared/components/NavBar/NavBar";
import SearchInput from "../../shared/components/SearchInput/SearchInput";

export function Home() {


    return (
        <div>
           <h2>Encuentra tu guardian</h2>
            <SearchInput/>
            <BottomNav/>
        </div>

    )

}
