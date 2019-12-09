import React from 'react';
import { useState } from 'react';
import{ Link } from 'react-router-dom';

import './Join.css';

const Join = props => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(

        
            <div className="joinOuterContainer">
                <div className="joinInnerContainter">
                    <h1 className="heading">Join A Chat Now</h1>
                 <div><input placeholder="Name" className="joinInput" type="text" onChange={(e)=>{setName(e.target.value)}} /></div>
                 <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e=>{setRoom(e.target.value)})} /></div>   
                 <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button className="button mt-20" type="submit">Sign In</button></Link>             
                </div>
            </div>
    
    )
};


export default Join