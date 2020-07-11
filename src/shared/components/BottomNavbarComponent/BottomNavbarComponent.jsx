import React from 'react';
import "./BottomNavbarComponent.scss"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    root: {
        width: 700,
    },
});



export default function BottomNavBarComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState('rates', );

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="ButtonNavBar">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="" value="/rates" icon={<HomeIcon style={{ fontSize: 40 }}/>} />
            <BottomNavigationAction label="" value="favorites" icon={<SearchIcon style={{ fontSize: 40 }}/>} />
            <BottomNavigationAction label="" value="nearby" icon={<QuestionAnswerRoundedIcon style={{ fontSize: 40 }}/>} />
            <BottomNavigationAction label="" value="folder" icon={<PersonIcon style={{ fontSize: 40 }}/>} />
        </BottomNavigation>
        </div>
    );
}