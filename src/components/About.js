import React, { useState } from "react";
import data from "../data";

const About = () => {
    const [cards, setCards] = useState(data);
    

  return (
    <section>
      <h3>About this project</h3>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
          <div>{cards.map((card) => {
              const { id, title, pledge, description, left, button } = card;
              return (
                <article key={id} >
                <h3 >{title}</h3>
                <p >{pledge}</p>
                <p  >{description}</p>
                <p >{left} {""} <span >
                    left</span></p>
                <button>{button}</button>
            </article>

              )
          
      })}</div>
    </section>
  );
};

export default About;
