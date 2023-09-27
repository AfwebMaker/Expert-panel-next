import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div
        className={`h-full ${
          progress === 100 ? "bg-green-500" : "bg-orange-500"
        } rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
