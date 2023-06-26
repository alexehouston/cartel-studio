import { useState } from 'react'
import Nav from "../Nav/Nav";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App vw-100 vh-100 bg-black text-white">
      <Nav setCurrentPage={setCurrentPage} />
      {currentPage === "services" ? (
        <Services />
      ) : currentPage === "about" ? (
        <About />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : (
        <div className="container-fluid h-75 bg-light align-items home-banner p-0">
          <video autoPlay muted loop>
            <source src="/assets/home-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <Footer />
    </div>
  );
}
