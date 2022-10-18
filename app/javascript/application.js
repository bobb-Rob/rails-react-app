// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Static page</div>}/>
        <Route path="/greetings" element={<Greeting />}/>
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'),
);