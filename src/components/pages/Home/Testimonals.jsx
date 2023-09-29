import React from "react";
import "./Testimonals.css"; // You can create a separate CSS file for styling

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
      <div className="testimonals-wrapper">
        <div className="card-testimonals">
          <p>
            <img
              className="quotes-image"
              src="/src/assets/img/icons8-quote-left-512.png"
              alt="quotes"
              height="50px"
              width="50px"
            />
            I am very happy with my choice of school for Anshika. I feel proud as a father to see the emerging talents in my daughter. I would like to thank all the teachers for their hardwork & constant dedication to keep parents updated & informed during these challenging times. 
Strong leadership is the foundation of a school's success & without the Sr. Principal, Mrs. Anmol Badjatia Ma'am it would not been possible.                  
We feel proud & fortunate to have Anmol Ma'am as the Sr. Principal of the school.  Ma’am has balanced the school so well during these rapidly changing times.
Thanks to "Little Jewels" for providing a great learning system to all the students.
          </p>
          <section className="parents-corner">
            <h2 className="parents-review">
              {/* <div className="border-style"></div> */}
              <p className="parents-name">Rohit Sharma</p>
            </h2>
          </section>
        </div>
      </div>
    </>
  );
}

export default Testimonals;
