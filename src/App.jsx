import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contact, Home, Academics, BadjateGroup } from "./components/pages";
import Footer from "./components/Footer";
import VisionMission from "./components/pages/About_Us/VisionMission";
import Teams from"./components/pages/About_Us/Teams";
import Director from "./components/pages/About_Us/Director";
import Management from "./components/pages/About_Us/Management";
import EventGallery from "./components/pages/Gallery/EventGallery";
import CelebrationsGalary from "./components/pages/Gallery/CelebrationsGalary";
import AchievementsGallery from "./components/pages/Gallery/AchievementsGallery";
import MediaCoverageGallery from "./components/pages/Gallery/MediaCoverageGallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about/vision&mission" element={<VisionMission />} />
        <Route path="/about/director-message" element={<Director />} />
        <Route path="/about/management" element={<Management />} />
        <Route path="/about/teams" element={<Teams />} />
        {/* <Route path="/" element={<Testimonials />} /> */}
        <Route path="/gallery/events" element={<EventGallery />} />
        <Route path="/gallery/celebrations" element={<CelebrationsGalary />} />
        <Route path="/gallery/achievements" element={<AchievementsGallery />} />
        <Route path="/gallery/media" element={<MediaCoverageGallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/badjate-group" element={<BadjateGroup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
