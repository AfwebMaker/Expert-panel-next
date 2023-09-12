"use client";

import { SessionProvider } from "next-auth/react";

function ReduxProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default ReduxProvider;