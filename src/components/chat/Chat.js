import React from 'react';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css'

import Infobar from '../infobar/Infobar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

let socket;


const Chat = props => { //(* be aware that we can deconstruct the props as: { location } and get that property here I just chose to show where data is coming from )
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const data = queryString.parse(props.location.search) // this props.location is being passed in from react-router to the props , (*1 be that we can use ES6 deconstruction method of an object and retrieve the [name] and [room] Keys coming in from the params object I just wanted to show where this data is coming from  
        console.log(props.location.search) // this is output coming in from the url params
        console.log(data) // this is a nice returned object that the library query-string returns from us.

        socket = io(ENDPOINT);
        console.log(socket);

        setName(data.name);
        setRoom(data.room);

        socket.emit('join', { name: data.name, room: data.room }, () => {}); // We need to pass in the data coming in from the props not the "local state" tp this emit method so the backend knows how to respond and to what data refer to this (*1) comment

    return () => {
        socket.emit('disconnect');
        socket.off();
    }
    },[ENDPOINT, props.location.search]); // the array passed into the useEffect method is used to say indicate that if any of these properties change/update then rerun the useEffect method. useEffect is like componentDidMount & DidUpdate. 
    
    useEffect(()=>{
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);
    
    //function for sending messages
    const sendMessage = e => {
        e.preventDefault(); //no page refeshes!

        if (message) {
            socket.emit('sendMessage', message, () => {setMessage('')});
        }
    }

    console.log(message, messages)
    
    return (
        <div className="outerContainer">
            <div className="container">
                <Infobar room={room} />
                <Messages messages={messages}
                        name={name}
                 />
                <Input message={message} 
                       setMessage={setMessage} 
                       sendMessage={sendMessage}
                 />
               
             </div>
         </div>
    )
};


export default Chat;