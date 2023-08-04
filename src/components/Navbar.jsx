import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import extractionImage from'../../public/img/extraction.jpg';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [active,setActive] =useState(false);
    const [open,setOpen] =useState(false);
    const {pathname} =useLocation();


    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect( () => {
window.addEventListener("scroll",isActive)

return () => {
    window.removeEventListener("scroll",isActive)
}
    },[])

    const currentUser ={
        id:1,
        userName:"John Doe",
        isSeller:true,

    } 
    

    
return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
    <div className="container">
        <div className="logo">

            <Link to="/" className="link">
            <span className="text">fiverr</span>
            </Link>
            <span className="dot">.</span>
        </div>
        <div className="links">
            <Link className="link">Explore</Link>
            <Link className="link">Fiverr Buisness</Link>
            <Link className="link">English</Link>
            <Link className="link">Sign In</Link>
          {!currentUser?.isSeller  &&<Link >Become a Seller</Link>}
        { !currentUser   &&<button>Join</button>}
        {
            currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                    <img src={extractionImage} alt="" />
                    <Link className="link">{currentUser?.userName}</Link>

                   { open && <div className="options">
                        {
                            currentUser?.isSeller &&(
                                <>
                                <Link to="/myGigs" className="link">Gigs</Link>
                                <Link to="/add" className="link">Add New Gigs</Link>
                                </>
                            )
                        }
                        <Link to="/orders" className="link">Orders</Link>
                        <Link to="/messages" className="link">Messages</Link>
                        <Link className="link">LogOut</Link>
                    </div>}
                </div>
            )
        }
        </div>
    </div>
    { (active || pathname !== "/")  &&(
    <> <hr/>
    <div className="menu">
    <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
    </div>
    </>)}
    </div>
)
}

export default Navbar