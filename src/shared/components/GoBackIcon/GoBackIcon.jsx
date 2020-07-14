import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


    class GoBackIcon extends Component {
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
    }

    render() {
        return (
            <ArrowBackIosIcon className="GoBackIcon" onClick={this.props.history.goBack}/>
        )
    }
}



export default withRouter (GoBackIcon);