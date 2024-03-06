import React from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages";

function App() {
  let routePath = [{ path: "/", element: <Home /> }];
  return (
    <div className="App">
      <Header />
      {/* new version switch is change to routes */}
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
