"use client";
import React, { createContext } from "react";
import { accountId } from "./getUserId";

export const UserContext = createContext();

export const UserLoggedProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ accountId }}>
      {children}
    </UserContext.Provider>
  );
};
