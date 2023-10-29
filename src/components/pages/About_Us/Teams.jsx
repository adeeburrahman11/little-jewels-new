import React from "react";
import "./Teams.css";

function TeamImage() {
  return (
    <>
      <div className="teams">
        <header className="App-header-Teams">
          <h1>Team Little Jewels</h1>
        </header>
        <main className="team-main">
          <div className="team-image-container">
            <img src="/About_Us_Images/Team_Little_Jewels_Images/tljewels.jpg" alt="Team" className="team-image" />
          </div>
        </main>
      </div>
    </>
  );
}

export default TeamImage;
