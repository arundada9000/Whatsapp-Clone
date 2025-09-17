import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CallLogSkeleton = () => {
  return (
    <div className="flex flex-col py-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex gap-3 items-center hover:bg-[rgba(58,58,58,255)] rounded-lg py-3 px-3 cursor-pointer text-sm flex-1"
        >
          {/* Avatar */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Skeleton circle height={50} width={50} />
          </div>

          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Name and Time */}
            <div className="flex items-center justify-between flex-grow">
              <Skeleton width={120} height={18} />
              <Skeleton width={60} height={14} />
            </div>

            {/* Status Line */}
            <div className="flex items-center gap-1 overflow-hidden mt-1">
              <Skeleton width={100} height={14} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallLogSkeleton;
