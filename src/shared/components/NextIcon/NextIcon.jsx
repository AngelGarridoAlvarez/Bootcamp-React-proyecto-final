import React from 'react';
import {ReactComponent as ArrowIcon} from './arrow-pointing-to-right-in-a-circle.svg';
import './NextIcon.scss'
import { useHistory } from "react-router-dom";

export default function NextIcon (props) {

    const history = useHistory();
    const goNext = () => {
        history.push(props.newRoute);
    }

    return (
        <div className="NextIcon">
            <ArrowIcon viewBox="0 0 350 350" preserveAspectRatio="xMidYMid" onClick={goNext}/>
        </div>
    );
}
