import React from "react";
//components
import StickyElement from './StickyElement'
import Notification from './Notification'

function NotificationMain() {
  return (
    <div className="overflow-y-scroll hideScroll w-full h-full flex flex-col">
      {[0, 1, 2, 3, 4, 5, 6].map(() => (
        <Notification />
      ))}

      <StickyElement />

      {[0, 1, 2, 3, 4, 5, 6].map(() => (
        <Notification />
      ))}
    </div>
  );
}

export default NotificationMain;
