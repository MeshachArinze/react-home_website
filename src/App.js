import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Home />
      <Service />
      <ContactForm />
      <ImageChangeOnMouseOver />
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

