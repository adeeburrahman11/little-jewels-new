import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonals.css";

function Testimonals() {
  return (
    <>
      <div>
        <h1 className="main-heading__testimonals">Testimonials</h1>
        <img
          className="testimonals-shadow"
          src="/About_Us_Images/Testimonials_Images/icons8-quote-left-480.png"
          alt="quotes"
          height="80px"
          width="80px"
        />
      </div>
      <div className="testimonals-wrapper">
      <div className="carousel-container">
        <Carousel
          autoPlay
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          emulateTouch
          showStatus={false}
        >
          <div className="card-testimonals">
            <p>
              I am very happy with my choice of school for Anshika. I feel proud
              as a father to see the emerging talents in my daughter. I would
              like to thank all the teachers for their hardwork & constant
              dedication to keep parents updated & informed during these
              challenging times. Strong leadership is the foundation of a
              school's success & without the Sr. Principal, Mrs. Anmol Badjatia
              Ma'am it would not have been possible. We feel proud & fortunate
              to have Anmol Ma'am as the Sr. Principal of the school. Ma’am has
              balanced the school so well during these rapidly changing times.
              Thanks to "Little Jewels" for providing a great learning system to
              all the students.
            </p>
            <section className="parents-corner">
              <h2 className="parents-review">
                <p className="parents-name">Mr. Sunil Choudhary</p>
              </h2>
            </section>
            <h4 className="parents-name__description">
              Father of Anshika Choudhary – L.KG.(2019-20)
            </h4>
          </div>
          <div className="card-testimonals">
            <p>
              I have been associated with Little Jewels Kindergarten since 2016
              when my elder daughter, Mishka Singh took admission in U.KG. and
              now my son is studying in this school. I want to say that I am
              very happy and satisfied to get my kids admitted at Little Jewels
              Kindergarten. I must say that the administration of the school
              handles each query of all the parents very well. Also, kudos to
              all the teachers for their patience and co-operation they show
              during the online classes. Thanking You!
            </p>
            <section className="parents-corner">
              <h2 className="parents-review">
                <p className="parents-name">Mrs. Kamini Singh</p>
              </h2>
            </section>
            <h4 className="parents-name__description">
              Mother of Kavish Singh – L.KG.(2019-20)
            </h4>
          </div>
          <div className="card-testimonals">
            <p>
              My son has been part of the kindergarten since Pre-Nursery. I am
              very happy with the way he is being brought up by the school. The
              dedication that the teachers put in to ensure that the child is
              thorough with the concepts is amazing. A well balanced curriculum
              ensures the children are not only well educated but well mannered
              and grounded as well. A big thumbs up to the complete team of
              little jewels.
            </p>
            <section className="parents-corner">
              <h2 className="parents-review">
                <p className="parents-name">Mr. Siddharth Samel</p>
              </h2>
            </section>
            <h4 className="parents-name__description">
              Father of Riyansh Samel -L.KG. (2020-21)
            </h4>
          </div>
          <div className="card-testimonals">
            <p>
              I am really happy with the progress my child is making at Little
              Jewels. All the teachers are lovely and always there to help. I
              could not think of a better kindergarten for my child. Thank you
              Little Jewels family.
            </p>
            <section className="parents-corner">
              <h2 className="parents-review">
                <p className="parents-name">Mr. Karan Atlani</p>
              </h2>
            </section>
            <h4 className="parents-name__description">
              Father of Ved Atlani – U.KG. (2020-21)
            </h4>
          </div>
        </Carousel>
        </div>
      </div>
    </>
  );
}

export default Testimonals;
