import React from 'react'
import mobileHero from "../images/image-hero-mobile.jpg";


const Background = () => {
  return (
      <div>
          <img src={mobileHero} alt='' style={{width:'1600px',height:'400px',objectFit:'cover'}} />
    </div>
  )
}

export default Background