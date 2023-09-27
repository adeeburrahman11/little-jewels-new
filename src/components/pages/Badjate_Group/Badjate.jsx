import React from "react";
import "./Badjate.css";

class Badjate extends React.Component {
  openWebsite(url) {
    window.open(url, "_blank"); // Open the website in a new tab/window
  }

  render() {
    return (
      <>
        <div className="main-outline-Badjate">
          <div className="head-Badjate">
            <h1>THE BADJATE GROUP </h1>
            <p className="shadow-Badjate">THE BADJATE GROUP</p>
          </div>
          <div className="body">
          <div className="content-Badjate">
            <p>
              The group launched it's financial services over 50 years ago with
              Badjate Stock and Shares Pvt. Ltd. Our Educational institutions
              commenced in 2006 with Jain International School, Nagpur (A CBSE
              School) followed by S.B. Jain Institute of Management, Research &
              Technology, Nagpur in 2008 and Little Jewels Kindergarten in 2010.
              (A Feeder Kindergarten of Jain International School)
            </p>
          </div>
          <hr />
          <br />
          <div className="sub-head-Badjate">
            <h1>FINANCIAL SERVICES </h1>
          </div>
          <div className="image-container-Badjate">
            <img
              src="/images/badjate.jpg"
              alt="Badjate Group"
              onClick={() => this.openWebsite("https://www.badjategroup.com/")}
              className="image-Badjate"
            />
            <div className="sub-content-Badjate">
              <p>Badjate Stock and Shares Pvt. Ltd.</p>
            </div>
          </div>
          <br />
          <br />
          <div className="sub-head-Badjate">
            <h1>EDUCATION </h1>
          </div>
          <div className="education-Badjate">
          <div className="images-container-Badjate">
            <img
              src="/images/logo.png"
              alt="Badjate Group-Logo"
              onClick={() =>
                this.openWebsite("https://littlejewelsnagpur.in/group.php#")
              }
              className="images-Badjate"
            />
            <div className="sub-content-Badjate">
              <p>Little Jewels Kindergarten, Nagpur</p>
            </div>
          </div>
          <div className="images-container-Badjate">
            <img
              src="/images/jis.png"
              alt="Badjate Group"
              onClick={() =>
                this.openWebsite("https://www.jaininternationalnagpur.edu.in/")
              }
              className="images-Badjate"
            />
            <div className="sub-content-Badjate">
              <p>Jain International School, Nagpur</p>
            </div>
          </div>
          <div className="images-container-Badjate">
            <img
              src="/images/sbjain-alt.png"
              alt="Badjate Group"
              onClick={() => this.openWebsite("https://www.sbjit.edu.in/")}
              className="images-Badjate"
            />
            <div className="sub-content-Badjate">
              <p>S.B. Jain Institute of Technology</p>
              <p>Management & Research, Nagpur</p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Badjate;
