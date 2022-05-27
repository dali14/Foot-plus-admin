import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";

const Topbar = (props) => {
  return (
    <div className="Topbar">
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className='logo'>
                   Welcome {props.user?.name}
                </span>
            </div>
            <div className="topRight">

               
                <Link to="/Myaccount" className="link">
                <img src={props.user?.image} alt="" className='topAvatar'></img>
                </Link>
            </div>
        </div>
        </div>
  )
}

export default Topbar