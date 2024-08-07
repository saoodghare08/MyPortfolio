import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/MyPortfolio/" element={<HomePage />} />
        <Route path="/MyPortfolio/about" element={<About />} />
        <Route path="/MyPortfolio/projects" element={<Project />} />
        <Route path="/MyPortfolio/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/MyPortfolio/contact" && <Socials />}
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
