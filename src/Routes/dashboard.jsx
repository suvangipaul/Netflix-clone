import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="profiles">
      <h1>Profiles</h1>
      <div className="profile-pic">
        <img
          className="avatar"
          src={`https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg`}
          alt=""
        />
        <img
          className="avatar"
          src={`https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg`}
          alt=""
        />
        <img
          className="avatar"
          src={` https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg`}
          alt=""
        />
        <div className="add-profile">
          <img
            src={`http://cdn.onlinewebfonts.com/svg/img_28512.png`}
            height="60rem"
            alt=""
          />
          <p>Add Profile</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
