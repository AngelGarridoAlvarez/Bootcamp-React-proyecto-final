import "./BottomNav.scss"
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import PersonIcon from '@material-ui/icons/Person';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

class BottomNav extends Component {
    state = {
        value: 0,
        pathMap: [
            '/Home',
            '/Search',
            '/Chat',
            '/Profile',
        ]
    };

    componentWillReceiveProps(newProps) {
        const {pathname} = newProps.location;
        const {pathMap} = this.state;

        const value = pathMap.indexOf(pathname);

        if (value > -1) {
            this.setState({
                value
            });
        }
    }

    handleChange = (value) => {
        this.setState({value});
    };


    render() {
        const {value, pathMap} = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className="BottomNav"
            >
                <BottomNavigationAction label="" component={Link} to={pathMap[0]} value="home" icon={<HomeIcon style={{fontSize: 40}}/>}/>
                <BottomNavigationAction label="" component={Link} to={pathMap[1]} value="favorites" icon={<SearchIcon style={{fontSize: 40}}/>}/>
                <BottomNavigationAction label="" component={Link} to={pathMap[2]} value="nearby" icon={<QuestionAnswerRoundedIcon style={{fontSize: 40}}/>}/>
                <BottomNavigationAction label="" component={Link} to={pathMap[3]} value="folder" icon={<PersonIcon style={{fontSize: 40}}/>}/>
            </BottomNavigation>
        );
    }
}
export default withRouter (BottomNav);