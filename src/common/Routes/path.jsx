import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import AddUser from '../../pages/addUser'
import UserList from '../../pages/userList'
import AppLayout from '..'

const RoutePath = () => {
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user-list" element={<UserList />} />
    </Routes>
    )
}

export default RoutePath