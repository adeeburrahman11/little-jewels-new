import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Academics, BadjateGroup } from "./components/pages";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import VisionMission from "./components/pages/About_Us/VisionMission";
import Teams from "./components/pages/About_Us/Teams";
import Director from "./components/pages/About_Us/Director";
import Management from "./components/pages/About_Us/Management";
import Video from "./components/pages/Gallery/Video";
import EventGallery from "./components/pages/Gallery/EventGallery";
import CelebrationsGalary from "./components/pages/Gallery/CelebrationsGalary";
import AchievementsGallery from "./components/pages/Gallery/AchievementsGallery";
import MediaCoverageGallery from "./components/pages/Gallery/MediaCoverageGallery";
import Program from "./components/pages/programcomponent/Program";
import "./App.css";
import SportsAndWellness from "./components/pages/Gallery/SportsAndWellness";
import ScrollToTop from "./components/ScrollToTop";
import Admission from "./components/pages/Admission/Admission";
import MediaLinks from "./components/pages/Media_Links/MediaLinks"
import { Toaster } from "react-hot-toast"; // for notification don't remover updated HH

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about/vision&mission" element={<VisionMission />} />
        <Route path="/about/director-message" element={<Director />} />
        <Route path="/about/management" element={<Management />} />
        <Route path="/about/teams" element={<Teams />} />
        <Route path="/gallery/video" element={<Video />} />
        <Route path="/gallery/events" element={<EventGallery />} />
        <Route path="/gallery/celebrations" element={<CelebrationsGalary />} />
        <Route path="/gallery/achievements" element={<AchievementsGallery />} />
        <Route
          path="/gallery/sportsandwellness"
          element={<SportsAndWellness />}
        />
        <Route path="/gallery/media" element={<MediaCoverageGallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission/enquiry-form" element={<Admission />} />
        <Route path="/admission/admission-guidelines" element={<Program />} />
        <Route path="/badjate-group" element={<BadjateGroup />} />
        <Route path="/program" element={<Program />} />
      </Routes>
      <MediaLinks />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
