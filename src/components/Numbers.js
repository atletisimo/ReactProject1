import React from "react";

const Numbers = () => {
  return (
    <section style={{textAlign: "center", display:'flex',justifyContent:'space-between',position: 'relative',left:'230px'}}>
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
<br></br>
          <div style={{width: '500px' ,backgroundColor:'rgb(190, 181, 181);'}}>
     <button className="progressbar" style={{  width: "400px",
  height: "20px",backgroundColor:"darkturquoise", position:'relative',left:'-400px',top:'80px'}}></button></div>
       <br></br>
    </section>
  
  );
};

export default Numbers;
