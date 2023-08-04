import React from "react";
import "./ProjectCards.scss"
import { Link } from "react-router-dom";
import Slide from "../Slide/Slide";
 
const ProjectCards = ({item}) => {
    return(
<Link to="/">
        <div className="projectCards">
         <img src={item.img} alt="" />
         <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
                <h2>{item.cat}</h2>
                <span>{item.username}</span>

            </div>
         </div>
          
            
          </div>
          </Link>
          
    )
}

export default ProjectCards