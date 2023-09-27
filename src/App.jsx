import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contact, Home, Academics, BadjateGroup } from "./components/pages";
import Footer from "./components/Footer";
import TeamImage from "./components/pages/About_Us/Teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/badjate-group" element={<BadjateGroup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
