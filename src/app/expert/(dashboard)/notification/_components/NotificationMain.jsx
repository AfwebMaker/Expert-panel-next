import React, { useEffect, useRef } from "react";
//components
import StickyElement from './StickyElement'
import Notification from './Notification'

function NotificationMain({ readAll, newNotifications, oldNotifications, oldEmpty }) {
  const scrollBox = useRef(null)

  //when read all new notification scroll top
  useEffect(() => {
    readAll && scrollBox.current &&
      (scrollBox.current.scrollTop = 0)
  }, [readAll])

  return (
    <div ref={scrollBox} className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth">
      {newNotifications &&
        newNotifications.map((item) => (
          <Notification
            key={item.id}
            title={item.title}
            icon={item.icon}
            body={item.body}
            action={item.action}
            resources={item.resources}
          />
        ))
      }

      {!(readAll || oldEmpty) && <StickyElement />}

      {oldNotifications &&
        oldNotifications.map((item) => (
          <Notification
            key={item.id}
            title={item.title}
            icon={item.icon}
            body={item.body}
            action={item.action}
            resources={item.resources}
          />
        ))
      }
    </div>
  );
}

export default NotificationMain;
