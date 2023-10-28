import React, { useEffect, useRef, useState } from "react";
//components
import StickyElement from './StickyElement'
import Notification from './Notification'
//services
import newNotification from '@/services/notification_kg_local/newNotification'
import oldNotification from '@/services/notification_kg_local/oldNotification'
import Loading from "@/src/app/_components/Loading";

function NotificationMain({ readAll }) {
  const [loadingPage, setLoadingPage] = useState(true)
  const [newNotifications, setNewNotification] = useState([
    {
      "id": 5,
      "userId": 5,
      "title": "string",
      "body": "string",
      "isSeen": false,
      "hidden": false,
      "icon": "string",
      "action": 0,
      "tab": 0,
      "style": 0,
      "resources": [
        {
          "id": 4,
          "notificationId": 5,
          "resource": "string",
          "data": "string"
        }
      ]
    },
    {
      "id": 4,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 2,
      "tab": 3,
      "style": 0,
      "resources": []
    },
    {
      "id": 3,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 0,
      "tab": 2,
      "style": 0,
      "resources": [
        {
          "id": 3,
          "notificationId": 3,
          "resource": "deputy",
          "data": "5"
        }
      ]
    },
    {
      "id": 2,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 1,
      "tab": 1,
      "style": 0,
      "resources": [
        {
          "id": 2,
          "notificationId": 2,
          "resource": "ticket",
          "data": "5"
        }
      ]
    },
    {
      "id": 1,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 0,
      "tab": 0,
      "style": 0,
      "resources": [
        {
          "id": 1,
          "notificationId": 1,
          "resource": "order",
          "data": "5"
        }
      ]
    }
  ])
  const [oldNotifications, setOldNotification] = useState([
    {
      "id": 5,
      "userId": 5,
      "title": "string",
      "body": "string",
      "isSeen": false,
      "hidden": false,
      "icon": "string",
      "action": 0,
      "tab": 0,
      "style": 0,
      "resources": [
        {
          "id": 4,
          "notificationId": 5,
          "resource": "string",
          "data": "string"
        }
      ]
    },
    {
      "id": 4,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 2,
      "tab": 3,
      "style": 0,
      "resources": []
    },
    {
      "id": 3,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 0,
      "tab": 2,
      "style": 0,
      "resources": [
        {
          "id": 3,
          "notificationId": 3,
          "resource": "deputy",
          "data": "5"
        }
      ]
    },
    {
      "id": 2,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 1,
      "tab": 1,
      "style": 0,
      "resources": [
        {
          "id": 2,
          "notificationId": 2,
          "resource": "ticket",
          "data": "5"
        }
      ]
    },
    {
      "id": 1,
      "userId": 5,
      "title": "تست نوتیفیکیشن",
      "body": "بدنه و اینا",
      "isSeen": false,
      "hidden": false,
      "icon": "fa-user",
      "action": 0,
      "tab": 0,
      "style": 0,
      "resources": [
        {
          "id": 1,
          "notificationId": 1,
          "resource": "order",
          "data": "5"
        }
      ]
    }
  ])
  const scrollBox = useRef(null)

  //when read all new notification scroll top
  useEffect(() => {
    readAll && scrollBox.current &&
      (scrollBox.current.scrollTop = 0)
  }, [readAll])

  //get new notification 
  useEffect(() => {
    newNotification()
      .then((res) => {
        console.log(res.data.data.results)
        const getNewNotification = res.data.data.results.map((item) => {
          if (item.tab === 1) {
            return item
          }
        })
        setNewNotification(getNewNotification)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  //get old notification 
  useEffect(() => {
    oldNotification()
      .then((res) => {
        console.log(res.data.data.results)
        const getOldNotification = res.data.data.results.map((item) => {
          if (item.tab === 1) {
            return item
          }
        })
        setOldNotification(getOldNotification)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  return (
    <>
      {loadingPage && <Loading />}
      <div ref={scrollBox} className="overflow-y-scroll hideScroll w-full h-full flex flex-col scroll-smooth">
        {newNotifications.map((item) => (
          <Notification
            key={item.id}
            title={item.title}
            icon={item.icon}
            body={item.body}
            resources={item.resources}
          />
        ))}

        {!readAll && <StickyElement />}

        {oldNotifications.map((i) => (
          <Notification key={i} />
        ))}
      </div>

    </>
  );
}

export default NotificationMain;
