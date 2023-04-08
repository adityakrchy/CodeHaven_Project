import React from "react";
import { useState, useRef, useEffect } from "react";
import Client from "./Client";
import Editor from "./Editor";
import { AiOutlineCloudDownload, AiOutlineCopy } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import CodeMirror from "@uiw/react-codemirror";
import { initSocket } from "../socket";
// import { actions } from "../Actions";
import { useLocation } from "react-router-dom";

const EditorPage = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      // socketRef.current.emit(Actions.JOIN, {
      //   roomId,
      //   username: location.state?.username,
      // });
    };
    init();
  }, []);

  const [clients, setClients] = useState([
    { socket: 1, username: "Aditya K" },
    { socket: 2, username: "Shivangi P" },
    { socket: 3, username: "Mohit M" },
  ]);
  const [code, setCode] = useState("");
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "code.txt";
    document.body.appendChild(element);
    element.click();
  };
  const handleReset = () => {
    setCode("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    console.log("coppied");
  };

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/logo_bg_removed.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socket} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <CodeMirror
          value={code}
          height="100vh"
          onChange={(e) => {
            setCode(e);
          }}
          theme="dark"
          options={{}}
        />
      </div>
      <div className="contextMenu">
        <ul>
          <li>
            <div onClick={handleDownload} className="onHoverEffectonIcons">
              <AiOutlineCloudDownload className="icon-large" />
            </div>
          </li>
          <li>
            <div onClick={handleReset} className="onHoverEffectonIcons">
              <BiReset className="icon-large" />
            </div>
          </li>
          <li>
            <div onClick={handleCopy} className="onHoverEffectonIcons">
              <AiOutlineCopy className="icon-large" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditorPage;
