import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AllChatBox from "./Components/Chats/AllChatBox";
import FullChat from "./Components/Chats/FullChat";
import Setting from "./Components/Setting/Setting";
function App() {
  const [fullChatData, setFullChatData] = useState([]);
  const [settingOpen, setSettingOpen] = useState(false);
  const [bg, setBackground] = useState(
    "bg-[url('/chat-backgrounds/chat-bg.jpg')]"
  );
  return (
    <>
      <Header></Header>
      <Sidebar
        settingOpen={settingOpen}
        setSettingOpen={setSettingOpen}
      ></Sidebar>
      <AllChatBox
        fullChatData={fullChatData}
        setFullChatData={setFullChatData}
      />
      <FullChat
        fullChatData={fullChatData}
        setFullChatData={setFullChatData}
        bg={bg}
      />
      <Setting settingOpen={settingOpen} setBackground={setBackground} />
    </>
  );
}

export default App;
