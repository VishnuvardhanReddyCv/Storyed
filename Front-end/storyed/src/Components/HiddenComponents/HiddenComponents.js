import Notification from "./Notification";
import React from 'react';

export default class HiddenComponets extends React.Component {
    render() {
        return(
        <div>
            <Notification hidden= {true} success = {false} message='Success'/>
        </div>
        );
    }
}