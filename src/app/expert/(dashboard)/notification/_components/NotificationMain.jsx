import React, { useEffect, useRef } from "react";
//components
import StickyElement from './StickyElement'
import Notification from './Notification'

function NotificationMain({ readAll }) {
  const scrollBox = useRef(null)
  
  //when read all new notification scroll top
  useEffect(() => {
    readAll && scrollBox.current &&
      (scrollBox.current.scrollTop = 0)
  }, [readAll])

  return (
    <div ref={scrollBox} className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth">
      {[0, 1, 2].map(() => (
        <Notification />
      ))}

      {!readAll && <StickyElement />}

      {[0, 1, 2, 3, 4, 5, 6].map(() => (
        <Notification />
      ))}
    </div>
  );
}

export default NotificationMain;
