import React from 'react';
import onlineIcon from '../../icons/online.png';
import closeIcon from '../../icons/close.jpeg';
import './Infobar.css';



const Infobar = props => {
    return (
            <div className="infoBar">
                <div className="leftInnerContainer">
                    <img className="onlineIcon" src={onlineIcon} alt="online" />
                    <h3>{props.room}</h3>
                </div>
                <div className="RightInnerContainer">
                    <a href='/'><img className="closeIcon" src={closeIcon} alt="close" /></a>
                </div>
            </div>    
     
    )
};


export default Infobar;