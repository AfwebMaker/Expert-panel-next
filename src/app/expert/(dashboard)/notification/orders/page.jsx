'use client'

import React, { useEffect, useState } from 'react'
//components
import NotificationHeader from '../_components/NotificationHeader'
import NotificationMain from '../_components/NotificationMain'
//services
import newNotification from '/src/services/notification_kg_local/newNotification'
import oldNotification from '/src/services/notification_kg_local/oldNotification'
//components
import Loading from "/src/app/_components/Loading";

function Page() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [newNotifications, setNewNotification] = useState([])
  const [oldNotifications, setOldNotification] = useState([])
  const [readAll, setReadAll] = useState(false)
  const [oldEmpty, setOldEmpty] = useState(false)

  //get new notification 
  useEffect(() => {
    newNotification()
      .then((res) => {
        const getNewNotification = res.data.data.results.filter((item) => {
          if (item.tab === 0) {
            return item
          }
        })
        !getNewNotification.length && setReadAll(true)
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
        const getOldNotification = res.data.data.results.filter((item) => {
          if (item.tab === 0) {
            return item
          }
        })

        !getOldNotification.length && setOldEmpty(true)
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
      <div className="w-full min-h-[400px] pb-[80px] lg:pb-0 h-[calc(100vh-180px)] md:h-[calc(100vh-454px)] lg:h-[calc(100vh-342px)] xl:h-[calc(100vh-152px)] rounded-lg bg-[#F8F9F9] flex flex-col items-center justify-start relative">
        <NotificationHeader readAll={readAll} setReadAll={setReadAll} />
        <NotificationMain
          readAll={readAll}
          newNotifications={newNotifications}
          oldNotifications={oldNotifications}
          oldEmpty={oldEmpty}
        />
      </div>
    </>
  )
}

export default Page