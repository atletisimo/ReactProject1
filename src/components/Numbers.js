import React from "react";

const Numbers = () => {
  return (
    <section>
      <p>
        <span>$89,914</span>
        <br /> of $100,000 backed
      </p>
      <p>
        <span>5,007</span>
        <br /> total backers
      </p>
      <p>
        <span>56</span>
        <br /> days left
      </p>

      {/* <button id='progressbar'style={{w-9/12 bg-gray-300 rounded-full}}> */}

          {/* </button> */}
          <div style={{width: '500px' ,backgroundColor:'rgb(190, 181, 181);'}}>
     <button className="progressbar" style={{  width: "400px",
  height: "20px",backgroundColor:"green"}}></button></div>
     
    </section>
  );
};

export default Numbers;
