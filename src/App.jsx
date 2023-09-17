import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  About,
  Contact,
  Home,
  Academics,
  Gallery,
  BadjateGroup,
} from "./components/pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/badjate-group" element={<BadjateGroup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
