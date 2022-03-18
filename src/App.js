import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/home/homepage";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sing-in";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
