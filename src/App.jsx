import React, { useState, useRef } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AllChatBox from "./Components/Chats/AllChatBox";
import FullChat from "./Components/Chats/FullChat";
import AllCalls from "./Components/Calls/AllCalls";
import FullCalls from "./Components/Calls/FullCalls";
import AllStatus from "./Components/Status/AllStatus";
import FullStatus from "./Components/Status/FullStatus";
import AllStarred from "./Components/Starred/AllStarred";
import FullStarred from "./Components/Starred/FullStarred";
import AllArchive from "./Components/Archive/AllArchive";
import FullArchive from "./Components/Archive/FullArchive";
import Setting from "./Components/Setting/Setting";
function App() {
  const sidebarRef = useRef(null);

  const [activeSidebar, setActiveSidebar] = useState("chats");
  const [fullChatData, setFullChatData] = useState([]);
  const [settingOpen, setSettingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("General");
  const [bg, setBackground] = useState(
    "bg-[url('/chat-backgrounds/chat-bg.jpg')]"
  );
  return (
    <>
      <Header></Header>
      <Sidebar
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
        sidebarRef={sidebarRef}
        settingOpen={settingOpen}
        setSettingOpen={setSettingOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Sidebar>
      {activeSidebar === "chats" && (
        <>
          <AllChatBox setFullChatData={setFullChatData} />
          <FullChat
            fullChatData={fullChatData}
            setFullChatData={setFullChatData}
            bg={bg}
          />
        </>
      )}
      {activeSidebar === "calls" && (
        <>
          <AllCalls />
          <FullCalls />
        </>
      )}
      {activeSidebar === "status" && (
        <>
          <AllStatus />
          <FullStatus />
        </>
      )}
      {activeSidebar === "star" && (
        <>
          <AllStarred />
          <FullStarred />
        </>
      )}
      {activeSidebar === "archive" && (
        <>
          <AllArchive />
          <FullArchive />
        </>
      )}
      <Setting
        sidebarRef={sidebarRef}
        settingOpen={settingOpen}
        setSettingOpen={setSettingOpen}
        setBackground={setBackground}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}

export default App;
