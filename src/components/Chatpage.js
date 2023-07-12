import React, { useEffect, useState } from 'react'
// import ChatBar from './components/ChatBar';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';




const Chatpage = ({socket}) => {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    socket.on('messageResponse',(data)=>setMessages([...messages,data]))
  },[socket,messages]);
  return (
    <div className='chat'>
      <ChatBar/>
      <div className='chat__main'>
        <ChatBody messages={messages}/>
        <ChatFooter socket={socket}/>
      </div>
    </div>
  )
}

export default Chatpage

