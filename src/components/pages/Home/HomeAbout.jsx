import "./HomeAbout.css";
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

export const HomeAbout = () => {
  return (
    <div className="about-main">
      <h1 className="about-heading">About Us</h1>
      <div
        className="about-container"
        data-aos="slide-up"
        data-aos-once="false"
      >
        <div className="image-container">
          <img src="/Home_Images/LJK image.jpg" />
        </div>
        <div className="text-container">
          <p>
            Little Jewels Kindergarten is a feeder Kindergarten of The Jain
            International School, Nagpur. It is among the leading kindergartens
            of Nagpur and is a place where children learn, play and grow. It's
            not just a kindergarten but a home, full of love and affection to
            ensure the physical, mental, emotional, cognitive and social
            development of every young mind.
          </p>
        </div>
      </div>
      <div
        className="about-container1"
        data-aos="slide-up"
        data-aos-once="false"
      >
        <div className="image-container1">
          <img src="/Home_Images/DSC02766.JPG" />
        </div>
        <div className="text-container1">
          <p>
            Our aim is to encourage children to be self-disciplined, innovative,
            caring, tolerant, honest and friendly all the while providing a
            secure and happy learning environment to the children.
          </p>
        </div>
      </div>
    </div>
  );
};
