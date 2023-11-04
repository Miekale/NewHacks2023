import App from "./components/App";
import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
  
const root = createRoot(document.getElementById('app'));

function AppRouter() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<App />} />
          {/* TODO: move below to user checking routes */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(
  <React.StrictMode>
    <AppRouter />
    {/* <NavBarContainer /> */}
  </React.StrictMode>
);


  