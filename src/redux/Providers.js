"use client";

import { Provider } from "react-redux"
import store from "./store"
//toast 
import { Toaster } from 'react-hot-toast';

function Providers({ children }) {
  return (
    <>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </>
  )
}

export default Providers