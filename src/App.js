import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, LandingPage, Page404, ProductDetail, Profile, SignUpPage, Wishlist } from "./pages";

function App() {

  let routePath = [
    { path: "/", element: <LandingPage /> },
    { path: "/profile", element: <Profile /> },
    { path: "/home", element: <Home /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "*", element: <Page404 /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/product-detail/:id", element: <ProductDetail /> },


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
