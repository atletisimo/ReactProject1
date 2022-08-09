import React from "react";
import mastercraft from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";

const MonitorRiser = () => {
  return (
    <section style={{ textAlign: "center" }}>
      <img src={mastercraft} alt="" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful and handcrafted monitor stand to reduce neck and eye strain
        .
      </p>
      <div>
        <button
          style={{
            position: "relative",
            right: "220px",
            backgroundColor: "	darkturquoise",
            borderRadius: "20px",
            fontSize: "16px",
            padding: "10px",
          }}
        >
          Back this project
        </button>
        <img src={bookmark} alt="" style={{position: "relative",top: "20px", right: "-140px"}} />
      </div>
    </section>
  );
};

export default MonitorRiser;
