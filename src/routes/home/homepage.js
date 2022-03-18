import React from "react";
import Directory from "../../components/directory/directory";
import "./homepage.scss";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
}
