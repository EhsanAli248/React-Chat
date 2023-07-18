import React, { useEffect, useRef, useState } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chatpage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef=useRef(null);
  useEffect(() => {
    socket.on("messageResponse", data => setMessages([...messages, data]));
  }, [socket, messages]);
  
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket}/>
      <div className="chat__main">
        <ChatBody messages={messages} lastMessageRef={lastMessageRef}/>
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default Chatpage;




