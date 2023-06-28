import React from 'react'
import '../assets/css/home.css'
import Header from '../common/components/header'
import userLogo from '../assets/images/user-logo.png'
import fileLogo from '../assets/images/file-logo.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='container mt-5'>
        <div className='row m-5  '>
            <div className="col-sm-12 col-md-12 col-lg-6 p-1">
                <div className='text-center p-5 user-container' onClick={()=>navigate("/add-user")}>
                    <img height="300px" width="300px" src={userLogo} alt="Add New User"/>
                    <h3>Add New User</h3>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-1">
                <div className='text-center p-5 user-container' onClick={()=>navigate("/user-list")}>
                    <img className='p-5' height="300px" width="300px" src={fileLogo} alt="All User"/>
                    <h3>All User</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home