import "./Testimonals.css";

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
  easing: "ease-in", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

function Testimonals() {
  return (
    <>
      <div>
        <h1 className="main-heading__testimonals">Testimonals</h1>
        <img
          className="testimonals-shadow"
          src="/src/assets/img/icons8-quote-left-480.png"
          alt="quotes"
          height="80px"
          width="80px"
        />
      </div>
      <div className="testimonals-wrapper" data-aos="slide-up">
        <div className="card-testimonals">
          <p>
            <img
              className="quotes-image"
              src="/src/assets/img/icons8-quote-left-512.png"
              alt="quotes"
              height="50px"
              width="50px"
            />
            I am very happy with my choice of school for Anshika. I feel proud
            as a father to see the emerging talents in my daughter. I would like
            to thank all the teachers for their hardwork & constant dedication
            to keep parents updated & informed during these challenging times.
            Strong leadership is the foundation of a school's success & without
            the Sr. Principal, Mrs. Anmol Badjatia Ma'am it would not been
            possible. We feel proud & fortunate to have Anmol Ma'am as the Sr.
            Principal of the school. Ma’am has balanced the school so well
            during these rapidly changing times. Thanks to "Little Jewels" for
            providing a great learning system to all the students.
          </p>
          <section className="parents-corner">
            <h2 className="parents-review">
              {/* <div className="border-style"></div> */}
              <p className="parents-name">Mr. Sunil Choudhary</p>
            </h2>
          </section>
          <h4 className="parents-name__description">
            Father of Anshika Choudhary – L.KG.(2019-20)
          </h4>
        </div>
      </div>
    </>
  );
}

export default Testimonals;
