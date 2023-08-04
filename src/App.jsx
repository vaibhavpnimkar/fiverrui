import React from "react"
import Navbar from "./components/Navbar"
import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig"
import Orders from "./pages/orders/Orders"
import MyGigs from "./pages/myGigs/MyGigs"
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Add from "./pages/add/Add"
import Gigs from "./pages/gigs/Gigs";

function App() {

  const Layout = () => {
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },

        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },

        {
          path:"/orders",
          element:<Orders/>
        },

        {
          path:"/mygigs",
          element:<MyGigs/>
        },

        {
          path:"/messages",
          element:<Messages/>
        },

        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/add",
          element:<Add/>
        },

      
      ]
       
    },



    
  ]);

  return (
    <div>
   <RouterProvider router={router} />
     
    </div>
  )
}

export default App
