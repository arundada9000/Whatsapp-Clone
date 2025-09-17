import React, { useState, useEffect } from "react";
import CallLogSkeleton from "../Skeletons/CallLogSkeleton";
import { VscCallIncoming } from "react-icons/vsc";
import { VscCallOutgoing } from "react-icons/vsc";

const UserCalls = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/CallsData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CallLogSkeleton />;
  if (error) return <h1>Error occurred while fetching data !</h1>;
  if (data.length === 0) return <h1>No calls to show </h1>;

  return (
    <div className="flex flex-col py-3">
      {data.map((message) => {
        const { id, src, name, date, status } = message;

        return (
          <div
            key={id}
            className="flex gap-3 items-center hover:bg-[rgba(58,58,58,255)] rounded-lg py-3 px-3 cursor-pointer text-sm flex-1"
          >
            <div className="flex items-center justify-center flex-shrink-0">
              <img
                src={src}
                alt={name}
                className="h-[50px] w-[50px] rounded-full "
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between flex-grow">
                <div className="text-md font-semibold">{name}</div>
                <div>{date}</div>
              </div>
              <div className="flex items-center gap-1 overflow-hidden">
                <div
                  className={`text-sm flex-1 max-w-[200px] flex items-center capitalize gap-2
                ${
                  status === "missed"
                    ? "text-[rgba(255,153,164,255)]"
                    : "text-gray-400"
                }
                `}
                >
                  {status === "incoming" ? (
                    <VscCallIncoming
                      style={{ fontSize: "14px", color: "white" }}
                    />
                  ) : status === "missed" ? (
                    <VscCallOutgoing
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,153,164,255)",
                      }}
                    />
                  ) : (
                    <VscCallOutgoing
                      style={{ fontSize: "14px", color: "white" }}
                    />
                  )}
                  {status}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCalls;
