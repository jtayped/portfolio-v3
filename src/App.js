// React Util
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// JSX Elements
import { Header } from "./containers";
import { Home, NotFound, About, Portfolio, Contact } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
