import React from "react";
import "./App.css";
import "./styles/karibo.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KariboPitchPage from "./components/KariboPitch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KariboPitchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
