import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import reportWebVitals from "./reportWebVitals";
import HeroSection from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import PerformanceSchedule from "./components/PerformanceSchedule";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <AboutMe />
    <PerformanceSchedule />
    <Clients />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
