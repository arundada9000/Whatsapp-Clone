import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { GoPencil } from "react-icons/go";

const Profile = () => {
  const [name, setName] = useState("Arun Neupane");
  const [bio, setBio] = useState("Hey there am using ArunApp.");
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingField]);

  const startEditing = (field, currentValue) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveEdit = () => {
    if (editingField === "name") setName(tempValue);
    if (editingField === "bio") setBio(tempValue);
    setEditingField(null);
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue("");
  };

  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <div>
        <CgProfile style={{ fontSize: "100px" }} />
      </div>

      {/* Name Section */}
      <div className="flex items-center justify-between">
        {editingField === "name" ? (
          <div className="flex items-center gap-2 w-full">
            <input
              ref={inputRef}
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit();
                if (e.key === "Escape") cancelEdit();
              }}
              className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
            />
            <button onClick={saveEdit} className="text-blue-400">
              ✔
            </button>
            <button onClick={cancelEdit} className="text-red-400">
              ✖
            </button>
          </div>
        ) : (
          <>
            <p>{name}</p>
            <GoPencil
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={() => startEditing("name", name)}
            />
          </>
        )}
      </div>

      {/* Bio Section */}
      <div>
        <p className="text-md text-gray-300/60">About</p>
        <div className="flex items-center justify-between text-sm text-gray-300">
          {editingField === "bio" ? (
            <div className="flex items-center gap-2 w-full">
              <input
                ref={inputRef}
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit();
                  if (e.key === "Escape") cancelEdit();
                }}
                className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
              />
              <button onClick={saveEdit} className="text-blue-400">
                ✔
              </button>
              <button onClick={cancelEdit} className="text-red-400">
                ✖
              </button>
            </div>
          ) : (
            <>
              <p>{bio}</p>
              <GoPencil
                style={{ fontSize: "16px", cursor: "pointer" }}
                onClick={() => startEditing("bio", bio)}
              />
            </>
          )}
        </div>
      </div>

      {/* Phone Section */}
      <div>
        <p className="text-md text-gray-300/60">Phone Number</p>
        <p className="text-[14px] text-gray-300/90">+977 981-1420975</p>
      </div>

      <div className="border-b-1 border-white/20 "></div>

      <button className=" py-1.5 text-red-400/80 text-sm w-[120px] bg-gray-100/10 cursor-pointer rounded-md hover:text-white hover:bg-gray-300/10">
        Log out
      </button>
      <p className="text-[12px] text-gray-200/90 leading-3.5">
        Chat history on this device will be cleared when you log out.
      </p>
    </div>
  );
};

export default Profile;
