import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, LandingPage, Page404, Profile } from "./pages";

function App() {

  let routePath = [
    { path: "/", element: <LandingPage /> },
    { path: "/profile", element: <Profile /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <Page404 /> },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routePath.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <Route path={val.path} element={val.element} />
              </React.Fragment>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
