import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AllChatBox from "./Components/Chats/AllChatBox";
import FullChat from "./Components/Chats/FullChat";

function App() {
  const [fullChatData, setFullChatData] = useState([]);

  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <AllChatBox
        fullChatData={fullChatData}
        setFullChatData={setFullChatData}
      />
      <FullChat fullChatData={fullChatData} setFullChatData={setFullChatData} />
    </>
  );
}

export default App;
