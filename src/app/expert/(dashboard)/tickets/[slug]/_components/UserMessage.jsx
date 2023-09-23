import React from "react";

function UserMessage({ id, isSender, userSupport, userName, message }) {
  const isUserName = userSupport || userName;
  // console.log(Boolean(isUserName))

  const text = message;
  console.log(text);

  return (
    <li
      className={`w-full bg-blue-200 py-2 mb-2 flex items-center ${
        isSender ? "justify-start" : "justify-end"
      }`}
      key={id}
    >
      <div className="w-[50%] max-w-[50%] h-auto p-5 bg-cyan-500">
        {isUserName ? <h2 className="bg-red-300 w-full flex">joooon</h2> : null}
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
        >
          
        </div>
      </div>
    </li>
  );
}

export default UserMessage;
