import React, { useEffect, useState } from 'react';
import UserAuth from '../context/UserAuth';
import Navbar from '../components/Landing Page/Navbar';

export default function Forum() {
    const [chats, setChats] = useState([]);
    const [chat, setChat] = useState('');
    const { user } = UserAuth();

    const backgroundStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(173, 216, 230, 0.8), rgba(144, 238, 144, 0.8)), url(https://i.pinimg.com/564x/01/05/1b/01051badd52dc3f3a0a77816a42ddd01.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor:"light-green",
    };

    async function GetRequest() {
        const res = await fetch('http://localhost:3001/forum/getallchats');
        const json = await res.json();
        setChats(json);
    }

    useEffect(() => {
        GetRequest();
    }, []);

    async function addPost() {
        const body = {
            username: user.email,
            chat: chat,
            like: 0,
        };

        const url = 'http://localhost:3001/forum/addchat';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                console.log('Chat added');
                GetRequest();
            } else {
                console.log('Error adding chat');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    return (
        <div style={backgroundStyle}>
            <Navbar />
            <div className="flex flex-col h-screen justify-center items-center">
                <div className="overflow-scroll h-[80vh]">
                    <div className="flex flex-col space-y-4">
                        {chats.map((item, index) => (
                            <Card key={item._id} props={item} />
                        ))}
                    </div>
                </div>
                <div className="h-[10vh] flex items-center justify-center">
                    <input
                        type="text"
                        className="w-[70vw] p-2 border rounded-l-lg focus:outline-none bg-opacity-70"
                        placeholder="Enter your chat message"
                        value={chat}
                        onChange={(e) => setChat(e.target.value)}
                    />
                    <button
                        onClick={addPost}
                        className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600 focus:outline-none bg-opacity-70">
                        Add Post
                    </button>
                </div>
            </div>
        </div>
    );
}

function Card(props) {
    async function incrementLike(props) {
        const body = {
            like: props.like,
        };
        const url = `http://localhost:3001/forum/like/${props.id}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                console.log('Like incremented');
            } else {
                console.log('Error incrementing like');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const [like, setLike] = useState(props.props.like || 0);

    return (
        <div className="w-[70vw] p-4 border rounded-lg shadow-md bg-white bg-opacity-70">
            <p className="font-light text-gray-600">{props.props.username}</p>
            <p>{props.props.chat}</p>
            <button
                onClick={() => {
                    setLike(like + 1);
                    incrementLike({ id: props.props._id, like: like });
                }}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none bg-opacity-70">
                Like {like}
            </button>
        </div>
    );
}
