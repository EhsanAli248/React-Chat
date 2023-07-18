import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({socket}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
     //sends the username and socket ID to the Node.js server
     socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
  };

  return (
    <>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home_header">Sign In to open chat</h2>
        <label htmlFor="username">Username</label>
        <input
          className="username__input"
          value={userName}
          type="text"
          // minLength={6}
          name="username"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="password__input"
          value={password}
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="home__cta">Sign In</button>
      </form>
    </>
  );
};

export default Home;
