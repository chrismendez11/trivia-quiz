import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../../store'

const ProtectedRoutes = () => {

    const name = useSelector((state: RootState) => state.username)

    if (name) {
        return <Outlet />
    } else {
        return <Navigate to='/name' />
    }


  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes