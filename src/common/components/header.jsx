import React from 'react'
import homeLogo from "../../assets/images/home-logo.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  var homeIcon = true;
  if(window.location.pathname == "/"){
    homeIcon = false;
  }
  console.log(window.location.pathname);
  return (
    <div className='container-fluid text-white p-2 bg-primary bg-gradient d-flex'>
        {homeIcon?<img src={homeLogo} className='m-1' height="45px" width="45px" alt="Home Logo" onClick={()=>{navigate("/")}}/>:""}
        <div className='container-fluid text-center'><h1>User Management Portal</h1></div>
    </div>
  )
}

export default Header