import React from "react";
import "./HomeMain.css";

export const HomeMain = () => {
  return (
    <div className="home">
      <div className="section">
        <div className="main-txt">
          <p>
            LITTLE <span className="change">JEWELS</span> KINDERGARTEN
          </p>
          A Feeder Kindergarten of Jain International School, Nagpur
          <div className="btns">
            <button>E x p l o r e</button>
            <button>E n q u i r e&nbsp; N o w</button>
          </div>
        </div>
        <div className="box-img">
          <img
            src="/src/assets/img/3d-casual-life-couple-walks-with-baby.png"
            alt=""
            width={"200px"}
          />
        </div>
      </div>
    </div>
  );
};
