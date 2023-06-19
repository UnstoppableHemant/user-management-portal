import React from 'react'
import Header from '../common/components/header'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='container-fluid mt-5'>
        <div className='row mt-5 flex'>
            <div className="col-6 ">
                <div className='text-center p-5'>
                    <img height="300px" width="300px" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Add New User"/>
                    <h3>Add New User</h3>
                </div>
            </div>
            <div className="col-6">
                <div className='text-center p-5'>
                    <img height="300px" width="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXb2xjamJy0RCgbSgyedUK_loC1XSHxhPpw&usqp=CAU" alt="All User"/>
                    <h3>All User</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home