import React from "react";
import Featured from "../../featured/Featured";
import TrustedBy from "../../components/trustedBy/trustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCards from "../../components/catCards/CatCards";
import "./Home.scss"
import ProjectCards from "../../components/projectCard/projectCards";
import GigCards from "../../components/gigCards/GigCards";






const Home = () => {
    return(
     
        <div className="home">
               
<Featured/>
<TrustedBy/>

<Slide slidesToShow={5} arrowsScroll={5}>
    {cards.map(card=>(
        <CatCards key={card.id} item={card}/>
    ))}
</Slide>

<div className="features">
    <div className="container">
        <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
                <img src="./img/check.png" alt="" />
                Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>


            <div className="title">
                <img src="./img/check.png" alt="" />
                Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>

            <div className="title">
                <img src="./img/check.png" alt="" />
                Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>

            <div className="title">
                <img src="./img/check.png" alt="" />
                Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            
        </div>
        <div className="item">
            <video src="./img/video.mp4" controls></video>
        </div>
    </div>


</div>


<div className="features dark">
    <div className="container">
        <div className="item">
      <h1>fiverr business</h1>
      <h1>A solution built for business</h1>
      <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
      <div className="title">
        <img src="./img/check.png" alt="" />
        Talent matching

      </div>

      <div className="title">
        <img src="./img/check.png" alt="" />
        Dedicated account management

      </div>

      <div className="title">
        <img src="./img/check.png" alt="" />
        Business payment solutions

      </div>

      <button>Explore fiverr Buiness</button>
      </div>
        <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" ></img>

            
        </div>
    </div>

    
</div>

<Slide slidesToShow={5} arrowsScroll={5}>
    {projects.map(card=>(
        <ProjectCards key={card.id} item={card}/>
    ))}
</Slide>


        </div>
    )
}

export default Home