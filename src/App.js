// React Util
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// JSX Elements
import { Header } from "./containers";
import { Home, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
