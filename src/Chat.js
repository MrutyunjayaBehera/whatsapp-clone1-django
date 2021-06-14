import { Avatar, IconButton } from '@material-ui/core';
import { InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router';
import db from './firebase';

function Chat() {
    // to store values of different variables
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");


    // useEffect for roomId
    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(
                (snapshot) => setRoomName(snapshot.data().name)
            );
        }
    }, [roomId]); //variable appearing inside the array is to be used

    // for creating random avatars from string
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    // to send meassge when pressed enter
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input);

        // clearing input after hitting Enter
        setInput("");
    }


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3> { roomName } </h3>
                    <p>last seen recently</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton> <SearchOutlined /> </IconButton>
                    <IconButton> <MoreVertIcon /> </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">
                        Mj Dev
                    </span>
                    Hey guys!!
                    <span className="chat__timestamp">
                        18:43
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <IconButton> <InsertEmoticon /> </IconButton>
                <IconButton> <AttachFileIcon /> </IconButton>
                <form action="">
                    {/* on using onchange, it stores input value typed by user in database */}
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message..." />
                    <button onClick={sendMessage} type="submit"> Send a message </button>
                </form>
                <IconButton> <MicIcon /> </IconButton>
            </div>
        </div>
    )
}

export default Chat 
