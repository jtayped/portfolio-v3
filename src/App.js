// React Util
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// JSX Elements
import { Header } from "./containers";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
