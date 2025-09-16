import React from "react";

const shortcutKeys = [
  { action: "New chat", keys: ["Ctrl", "N"] },
  { action: "Close Chat", keys: ["Ctrl", "W"] },
  { action: "Close Chat", keys: ["Ctrl", "F4"] },
  { action: "Close Application", keys: ["Alt", "F4"] },
  { action: "New group", keys: ["Ctrl", "Shift", "N"] },
  { action: "Search", keys: ["Ctrl", "F"] },
  { action: "Search in chat", keys: ["Ctrl", "Shift", "F"] },
  { action: "Profile", keys: ["Ctrl", "P"] },
  { action: "Mute Chat", keys: ["Ctrl", "Shift", "M"] },
  { action: "Toggle", keys: ["Ctrl", "Shift", "U"] },
  { action: "Emoji Panel", keys: ["Ctrl", "Shift", "E"] },
  { action: "Gif Panel", keys: ["Ctrl", "Shift", "G"] },
  { action: "Sticker Panel", keys: ["Ctrl", "Shift", "S"] },
  { action: "Previous Chat", keys: ["Ctrl", "Shift", "["] },
  { action: "Previous Chat", keys: ["Ctrl", "Tab"] },
  { action: "Next Chat", keys: ["Ctrl", "Shift", "]"] },
  { action: "Next Chat", keys: ["Ctrl", "Tab"] },
  { action: "Open Chat", keys: ["Ctrl", "1..9"] },
  { action: "Edit last message", keys: ["Ctrl", "↑"] },
  { action: "Decrease text size", keys: ["Ctrl", "-"] },
  { action: "Increase text size", keys: ["Ctrl", "+"] },
  { action: "Reset text size", keys: ["Ctrl", "0"] },
];

const Shortcuts = () => {
  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <h1 className="text-xl">Shortcuts</h1>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg">Keyboard Shortcuts</h2>
        <ShortcutsList />
      </div>
      <div>
        <p className="text-xl mb-3">Quick emojis</p>
        <p className="text-[13px] text-gray-300/80 leading-4.5">
          When typing a message, use the colon symbol to quickly search for and
          access emojis in-line.
        </p>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <p>Cat</p>
            <div className="flex gap-2 items-center">
              <div className="rounded-md px-3 py-1 flex items-center justify-center border-1 border-white/20">
                :
              </div>
              <div className="pb-2 rounded-md text-3xl flex items-center justify-center">
                →
              </div>
              <div className="rounded-md px-2 py-1 flex items-center justify-center border-1 border-white/20">
                :cat
              </div>
              <div className="pb-2 text-3xl font-bold flex-items-center justify-center">
                =
              </div>
              <div className="rounded-md px-2 py-1 flex items-center justify-center border-1 border-white/20">
                😺
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Hat</p>
            <div className="flex gap-2 items-center">
              <div className="rounded-md px-3 py-1 flex items-center justify-center border-1 border-white/20">
                :
              </div>
              <div className="pb-2 rounded-md text-3xl flex items-center justify-center">
                →
              </div>
              <div className="rounded-md px-2 py-1 flex items-center justify-center border-1 border-white/20">
                :hat
              </div>
              <div className="pb-2 text-3xl font-bold flex-items-center justify-center">
                =
              </div>
              <div className="rounded-md px-2 py-1 flex items-center justify-center border-1 border-white/20">
                🎩
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;

const ShortcutItem = ({ action, keys }) => (
  <div className="flex flex-col mt-2">
    <div className="flex justify-between items-center">
      <p className="text-sm">{action}</p>
      <div className="flex items-center gap-3 text-sm">
        {keys.map((key, index) => (
          <p
            key={index}
            className="flex items-center justify-center text-sm border-1 border-white/30 w-[35px] py-1 rounded-md"
          >
            {key}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const ShortcutsList = () => {
  return (
    <div>
      {shortcutKeys.map((shortcut, index) => (
        <ShortcutItem
          key={index}
          action={shortcut.action}
          keys={shortcut.keys}
        />
      ))}
    </div>
  );
};
