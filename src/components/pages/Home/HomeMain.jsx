import { useNavigate } from "react-router-dom";
import "./HomeMain.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

export const HomeMain = () => {
  const navigate = useNavigate();

  const handleexplore = () => {
    navigate("/academics");
  };

  const handleenquire = () => {
    navigate("/program");
  };

  return (
    <div className="home">
      <div className="section">
        <div className="main-txt" data-aos="slide-right" data-aos-once="false">
          <p>
            LITTLE <span className="change">JEWELS</span> KINDERGARTEN
          </p>
          A Feeder Kindergarten of The Jain International School, Nagpur
          <div className="btns">
            <button onClick={handleexplore}>E x p l o r e</button>
            <button onClick={handleenquire}>E n q u i r e&nbsp; N o w</button>
          </div>
        </div>
        <div className="box-img" data-aos="slide-left">
          <img src="/Home_Images/Kids4.png" alt="" width={"200px"} />
        </div>
      </div>
    </div>
  );
};
