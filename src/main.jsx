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
        <Route path="/Testing/" element={<HomePage />} />
        <Route path="/Testing/about" element={<About />} />
        <Route path="/Testing/projects" element={<Project />} />
        <Route path="/Testing/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/Testing/contact" && <Socials />}
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
