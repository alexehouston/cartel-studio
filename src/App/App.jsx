import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App vw-100 vh-100 bg-black text-white">
      <Nav />
      <div className="container-fluid position-absolute top-0 vh-100 d-flex justify-content-center align-items-center p-0 m-0 pt-5">
        <div className="container-fluid h-75 bg-light align-items home-banner p-0">
          <video autoPlay muted loop>
            <source src="/assets/home-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
}
