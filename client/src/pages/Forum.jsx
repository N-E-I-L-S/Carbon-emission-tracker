import React, { useEffect, useState } from 'react'
import UserAuth from '../context/UserAuth'

export default function Forum() {

    const [chats, setChats] = useState([])
    const [chat, setChat] = useState("")
    const { user } = UserAuth()

    

    async function GetRequest() {
        const res = await fetch('http://localhost:3001/forum/getallchats')
        const json = await res.json();
        setChats(json)
    }
    useEffect(() => {
        GetRequest()
    }, [])

    async function addPost() {
        const body = {
            username: user.email,
            chat: chat,
            like: 0,
        }
        console.log(body)
        const url = `http://localhost:3001/forum/addchat`
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            console.log(response)
            if (response) {
                console.log('chat added')
                GetRequest()
            }
            else
                console.log('error')
        }
        catch {
            console.log('error')
        }
    }

    return (
        <>
            <div className="h-[90vh] overflow-scroll">
                <div className="h-[80vh] ">
                    <div className="">
                        {
                            chats.map((item, index) => {

                                return (
                                    <Card props={item}/>                                        
                                    )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="h-[5vh] flex">
                <input type="text" className='w-[90vw]' onChange={(e) => {
                    setChat(e.target.value)
                    console.log(e)
                }} />
                <div className="flex ">
                <button
                    onClick={addPost} className='border-[1px] bg-green-500 rounded-sm '>Add Post</button>
                </div>
            </div>
        </>
    )
}

function Card(props) {
    async function incrementLike(props) {
        console.log(props)
        const body = {
            like: props.like
        }
        const url = `http://localhost:3001/forum/like/${props.id}`
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (response)
                console.log(response)
            else
                console.log('error')
        }
        catch {
            console.log('error')
        }
    }
    const [like, setLike] = useState(props.props.like == undefined? 0 : props.props.like)
    console.log(like)
    return (
        <>
            <div className="w-[70vw] border-[2px] " >
                <div className="">
                    <p className='font-light'>{props.props.username}</p>
                    {props.props.chat}
                    <button onClick={() => {
                        setLike(parseInt(like) + 1)
                        incrementLike({id: props.props._id, like: like})
                    }}>Like {like}</button>
                </div>
            </div>
        </>
    )
}
