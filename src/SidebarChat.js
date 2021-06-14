import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import db from "./firebase";
import { Link } from 'react-router-dom';


function SidebarChat({ id, name, addNewChat }) {


    const [seed, setSeed] = useState('');
    // this is a hook in react which runs a code when a component runs
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    // for creating a new chat
    const createChat = () => {
        const roomName = prompt("Please enter name for chatroom");
        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            })
        }

    };

    return !addNewChat ? (
        <Link to={`/room/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="sidebarChat__info">
                    <h2>{ name }</h2>
                    <p>last message...</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add New Chat</h2>
            </div>
    );
}

export default SidebarChat
