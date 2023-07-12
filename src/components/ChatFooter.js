import React, { useState } from "react";

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("hello");
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="message"
          placeholder="Write message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
// import React, { useState } from "react";

// const ChatFooter = ({ socket }) => { // Destructure `socket` from props
//   const [message, setMessage] = useState("");

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     console.log("hello");
//     if (message.trim() && localStorage.getItem("userName")) {
//       socket.emit("message", {
//         text: message,
//         name: localStorage.getItem("userName"),
//         id: `${socket.id}${Math.random()}`,
//         socketID: socket.id,
//       });
//     }
//     console.log({ userName: localStorage.getItem("userName"), message });
//     setMessage("");
//   };

//   return (
//     <div className="chat__footer">
//       <form className="form" onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           className="message"
//           placeholder="Write message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button className="sendBtn">Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatFooter;

