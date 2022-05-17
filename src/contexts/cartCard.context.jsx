import { createContext, useState, useEffect } from "react";

export const CartCardContext = createContext();

export const CartCardProvider = ({ children }) => {
  return <CartCardContext.Provider></CartCardContext.Provider>;
};
