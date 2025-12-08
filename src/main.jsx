import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { ThemeProvider } from "./context/ThemeContext";

import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  return (
    <div className="bg-background text-text font-sans antialiased selection:bg-primary selection:text-white">
      <ScrollProgress />
      <Header />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
