import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/home/homepage";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
