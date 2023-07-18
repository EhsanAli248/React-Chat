import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatpage from "./components/Chatpage";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:40001");
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<Chatpage socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
