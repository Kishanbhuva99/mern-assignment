import React from 'react'
import { Navbarapp } from './Navbarapp'
import { Outlet } from 'react-router-dom'


export const Userlayout = () => {
  return (
    <>
    <Navbarapp/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
