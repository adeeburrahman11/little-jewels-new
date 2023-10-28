import "./Program.css";
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

const App = () => {
  return (
    <div className="outer-container">
      <div className="header" data-aos="slide-up" data-aos-once="false">
        <h1>Programs</h1>
        <div className="paragraph">
          <p>
            Our program is designed for the holistic development of the child.
            We have developed an excellent hands on and relevant curriculum for
            each level of the kindergarten. We have the below programs which the
            children can enrol in.
          </p>
        </div>
      </div>
      <div className="cardsection">
        <div className="card-1" data-aos="slide-up" data-aos-once="false">
          <img
            src="/Home_Program_Images/Pre nursery.png"
            alt="image not loaded"
          />
          <h1>Pre - Nursery</h1>
          <p>
            Age : 2+ <br />
            Children born on or <br /> before 30th <br />
            December, 2022
          </p>
          <button className="program-button" type="button">
            <a
              className="program-enquire_form"
              href="https://forms.gle/cCGiAVJvvatmPAv3A"
            >
              Enroll
            </a>
          </button>
        </div>
        <div className="card-2" data-aos="slide-up">
          <img src="/Home_Program_Images/Nursery.png" alt="" />
          <h1>Nursery</h1>
          <p>
            Age : 3+ <br />
            Children born on or <br /> before 30th <br />
            December, 2021
          </p>
          <button className="program-button" type="button">
            <a
              className="program-enquire_form"
              href="https://forms.gle/cCGiAVJvvatmPAv3A"
            >
              Enroll
            </a>
          </button>
        </div>
        <div className="card-3" data-aos="slide-up">
          <img src="/Home_Program_Images/LKG.png" alt="" />
          <h1>Lower Kindergarten</h1>
          <p>
            Age : 4+ <br />
            Children born on or <br /> before 30th <br />
            December, 2020
          </p>
          <button className="program-button" type="button">
            <a
              className="program-enquire_form"
              href="https://forms.gle/cCGiAVJvvatmPAv3A"
            >
              Enroll
            </a>
          </button>
        </div>
        <div className="card-4" data-aos="slide-up">
          <img src="/Home_Program_Images/UKG.png" alt="" />
          <h1>Upper Kindergarten</h1>
          <p>
            Age : 5+ <br />
            Children born on or <br /> before 30th <br />
            December, 2019
          </p>
          <button className="program-button" type="button">
            <a
              className="program-enquire_form"
              href="https://forms.gle/cCGiAVJvvatmPAv3A"
            >
              Enroll
            </a>
          </button>
        </div>

        <div className="card-5" data-aos="slide-up">
          <img src="/Home_Program_Images/STD 1.png" alt="" />
          <h1>Grade 1</h1>
          <p>
            Age : 6+ <br />
            Children born on or <br /> before 30th <br />
            December, 2018
          </p>
          <button className="program-button" type="button">
            <a
              className="program-enquire_form"
              href="https://forms.gle/cCGiAVJvvatmPAv3A"
            >
              Enroll
            </a>
          </button>
        </div>
        {/* <button className='button-end' type='button'>Learn More</button> */}
      </div>
      {/* <img className='image-13' src="../../../Home_Program_Images/object1.png" alt="image not found" />
            <img className='image-23' src="../../../Home_Program_Images/object2.png" alt="image not found" /> */}
    </div>
  );
};

export default App;
