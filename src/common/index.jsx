import React from 'react'
import Header from './components/header'

const AppLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default AppLayout