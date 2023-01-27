import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import Openings from "./components/Openings";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Main />
                <Info />
                <Openings/>
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
