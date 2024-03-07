import React from "react";
import "./App.css";
import { Menu } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Page404, Profile } from "./pages";

function App() {
  let routePath = [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },

    { path: "*", element: <Page404 /> },
  ];
  return (
    <div className="App">
      {/* new version switch is change to routes */}
      <BrowserRouter>
        <Menu />
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
