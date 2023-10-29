import { Fragment, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    exp: "",
    location: "",
    dob: "",
    city: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value, type } = target;

    if (type === "file") {
      setForm({
        ...form,
        [name]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // template_mwqy8qp
    // service_urfm8ub
    // okmrvHxnuIgLXn4Zr  public key

    emailjs
      .send(
        "service_d7fd5vg",
        "template_y2s8uql",
        {
          from_name: form.name,
          to_name: "Little Jewels",
          from_email: form.email,
          to_email: "littlejewelsadmissions@gmail.com",
          name: form.name,
          number: form.number,
          email: form.email,
          exp: form.exp,
          location: form.location,
          dob: form.dob,
          city: form.city,
        },
        "veuW8ypXzNU4cSONL"
      )
      .then(
        () => {
          alert(
            "Message sent successfully || Little Jweles will contact you soon"
          );

          setForm({
            name: "",
            number: "",
            email: "",
            exp: "",
            location: "",
            dob: "",
            city: "",
          });
        },
        (error) => {
          console.log(error);
          alert("From your side it is wrong check it again");
        }
      );
  };

  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const toggleForm1 = () => {
    setShowForm1(!showForm1);
  };

  const toggleForm2 = () => {
    setShowForm2(!showForm2);
  };

  return (
    <Fragment>
      <div className="contact-container">
        <h1>CAREERS</h1>
        <div className="contact-card-container">
          <div className="contact-card">
            <div className="heading">
              <p>Position: Admission Counselor</p>
            </div>
            {showForm1 ? (
              <div className="apply-form">
                <h2>Apply for Admission Counselor</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="number"
                      value={form.number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Total Experience"
                      name="exp"
                      value={form.exp}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Current Location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      placeholder="DOB"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    style={{ border: "1px solid black", padding: "0.5rem" }}
                    className="form-group"
                  >
                    <a
                      style={{ textDecoration: "none", color: "red" }}
                      href="https://forms.gle/rzBZ6iHXoADLkqWF8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Upload your Resume Here
                    </a>
                  </div>

                  <button type="submit">Submit</button>
                </form>
                <button onClick={toggleForm1} className="close-button">
                  Close
                </button>
              </div>
            ) : (
              <>
                <ul className="points">
                  <li>
                    Graduate/Post Graduate with a good command over English and
                    Computer Knowledge.
                  </li>
                  <li>Having experience in the same will be preferred.</li>
                  <li>Only Female preferred.</li>
                  <li>Handling Admission inquiries.</li>
                  <li>Counseling parents w.r.t admissions.</li>
                  <li>
                    Reporting to the management and principal w.r.t admissions.
                  </li>
                  <li>Planning & Implementing marketing strategies.</li>
                </ul>
                <button onClick={toggleForm1} className="apply-button1">
                  Apply
                </button>
              </>
            )}
          </div>
          <div className="contact-card">
            <div className="heading">
              <p>Position: Administrative Officer</p>
            </div>
            {showForm2 ? (
              <div className="apply-form">
                <h2>Apply for Administrative Officer</h2>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Total Experience" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Current Location" />
                  </div>
                  <div className="form-group">
                    <input type="date" placeholder="DOB" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="City" />
                  </div>
                  <div
                    style={{ border: "1px solid black", padding: "0.5rem" }}
                    className="form-group"
                  >
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="https://forms.gle/rzBZ6iHXoADLkqWF8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Upload your Resume Here
                    </a>
                  </div>
                  <button type="submit">Submit</button>
                </form>
                <button onClick={toggleForm2} className="close-button">
                  Close
                </button>
              </div>
            ) : (
              <>
                <ul className="points">
                  <li>Education Qualification: Graduate</li>
                  <li>
                    Experience: 2-3 years in Administration (Preferably in
                    Educational Institute)
                  </li>
                  <li>All Admin related tasks of the School.</li>
                  <li>Housekeeping and Upkeep In-charge.</li>
                  <li>Mess In-charge.</li>
                </ul>
                <button onClick={toggleForm2} className="apply-button2">
                  Apply
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
