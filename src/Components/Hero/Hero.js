import React from "react"
import searchLogo from "./search.png";
import "./Hero.css"

const Hero =()=>{
    return(
        <div className="hero">
          <div>Land your dream job, <span className="colors">home</span>and<span className="colors">abroad</span>
          </div>
          <div>We connect you with top companies hiring talented professionals in the<span className="colors">US</span>and<span className="colors">Africa</span>
          </div>
          <div id="inputs">
              <input/><button>Search</button>
              <img src={searchLogo} alt="search"/>
          </div>
        </div>
    )
}
export default Hero