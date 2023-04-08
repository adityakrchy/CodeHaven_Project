import React from "react";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {
  return (
    // <div>This is dashboard</div>
    <>
      <div className="mainContainer">
        <div className="navContainer">
          <div className="Dashboardlogo">
            <img
              src="/logo_bg_removed.png"
              alt="logo"
              className="DashboardLogoImg"
            />
          </div>
          <div className="profileInfo">
            <img src="/avatar.png" alt="avatar" className="AvatarImg" />
            <div className="userInfo">
              <span className="username">Aditya Kumar</span>
              <span className="useremail">adityakrchy101@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="heroWrapper">
          <div className="heroText">
            <span className="promptHero">Welcome Back, </span>
            <span className="usernameHero">Aditya Kumar</span>
          </div>
          <div className="time">
            <span>Thursday, 9th Feb 2023</span>
          </div>
        </div>
        <div className="centerElement">
          <div className="eventCard">
            <img
              src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
              alt="Img"
            />
            <h2>Practice coding</h2>
            <span>
              Master your programming skills and reach new levels of expertise
              with consistent practice.
            </span>
          </div>
          <div className="eventCard">
            <img
              src="https://cdn.dribbble.com/userupload/2445208/file/original-36e8f98866a8475c749554b2e3cecf95.png?resize=400x300"
              alt="Img"
            />
            <h2>Online IDE</h2>
            <span>
              Empowering you to write, test, and wun your code from a browser
              based environment with easy access to variety of tools and
              resources.
            </span>
          </div>
          <div className="eventCard">
            <img
              src="https://thumbs.dreamstime.com/b/programming-code-technology-logo-vector-template-link-play-unique-device-learn-multimedia-sign-script-html-mobile-net-education-157094146.jpg"
              alt="Img"
            />
            <h2>Collab Together</h2>
            <span>
              Leverage the power of teamwork and real-time collaboration to
              bring coding projects to the next level and drive innovation
              forward.
            </span>
          </div>
        </div>
      </div>
      <div className="secondElement">
        <div className="secondElementGrid">
          <div className="secondElementGridTitle">Recents</div>
          <div className="secondElementCard">1</div>
          <div className="secondElementCard"> 2</div>
          <div className="secondElementCard">3</div>
          <div className="secondElementCard">4</div>
          <div className="secondElementCard">5</div>
          <div className="secondElementCard">6</div>
        </div>
        <div className="secondElementGrid">
          <div className="secondElementGridTitle"> Favourites</div>
          <div className="secondElementCard">1</div>
          <div className="secondElementCard">2</div>
          <div className="secondElementCard">3</div>
          <div className="secondElementCard">4</div>
          <div className="secondElementCard">5</div>
          <div className="secondElementCard">6</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
