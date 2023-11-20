"use client"
import React, { useEffect, useState } from 'react'
//components
import MasterTicket from "./MasterTicket"
import Loading from "/src/app/_components/Loading"
// services
import fetchTickets from "/src/services/ticket_kg_local/fetchTickets";


function MobileTickets() {
  const [dataTickets, setDataTickets] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);


  useEffect(() => {
    fetchTickets()
      .then((res) => {
        setDataTickets(res.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, []);

  return (
    <>
      {loadingPage && <Loading />}
      <MasterTicket navigationData={dataTickets} />
    </>
  )
}

export default MobileTickets