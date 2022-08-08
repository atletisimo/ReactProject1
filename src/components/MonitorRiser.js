import React from "react";
import mastercraft from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";

const MonitorRiser = () => {
  return (
    <section>
      <img src={mastercraft} alt="" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful and handcrafted monitor stand to reduce neck and eye strain
        .
      </p>
      <div>
        <button>Back this project</button>
        <img src={bookmark} alt="" />
      </div>
    </section>
  );
};

export default MonitorRiser;
